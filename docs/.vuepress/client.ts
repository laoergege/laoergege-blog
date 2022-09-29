import { defineClientConfig } from "@vuepress/client";
import "./styles/index.scss";
import { useRouter, useRoute } from "vue-router";

export default defineClientConfig({
  setup() {
    //@ts-ignore
    if (__VUEPRESS_SSR__) return;

    const router = useRouter();
    const route = useRoute();

    const redirect_uri = window.sessionStorage.getItem("redirect_uri");
    if (redirect_uri) {
      router.push({
        path: redirect_uri,
        query: route.query,
      });
    }
  },
});

//@ts-ignore
// if (!__VUEPRESS_SSR__) {
//   if ("serviceWorker" in navigator && !!!navigator.serviceWorker.controller) {
//     navigator.serviceWorker.register("/sw.js").then(function () {
//       console.log("Service Worker Registered");
//     });
//   }
// }