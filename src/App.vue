<template>
  <div class="main-container flex flex-col px-4 py-4">
    <h2>Handyv</h2>
    <div class="my-3">Items list</div>
    <hitems-list />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HitemsList from "@/components/HitemsList.vue";
import { useStore } from "vuex";

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
</style>
