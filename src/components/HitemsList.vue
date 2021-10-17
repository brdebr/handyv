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
          <VscodeButton @click="openInVscode(item.path)" />
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
import VscodeButton from "@/components/buttons/VscodeButton";

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
  @apply bg-orange-300 bg-opacity-20 backdrop-filter backdrop-blur-md overflow-hidden transition-all;
  @apply hover:bg-orange-400 hover:bg-opacity-20;
}
.hitem-folder-button {
  @apply rounded;
  @apply bg-white hover:bg-blueGray-100;
  @apply transition-colors hover:cursor-pointer;
}
</style>
