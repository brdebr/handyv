<template>
  <!--   <div>
    <ul>
      <li v-for="item in hitems" :key="item.name">
        {{ item }}
      </li>
    </ul>
  </div> -->

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
      <div class="leading-none pt-2 w-full sm:w-auto sm:pt-0 font-semibold">
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
            pointer-events-none
            whitespace-nowrap
          "
        >
          {{ item.path }}
        </div>
        <div class="botonera ml-auto flex gap-2">
          <div
            class="folder-button group"
            title="Open folder in Windows Explorer"
            @click="openFolder(item.path)"
          >
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
          <div
            class="terminal-button sudo group"
            title="Open administrator terminal in folder"
            @click="openTerminalSudo(item.path)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div @click="openTerminal(item.path)" class="terminal-button group" title="Open terminal in folder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
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

const store = useStore();

const hitems = computed(() => store.state.hitems);

const openFolder = (path) => {
  ipcRenderer.invoke("open-folder", path)
}
const openTerminal = (path) => {
  ipcRenderer.invoke("open-terminal", path)
}
const openTerminalSudo = (path) => {
  ipcRenderer.invoke("open-terminal-sudo", path)
}
</script>
