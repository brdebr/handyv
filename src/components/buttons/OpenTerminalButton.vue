<template>
  <div
    class="terminal-button hitem-folder-button group"
    :class="{ sudo }"
    title="Open terminal in folder"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="group-hover:text-indigo-800 group-hover:active:text-green-600"
    >
      <path
        fill-rule="evenodd"
        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  sudo: Boolean,
});
</script>
<style lang="scss">
.terminal-button {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  &.sudo {
    > svg {
      @apply text-gray-700;
    }
  }
  > svg {
    @apply h-7 w-7 p-1 text-gray-500 transition-colors;
  }
}
</style>
