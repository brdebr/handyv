<template>
  <div
    class="file-button hitem-folder-button group"
    :class="{ selected }"
    title="Open file in Windows Explorer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="group-hover:text-yellow-800 dark:text-blue-800 group-hover:active:text-green-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
.file-button {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-orange-700 dark:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  &.selected {
    @apply border-blue-800 bg-blueGray-400 dark:bg-blueGray-50;
    > svg {
      @apply text-white;
    }
  }
  > svg {
    @apply h-7 w-7 p-1 transition-colors;
    @apply text-yellow-500 dark:text-blue-500;
  }
}
</style>
