<template>
  <div class="delete-item hitem-folder-button group" title="Delete item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style lang="scss">
.delete-item {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-orange-700 dark:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  > svg {
    @apply h-7 w-7 p-1 text-red-500 transition-colors;
  }
}
</style>
