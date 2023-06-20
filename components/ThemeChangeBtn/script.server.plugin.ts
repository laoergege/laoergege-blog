import config from "@/app.config";

type T = Parameters<typeof defineNitroPlugin>[0]

export const btnID = "themeBtn";
export const tbtnscript = "tbtnscript"

const reg = new RegExp(`<script.*?id="${tbtnscript}".*?\/script>`)

export default ((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.body[0] = html.body[0].replace(reg, `<script id="${tbtnscript}" key="${tbtnscript}">document.body.querySelector("#${btnID}").checked = localStorage.getItem('${config.themes.storageKey}') === "dark"</script>`)
  })
}) as T