<template>
  <div
    class="theme-button hitem-folder-button group"
    title="Copy path to clipboard"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="group-hover:text-blueGray-800 group-hover:active:text-green-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style lang="scss">
.theme-button {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  > svg {
    @apply h-7 w-7 p-1 text-blueGray-600 transition-colors;
  }
}
</style>
