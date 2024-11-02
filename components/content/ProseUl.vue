<template>
  <ul>
    <slot />
  </ul>
</template>

<style>
article {
  --li-margin: 0.3em;

  li {
    margin: var(--li-margin) !important;

    img {
      margin-top: 0.4em;
      margin-bottom: 0.4em;
    }
  }

  li {
    ul::before {
      content: "";
      position: absolute;
      height: calc(100% - 1.2em);
      width: 1.5px;
      background-color: oklch(var(--b2));
      left: -1em;
      top: 1em;
    }

    ul:hover::before {
      background-color: oklch(var(--nc));
      transition: all 0.2s;
    }
  }

  ul {
    list-style: none;
    padding-left: 18px;

    li {
      position: relative;
      display: list-item;

      &::before {
        content: "";
        width: 8px;
        height: 1.5px;
        background-color: oklch(var(--n));
        position: absolute;
        left: -1em;
        top: calc(0.5em + var(--li-margin));
      }

      &:hover::before {
        color: oklch(var(--bc));
        transition: all 0.2s;
      }
    }
  }
}
</style>
