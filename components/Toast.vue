<template>
  <template v-if="isShow">
    <Teleport to="body">
      <div class="toast z-10">
        <div class="alert" v-bind="attrs">
          <button class="btn btn-circle btn-xs" @click="isShow = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <slot></slot>
        </div>
    </div>
  </Teleport>
  </template>
</template>

<script lang="ts" setup>
interface Props {
  timeout?: number
}
const { timeout = 3000 } = defineProps<Props>()

const isShow = defineModel()

const attrs = useAttrs()
    
watchEffect((onCleanup) => {
  let id: any;
  const clean = () => {
    id && clearTimeout(id)
  }
  if(isShow.value && timeout) {
    id = setTimeout(() => {
      isShow.value = false
      clean();
    }, timeout)
  }
  onCleanup(clean)
})
</script>