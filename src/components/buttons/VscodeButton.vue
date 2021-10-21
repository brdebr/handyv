<template>
  <div class="vscode-button hitem-folder-button group" title="Open folder in VsCode">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="
        h-5
        w-5
        group-hover:text-blueGray-800 group-hover:active:text-green-600
      "
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style lang="scss">
.vscode-button {
  @apply border border-orange-400 dark:border-blue-400;
  @apply hover:border-blue-700;
  @apply active:border-orange-800 dark:border-blue-800;
  > svg {
    @apply h-7 w-7 p-1 text-blue-700 transition-colors;
  }
}
</style>
