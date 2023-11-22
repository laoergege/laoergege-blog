import type { NitroErrorHandler } from 'nitropack'

export default <NitroErrorHandler>function (error, event) {
  if (import.meta.prerender && error.statusCode === 404) {
    console.error(event.path)
    error.statusCode = 200
  }
}
