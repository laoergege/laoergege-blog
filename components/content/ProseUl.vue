<template>
  <ul>
    <slot />
  </ul>
</template>

<style>
article {
  li ul::before {
    content: "";
    position: absolute;
    height: calc(100% - 16px);
    width: 1px;
    background-color: oklch(var(--b3));
    left: -1em;
    top: 1.2em;
  }

  ul {
    list-style: none;
    padding-left: 18px;

    li {
      position: relative;
      margin: 12px 0 !important;
      display: list-item;

      &::before {
        content: "-";
        font-size: 1.3em;
        position: absolute;
        left: -1em;
        color: oklch(var(--nc));
        top: -0.25em;
      }
    }
  }
}
</style>
