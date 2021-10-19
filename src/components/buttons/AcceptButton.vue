<template>
  <div
    class="accept-button hitem-folder-button group"
    title="Copy path to clipboard"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      :class="{
        'text-gray-200': props.disabled,
        'text-green-700': !props.disabled,
      }"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    defult: false,
  },
});
</script>
<style lang="scss">
.accept-button {
  @apply border border-green-600;
  @apply hover:border-blue-700;
  @apply active:border-orange-800;
  > svg {
    @apply h-7 w-7 p-1 transition-colors;
  }
}
</style>
