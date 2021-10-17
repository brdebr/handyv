<template>
  <div class="hitems-list flex flex-col gap-3">
    <div
      v-for="item in hitems"
      :key="item.name"
      class="
        hitem-folder
        rounded
        flex
        items-center
        flex-wrap
        sm:flex-nowrap
        gap-4
        px-3
        py-2
      "
    >
      <div
        class="
          pt-2
          sm:pt-0
          w-full
          sm:w-auto
          font-semibold
          overflow-ellipsis overflow-hidden
          select-none
          whitespace-nowrap
        "
        :title="item.name"
      >
        {{ item.name }}
      </div>
      <div class="flex items-center w-full sm:flex-1">
        <div
          class="
            text-gray-900
            flex-grow-0 flex-shrink
            text-opacity-60
            leading-none
            overflow-ellipsis overflow-hidden
            pr-2
            select-none
            whitespace-nowrap
          "
          :title="item.path"
        >
          {{ item.path }}
        </div>
        <div class="botonera ml-auto flex gap-2">
          <ClipboardButton @click="copyToClipBoard(item.path)" />
          <OpenFolderButton @click="openFolder(item.path)" />
          <OpenTerminalButton
            title="Open administrator terminal in folder"
            @click="openTerminalSudo(item.path)"
            sudo
          />
          <OpenTerminalButton @click="openTerminal(item.path)" />
          <div class="terminal-button group" @click="openInVscode(item.path)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ipcRenderer } from "electron";
import { useStore } from "vuex";

import ClipboardButton from "@/components/buttons/ClipboardButton";
import OpenFolderButton from "@/components/buttons/OpenFolderButton";
import OpenTerminalButton from "@/components/buttons/OpenTerminalButton";

const store = useStore();

const hitems = computed(() => store.state.hitems);

const copyToClipBoard = async (path) => {
  await navigator.clipboard.writeText(path);
};

const openInVscode = (path) => {
  ipcRenderer.invoke("open-folder-vscode", path);
};
const openFolder = (path) => {
  ipcRenderer.invoke("open-folder", path);
};
const openTerminal = (path) => {
  ipcRenderer.invoke("open-terminal", path);
};
const openTerminalSudo = (path) => {
  ipcRenderer.invoke("open-terminal-sudo", path);
};
</script>

<style>
.hitem-folder {
    @apply bg-orange-300 bg-opacity-20 backdrop-filter backdrop-blur-md overflow-hidden;
    @apply hover:bg-orange-400 hover:bg-opacity-20;
}
</style>
