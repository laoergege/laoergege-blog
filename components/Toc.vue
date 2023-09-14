<script lang="tsx">
import { useSubscription } from "@vueuse/rxjs";
import { fromEvent, from, startWith } from "~/node_modules/rxjs";
import {
  debounceTime, switchMap, filter, tap, throttleTime
} from "~/node_modules/rxjs/operators";
import { ref } from "vue";
import { articleMounted$ } from "~/pages/[...slug].vue";

export default defineComponent({
  setup() {
    const archors = computed<HTMLElement[]>(() => {
      return Array.from(articleMounted$.value?.querySelectorAll("h1, h2, h3") ?? [])
    })
    const itemsRef = ref<HTMLElement[]>([])

    // #region 滚动自动目录定位
    if (process.client) {
      onMounted(() => {
        const archorsOffsetTop = archors.value.map(e => e.offsetTop)

        useSubscription(
          fromEvent(document, "scroll")
            .pipe(
              startWith(null),
              debounceTime(100),
              switchMap(() => from(Object.entries(archorsOffsetTop))),
              tap(([idx, offsetTop]) => {
                itemsRef.value[+idx]?.classList.remove("active");
              }),
              filter(([idx, offsetTop]) => {
                let d = window.scrollY
                return d <= (offsetTop) // 10 误差调整
              }),
              throttleTime(10),
              tap(([idx, offsetTop]) => {
                itemsRef.value[+idx - 1]?.classList.add("active");
              }),
            ).subscribe()
        )
      })
    }
    // #endregion

    let i = 0
    const tree = (list: any[]) => {
      return (
        <ul class="whitespace-normal">
          {list.map(item => {
            return (
              <li>
                <a href={`#${archors.value[i++].id}`} ref={itemsRef} ref_for={true}>{item.text} </a>
                {Array.isArray(item.children) && tree(item.children)}
              </li>
            )
          })}
        </ul>
      )
    }
    const { toc, page } = useContent();

    return () => (
      archors.value.length ? (
        <ul class="menu menu-md whitespace-normal">
          <li>
            <a class="menu-title" ref={itemsRef} ref_for={true} href={`#${archors.value[i++].id}`}>{page.value.title}</a>
            {tree(toc.value.links)}
          </li>
        </ul >
      ) : null
    )
  }
})
</script>