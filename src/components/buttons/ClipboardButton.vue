<template>
  <div
    class="clipboard-button hitem-folder-button group"
    title="Copy path to clipboard"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="group-hover:text-blueGray-800 group-hover:active:text-green-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
      <path
        d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style lang="scss">
.clipboard-button {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  > svg {
    @apply h-7 w-7 p-1 text-blueGray-600 transition-colors;
  }
}
</style>
