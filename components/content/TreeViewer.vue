<script lang="tsx">
export default {
  setup() {
    return () => (
      <div class="viewer-container overflow-auto min-w-full">
        <div class="tree">
          <slot />
        </div>
      </div>
    )
  }
}
</script>

<style lang="postcss">
.tree {
  --spacing: 1.5rem;
  --bg-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));

  /* padding-left: calc(var(--spacing) / 2); */

  details {
    position: relative;

    summary {
      cursor: pointer;
      list-style: none;
      position: relative;
      padding-left: 1em;

      /* button */
      &::before {
        content: "+";
        z-index: 1;
        background: hsl(var(--a));
        color: #fff;
        transform: translate(-50%, 25%);
        position: absolute;
        left: 0;
        height: 1em;
        width: 1em;
        border-radius: 0.2em;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &[open] {
      & > summary::before {
        content: "−";
        background: hsl(var(--af));
      }

      /* 竖线 */
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: -2px;
        height: calc(100% - var(--spacing));
        border: solid #ddd;
        border-width: 0 2px 0 0;
        border-style: dashed;
        bottom: 0;
      }
    }
  }

  ul {
    list-style: none !important;
    padding-left: 0 !important;

    &:not(:has(+ summary)) {
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: -2px;
        height: calc(100% - var(--spacing));
        border: solid #ddd;
        border-width: 0 2px 0 0;
        border-style: dashed;
        bottom: 0;
      }
    }

    li {
      position: relative;
      padding-left: calc(1.5 * var(--spacing));
      line-height: var(--spacing);

      /* 横线 */
      &::before {
        content: "";
        display: block;
        position: absolute;
        transform: translate(0, -50%);
        left: -2px;
        width: calc(var(--spacing) + 2px);
        height: calc(var(--spacing) + 1px);
        border: solid #ddd;
        border-width: 0 0 2px 0;
        border-style: dashed;
      }

      /* 遮挡多余竖线 */
      &:last-child::after {
        content: "";
        display: block;
        position: absolute;
        left: -2px;
        height: 100%;
        border-style: dashed;
        top: calc(var(--spacing) / 2);
        background-color: var(--bg-color);
        width: 10px;
        z-index: 1;
      }
    }
  }

  & > ul > li {
    &::before,
    &::after {
      display: none;
    }
  }
}
</style>
