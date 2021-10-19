<template>
  <teleport to="#modals" v-if="visible">
    <div class="modal">
      <div class="modal-overlay">
        <div class="modal-content">
          <transition name="fade-y">
            <slot name="default">
              <div class="text-white">Hola soy un modal</div>
            </slot>
          </transition>
        </div>
      </div>
    </div>
  </teleport>
  <slot name="activator" :open="open" :close="close">
    <div>
      <button @click="setVisible(true)">Open modal</button>
    </div>
  </slot>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:visible"]);

const modalContent = ref(true);

const open = () => emit("update:visible", true);
const close = () => emit("update:visible", true);
const closeContent = () => (modalContent.value = false);
</script>

<style lang="scss">
.modal {
  .modal-overlay {
    z-index: 9000;
    @apply fixed top-0 left-0 w-screen h-screen;
    @apply bg-gradient-to-b from-[rgba(253,230,138,0.2)] to-[rgba(255,255,255,0.5)] backdrop-filter backdrop-blur-md;
    .modal-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: transform opacity 0.5s;
}
.fade-y-enter {
  opacity: 0;
  transform: translateY(-25%);
}
.fade-y-leave-to {
  opacity: 0;
  transform: translateY(25%);
}
</style>
