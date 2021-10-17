<template>
  <div class="folder-button hitem-folder-button group" title="Open folder in Windows Explorer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="group-hover:text-yellow-800 group-hover:active:text-green-600"
    >
      <path
        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style lang="scss">
.folder-button {
  @apply border border-orange-400;
  @apply hover:border-orange-700;
  @apply active:border-orange-800;
  > svg {
    @apply h-7 w-7 px-1 py-1 transition-colors;
    @apply text-yellow-500;
  }
}
</style>
