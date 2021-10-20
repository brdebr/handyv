<template>
  <div class="main-container flex flex-col px-4 py-4">
    <div
      class="flex justify-center min-w-min mb-2 mt-1 sm:mb-4 sm:mt-2 relative"
    >
      <div class="handyv-logo select-none">
        <img
          src="@/assets/logo-color.svg"
          alt="Handyv logo"
          class="
            h-[28px]
            w-[100px]
            sm:h-[50px] sm:w-[150px]
            overflow-visible
            object-contain
          "
        />
      </div>
      <div class="absolute top-3 right-0">
        <ConfigButton />
      </div>
    </div>
    <AddHitem />
    <HitemsList />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HitemsList from "@/components/HitemsList.vue";
import AddHitem from "@/components/AddHitem.vue";
import { useStore } from "vuex";
import Modal from "@/components/Modal.vue";
import CloseButton from "@/components/buttons/CloseButton.vue";
import ConfigButton from "@/components/buttons/ConfigButton.vue";

const modalVisible = ref(false);

const store = useStore();
onMounted(async () => {
  console.log("start");
  await store.dispatch("fetchHitems");
});
</script>

<style lang="scss">
.main-container {
  @apply min-h-screen;
  @apply bg-gradient-to-br from-white to-blueGray-100;
}

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background: #ff910080;
  &:hover {
    background: #bf360c5b;
  }
  &:active {
    border-radius: 14px;
    background: #bf360c5b;
  }
}
::-webkit-scrollbar-track {
  background: #fff1745b;
  &:hover {
    background: #ffd93279;
  }
}
</style>
