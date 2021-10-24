<template>
  <div
    class="
      border
      rounded-md
      p-1
      hover:border-blueGray-500
      dark:hover:border-blue-300
      active:border-red-500
      transition-colors
      cursor-pointer
      group
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="
        h-4
        w-4
        text-gray-400
        group-hover:text-gray-700
        dark:group-hover:text-gray-300
        group-active:text-red-700
        transition-colors
      "
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup></script>
