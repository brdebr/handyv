<template>
  <div
    class="folder-button hitem-folder-button group"
    :class="{ selected }"
    title="Open folder in Windows Explorer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="group-hover:text-yellow-800 dark:text-blue-800 group-hover:active:text-green-600"
    >
      <path
        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
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
.folder-button {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-orange-700 dark:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  &.selected {
    @apply border-blue-800 bg-blueGray-400;
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
