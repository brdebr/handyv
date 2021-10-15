<template>
  <div
    class="
      main-container
      flex flex-col
      px-4
      py-4
      bg-gradient-to-b
      from-white
      to-blueGray-200
      min-h-screen
      bg-red-500
    "
  >
    <div class="hitems-list flex flex-col gap-3">
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
        <div class="leading-none pt-2 w-full sm:w-auto sm:pt-0">
          CodeTest - WAMP
        </div>
        <div
          class="
            text-gray-900 text-opacity-60
            leading-none
            overflow-ellipsis overflow-hidden
          "
        >
          L:\wamp64\www\projects\tsugi\mod\codetest
        </div>
        <div class="ml-auto flex gap-2">
          <div class="folder-button group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                h-7
                w-7
                px-1
                py-1
                text-yellow-500
                group-hover:text-blue-400 group-hover:active:text-green-600
                transition-colors
              "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              />
            </svg>
          </div>
          <div class="folder-button group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="
                h-7
                w-7
                px-1
                py-1
                text-yellow-500
                group-hover:text-blue-400 group-hover:active:text-green-600
                transition-colors
              "
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
    <hitems-list />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HitemsList from "@/components/HitemsList.vue";
import { useStore } from "vuex";

import "@/assets/tailwind.css";

export default defineComponent({
  name: "App",
  components: {
    HitemsList,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      console.log("start");
      store.dispatch("fetchHitems").then(() => {
        console.log("ya");
      });
    });
  },
});
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
