<template>
  <div
    class="file-button hitem-folder-button group"
    :class="{ selected: props.selected }"
    title="Open file in Windows Explorer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="group-hover:text-yellow-800 group-hover:active:text-green-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
      />
      <path
        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
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
  @apply border border-orange-400;
  @apply hover:border-orange-700;
  @apply active:border-orange-800;
  &.item{
    > svg {
      @apply text-orange-600;
    }
  }
  &.selected {
    @apply border-blue-800 bg-blueGray-400;
    > svg {
      @apply text-white;
    }
  }
  > svg {
    @apply h-7 w-7 px-1 py-1 transition-colors;
    @apply text-yellow-500;
  }
}
</style>
