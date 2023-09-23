import { prefixStorage, createStorage } from 'unstorage'
// // @ts-ignore
import { useNitroApp, useRuntimeConfig, useStorage } from '#imports'
// console.log(prefixStorage, useStorage)
import { getContentQuery } from "nuxt-content/utils/query.ts";

import { getContentIndex } from "nuxt-content/server/content-index.ts";
import handler from "nuxt-content/server/api/query.ts";

import httpDriver from "unstorage/drivers/http";
const storage = createStorage({
  driver: httpDriver({
    base: "http://localhost:3001"
  })
})

export default defineEventHandler(async (event) => {
  const res = await handler(event)
  console.log(res)



  return 'Hello World!'
})
