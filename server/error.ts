import type { NitroErrorHandler } from 'nitropack'

export default <NitroErrorHandler>function (error, event) {
  if (import.meta.prerender && error.statusCode === 404) {
    error.statusCode = 200
  }
}
