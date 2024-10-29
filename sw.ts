import { registerRoute, setCatchHandler } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { warmStrategyCache } from 'workbox-recipes';
import { ExpirationPlugin } from 'workbox-expiration';

const precache = [
  "/offline",
  "/offline/_payload.json"
]

const strategy = new NetworkFirst({
  cacheName: "offline-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200], // 缓存成功和非网络的响应
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
    {
      async cacheKeyWillBeUsed({ request }) {
        const url = new URL(request.url);

        // 规范化 _params 请求参数
        if (url.pathname.startsWith("/api/_content")) {
          const params = JSON.parse(decodeURIComponent(url.searchParams.get("_params") ?? "{}"));
          const keys = Object.keys(params).sort()
          const newParams = new URLSearchParams();
          for (const k of keys) {
            // @ts-ignore
            newParams[k] = params[k];
          }
          url.searchParams.set("_params", JSON.stringify(newParams))

          return new Request(url.toString(), request)
        }

        return request
      }
    }
  ]
})
warmStrategyCache({ urls: precache, strategy });

const allowHosts = [
  "localhost",
  "laoergege"
]

registerRoute(
  ({ url }) => (allowHosts.some(h => new RegExp(h).test(url.host)) && /https?\:/.test(url.protocol)),
  strategy,
  "GET"
);

setCatchHandler(async ({ request }) => {
  // 离线状态，请求的是文档，返回离线页面
  if (request.destination === 'document' && request.mode === "navigate" && !navigator.onLine) {
    return (await caches.match('/offline')) || Response.error();
  }

  return Response.error()
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});