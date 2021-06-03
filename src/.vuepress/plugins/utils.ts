import consola from "consola";

export const isDev = process.env.NODE_ENV === 'development'

export const logger = consola.withTag('Plugin')