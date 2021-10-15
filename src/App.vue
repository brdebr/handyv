<template>
  <h2>Handyv</h2>
  <div>Items list</div>
  <hitems-list />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
