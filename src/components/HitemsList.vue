<template>
  <div class="hitems-list flex flex-col gap-3">
    <draggable
      v-model="hitems"
      group="hitems"
      @start="drag = true"
      @end="drag = false"
      item-key="name"
      tag="transition-group"
      :component-data="{
        tag: 'div',
        type: 'transition-group',
        name: !drag ? 'hitems-list' : null,
      }"
      class="hitems-list flex flex-col gap-3"
    >
      <template #item="{ element }">
        <div
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
            :title="element.name"
          >
            {{ element.name }}
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
              :title="element.path"
            >
              {{ element.path }}
            </div>
            <div class="botonera ml-auto flex gap-2">
              <ClipboardButton @click="copyToClipBoard(element.path)" />
              <OpenFolderButton @click="openFolder(element.path)" />
              <OpenTerminalButton
                title="Open administrator terminal in folder"
                @click="openTerminalSudo(element.path)"
                sudo
              />
              <OpenTerminalButton @click="openTerminal(element.path)" />
              <VscodeButton @click="openInVscode(element.path)" />
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
import { ipcRenderer } from "electron";
import { useStore } from "vuex";

import draggable from "vuedraggable";

const drag = ref(false);

import ClipboardButton from "@/components/buttons/ClipboardButton";
import OpenFolderButton from "@/components/buttons/OpenFolderButton";
import OpenTerminalButton from "@/components/buttons/OpenTerminalButton";
import VscodeButton from "@/components/buttons/VscodeButton";

const store = useStore();

const hitems = computed({
  get: () => store.state.hitems,
  set: (val) => {
    store.commit("set_hitems", val);
  },
});

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
.hitems-list-move {
  transition: transform 1s;
}
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
