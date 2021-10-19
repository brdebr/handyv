<template>
  <teleport to="#modals" v-if="visible">
    <div class="modal">
      <div
        class="modal-overlay"
        :class="{ closing: modalContentClosing }"
        @click.prevent.capture="false"
      >
        <div class="modal-content">
          <transition name="fade-y" appear mode="out-in">
            <slot
              name="default"
              v-if="modalContent"
              :open="open"
              :close="close"
            >
              <div class="text-white p-4 rounded">Modal content goes here</div>
            </slot>
          </transition>
        </div>
      </div>
    </div>
  </teleport>
  <slot name="activator" :open="open" :close="close">
    <div>
      <button @click="close()">Open modal</button>
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
const modalContentClosing = ref(false);

const open = () => {
  emit("update:visible", true);
  modalContent.value = true;
};
const close = () => {
  modalContent.value = false;
  modalContentClosing.value = true;
  setTimeout(() => {
    modalContentClosing.value = false;
    emit("update:visible", false);
  }, 310);
};
</script>

<style lang="scss">
.modal {
  .modal-overlay {
    z-index: 9000;
    @apply fixed top-0 left-0 w-screen h-screen;
    @apply bg-gradient-to-b from-[rgba(253,230,138,0.2)] to-[rgba(255,255,255,0.5)] backdrop-filter backdrop-blur-md;
    @apply transition-all;

    animation-name: bg_fade_kf;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;

    .modal-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.closing {
      animation-name: bg_to_fade_kf;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes bg_fade_kf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bg_to_fade_kf {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-y-enter-active,
.fade-y-leave-active {
  transition: all 0.3s ease;
}
.fade-y-enter-from {
  opacity: 0;
  transform: translateY(-80px);
}
.fade-y-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
