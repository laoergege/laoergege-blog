<template>
  <ul>
    <slot />
  </ul>
</template>

<style>
article {
  li {
    ul::before {
      content: "";
      position: absolute;
      height: calc(100% - 1.2em);
      width: 2px;
      background-color: oklch(var(--nc));
      left: -1em;
      top: 1em;
    }

    ul:hover::before {
      background-color: oklch(var(--bc));
      transition: all 0.2s;
    }
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
        font-size: 1.5em;
        position: absolute;
        left: -0.85em;
        color: oklch(var(--nc));
        top: -0.25em;
      }

      &:hover::before {
        color: oklch(var(--bc));
        transition: all 0.2s;
      }
    }
  }
}
</style>
