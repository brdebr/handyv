<template>
  <div class="folder-button group" title="Open folder in Windows Explorer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style>
.folder-button {
  @apply bg-white rounded hover:bg-blueGray-50;
  @apply border border-orange-400;
  @apply hover:border-orange-700;
  @apply transition-colors cursor-pointer;
  @apply active:border-orange-800;
  @apply transition-colors;
}

.folder-button > svg {
  @apply h-7 w-7 px-1 py-1 transition-colors;
  @apply text-yellow-500 group-hover:text-yellow-800 group-hover:active:text-green-600;
}
</style>
