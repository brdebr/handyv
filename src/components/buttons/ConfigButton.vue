<template>
  <div class="config-button hitem-folder-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
      />
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss">
.config-button {
  @apply border border-orange-500;
  @apply hover:border-blue-700;
  @apply active:border-orange-800;
  > svg {
    @apply h-7 w-7 p-1 text-gray-500 transition-colors;
  }
}
</style>
