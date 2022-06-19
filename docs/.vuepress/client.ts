import { defineClientConfig } from "@vuepress/client";
import "./styles/index.scss";

//@ts-ignore
// if (!__VUEPRESS_SSR__) {
//   if ("serviceWorker" in navigator && !!!navigator.serviceWorker.controller) {
//     navigator.serviceWorker.register("/sw.js").then(function () {
//       console.log("Service Worker Registered");
//     });
//   }
// }

export default defineClientConfig({});
