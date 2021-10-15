<template>
  <div>
    <ul>
      <li v-for="item in hitems" :key="item.name">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();

const hitems = computed(() => store.state.hitems);
</script>
