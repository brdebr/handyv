<template>
  <div
    class="
      p-3
      bg-white
      dark:bg-blueGray-800
      dark:text-blueGray-50
      min-w-[85%]
      sm:min-w-[450px] sm:w-[600px]
      max-w-[85%]
      min-h-[450px]
      max-h-[90%]
      rounded-md
      border border-blueGray-300
      flex flex-col
    "
  >
    <div
      class="
        border-b border-blueGray-300
        -mx-3
        -mt-3
        mb-2
        py-3
        px-4
        flex
        items-center
      "
    >
      <slot name="title">
        <div class="font-semibold select-none">
          {{ cardTitle }}
        </div>
        <CloseButton v-if="close" @click="close()" class="ml-auto" />
      </slot>
    </div>
    <div class="overflow-auto px-1">
      <slot name="body">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellendus, atque dicta nihil libero cupiditate deserunt maiores iure
          voluptas fugit dolores voluptatibus sapiente quae assumenda tempore
          accusantium nostrum natus aliquid.
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import CloseButton from "@/components/buttons/CloseButton.vue";
const props = defineProps({
  cardTitle: {
    type: String,
    default: "Card title - set by :title",
  },
  close: {
    type: Function,
  },
});
</script>

<style lang="scss"></style>
