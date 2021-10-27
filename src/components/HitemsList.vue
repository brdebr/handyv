<template>
  <div>
    <draggable
      v-model="hitems"
      group="hitems"
      @start="drag = true"
      @end="drag = false"
      item-key="path"
      tag="transition-group"
      :animation="200"
      ghostClass="hitem-ghost"
      :component-data="{
        tag: 'div',
        type: '',
        name: !drag ? 'hitems-list-transition' : null,
      }"
      class="hitems-list flex flex-col gap-3"
    >
      <template #item="{ element }">
        <div
          class="hitem-item"
          :class="`${element.type}`"
          @contextmenu="openFolder(element.path)"
        >
          <div class="hitem-item__title" :title="element.name">
            {{ element.name }}
          </div>
          <div class="flex items-center w-full sm:flex-1 sm:w-px">
            <div class="hitem-item__path" :title="element.path">
              {{ element.path }}
            </div>
            <div class="ml-auto flex gap-2" v-if="element.type === 'directory'">
              <ClipboardButton @click="copyToClipBoard(element.path)" />
              <OpenFolderButton @click="openFolder(element.path)" />
              <OpenTerminalButton
                title="Open administrator terminal in folder"
                @click="openTerminalSudo(element.path)"
                sudo
              />
              <OpenTerminalButton @click="openTerminal(element.path)" />
              <VscodeButton @click="openInVscode(element.path)" />
              <DeleteButton @click="deleteItem(element.path)" />
            </div>
            <div class="ml-auto flex gap-2" v-else-if="element.type === 'file'">
              <ClipboardButton @click="copyToClipBoard(element.path)" />
              <VscodeButton @click="openInVscode(element.path)" />
              <DeleteButton @click="deleteItem(element.path)" />
            </div>
            <div class="ml-auto flex gap-2" v-else-if="element.type === 'link'">
              <LinkButton
                title="Open link in edge"
                edge
                :default="false"
                @click="openLinkEdge(element.path)"
              />
              <LinkButton
                title="Open link in firefox in private"
                firefox
                private
                :default="false"
                @click="openLinkFirefoxPrivate(element.path)"
              />
              <LinkButton
                title="Open link in firefox"
                firefox
                :default="false"
                @click="openLinkFirefox(element.path)"
              />
              <LinkButton
                title="Open link in default browser"
                class="item"
                @click="openLink(element.path)"
              />
              <DeleteButton @click="deleteItem(element.path)" />
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
import DeleteButton from "@/components/buttons/DeleteButton";
import LinkButton from "./buttons/LinkButton";

const store = useStore();

const hitems = computed({
  get: () => store.state.hitems,
  set: (val) => {
    store.dispatch("saveHitems", val);
  },
});

const deleteItem = (path) => {
  store.dispatch("deleteHitem", path);
};

const copyToClipBoard = async (path) => {
  await navigator.clipboard.writeText(path);
};

const openLinkEdge = (path) => {
  ipcRenderer.invoke("open-link-edge", path);
};
const openLinkFirefoxPrivate = (path) => {
  ipcRenderer.invoke("open-link-firefox-private", path);
};
const openLinkFirefox = (path) => {
  ipcRenderer.invoke("open-link-firefox", path);
};
const openLink = (path) => {
  ipcRenderer.invoke("open-link", path);
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

<style lang="scss">
.hitems-list-transition-move {
  transition: transform 0.5;
}
.hitem-ghost {
  opacity: 0.9;
}
.hitem-item {
  @apply backdrop-filter backdrop-blur-md overflow-hidden transition-all;
  @apply rounded;
  @apply flex gap-4 flex-wrap items-center;
  @apply sm:flex-nowrap;
  @apply px-3 py-2;
  cursor: grab;
  &__title {
    @apply pt-2;
    @apply sm:pt-0;
    @apply w-full;
    @apply sm:w-auto;
    @apply font-semibold;
    @apply overflow-ellipsis overflow-hidden;
    @apply select-none;
    @apply whitespace-nowrap;
    @apply sm:min-w-[200px];
    @apply lg:min-w-[250px];
    @apply xl:min-w-[300px];
    @apply 2xl:min-w-[350px];
  }
  &__path {
    @apply text-gray-900 dark:text-blueGray-100;
    @apply flex-grow-0 flex-shrink;
    @apply text-opacity-60 dark:text-opacity-60;
    @apply overflow-ellipsis overflow-hidden;
    @apply pr-2;
    @apply select-none;
    @apply whitespace-nowrap;
  }
  // &.directory,
  // &.link,
  // &.file {
  //   @apply bg-opacity-20;
  //   @apply hover:bg-opacity-20;
  //   @apply dark:bg-opacity-20;
  //   @apply dark:hover:bg-opacity-40;
  // }
  &.directory {
    @apply bg-orange-300;
    @apply hover:bg-orange-400;
    @apply dark:bg-orange-800;
    @apply dark:hover:bg-orange-700;

    @apply bg-opacity-20;
    @apply hover:bg-opacity-20;
    @apply dark:bg-opacity-20;
    @apply dark:hover:bg-opacity-30;
  }
  &.link {
    @apply bg-blue-300;
    @apply hover:bg-blue-400;
    @apply dark:bg-blue-800;
    @apply dark:hover:bg-blue-700;

    @apply bg-opacity-20;
    @apply hover:bg-opacity-20;
    @apply dark:bg-opacity-20;
    @apply dark:hover:bg-opacity-30;
  }
  &.file {
    @apply bg-emerald-300;
    @apply hover:bg-emerald-400;
    @apply dark:bg-emerald-500;
    @apply dark:hover:bg-emerald-600;

    @apply bg-opacity-20;
    @apply hover:bg-opacity-20;
    @apply dark:bg-opacity-10;
    @apply dark:hover:bg-opacity-20;
  }
}
.hitem-folder-button {
  @apply rounded;
  @apply bg-white hover:bg-blueGray-100 dark:bg-blueGray-900;
  @apply transition-colors hover:cursor-pointer;
}
</style>
