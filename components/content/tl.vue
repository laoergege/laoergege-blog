<template>
  <div class="tree">
    <slot />
  </div>
</template>

<style lang="postcss">
.tree {
  --spacing: 1.5rem;
  --bg-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
  --line-height: calc(var(--spacing) * 1.2);
  --pl: calc(var(--spacing) * 0.6);
  padding-left: var(--pl);

  ul {
    list-style: none !important;
    padding-left: 0 !important;

    &::before {
      content: "";
      display: block;
      width: var(--pl);
      position: absolute;
      border-width: 0 0 0 2px;
      border-style: solid;
      @apply border-base-300 dark:border-primary-content;
      box-sizing: border-box;
      pointer-events: none;
      top: calc(var(--line-height) / 2 - 2px);
      height: 100%;
      left: 0;
    }

    li {
      padding-left: var(--pl);
      line-height: var(--line-height);
      position: relative;

      summary {
        cursor: pointer;

        &::marker {
          @apply text-base-300
        }
      }

      &::before {
        content: "";
        display: block;
        width: var(--spacing);
        height: calc(var(--line-height) / 2);
        position: absolute;
        transform: translate(-50%, -100%);
        border-width: 0 0 2px 0;
        border-style: solid;
        @apply border-base-300 dark:border-primary-content;
        box-sizing: border-box;
        pointer-events: none;
        top: calc(var(--line-height) / 2);
        left: 0;
      }

      /**遮挡竖线 */
      &:last-child::after {
        content: "";
        display: block;
        width: var(--spacing);
        height: 100%;
        position: absolute;
        transform: translate(-100%, 0);
        pointer-events: none;
        top: calc(var(--line-height) / 2);
        @apply bg-base-100;
        z-index: 1;
        left: 0;
      }
    }
  }
}
</style>
