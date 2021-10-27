<template>
  <div class="add-hitem-cardrow flex flex-wrap sm:flex-nowrap">
    <div class="font-semibold select-none whitespace-nowrap w-full sm:w-auto">
      Add Item
    </div>
    <div class="flex-1 flex gap-2 w-full sm:w-px flex-wrap sm:flex-nowrap">
      <div class="w-full sm:w-4/12">
        <input
          type="text"
          :title="name"
          class="h-input"
          placeholder="Item name"
          v-model="name"
        />
      </div>
      <div class="w-full sm:w-8/12">
        <div
          class="
            h-7
            rounded
            flex
            items-center
            bg-white
            dark:bg-blueGray-800
            select-none
          "
          :title="path"
          v-if="type != 'link'"
        >
          <div
            class="
              px-3
              w-full
              overflow-ellipsis overflow-hidden
              whitespace-nowrap
              text-gray-800
              dark:text-blueGray-100
              text-opacity-75
              dark:text-opacity-75
            "
            :class="{
              'text-opacity-50 dark:text-opacity-50': !path,
            }"
          >
            {{ path || "Item path will show here once you select one..." }}
          </div>
        </div>
        <div v-else class="flex items-center h-full">
          <input
            class="h-input"
            placeholder="Type link here"
            :class="{
              'h-input--invalid': !linkValid,
            }"
            v-model="path"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="flex gap-2 w-full sm:w-auto justify-evenly">
      <div>
        <OpenFolderButton
          class="w-14 sm:w-auto flex justify-center sm:block"
          :selected="type === 'directory'"
          @click="selectFolder"
        />
      </div>
      <div>
        <OpenFileButton
          class="w-14 sm:w-auto flex justify-center sm:block"
          :selected="type === 'file'"
          @click="selectFile"
        />
      </div>
      <div>
        <LinkButton
          class="w-14 sm:w-auto flex justify-center sm:block"
          :selected="type === 'link'"
          @click="selectLink"
        />
      </div>
    </div>
    <div class="w-full sm:w-auto">
      <AcceptButton
        class="w-full sm:w-auto flex justify-center sm:block"
        title="Save item"
        @click="saveHitem"
        :disabled="!valid"
      />
    </div>
  </div>
</template>

<script setup>
import LinkButton from "@/components/buttons/LinkButton";
import OpenFolderButton from "@/components/buttons/OpenFolderButton";
import OpenFileButton from "@/components/buttons/OpenFileButton";
import AcceptButton from "@/components/buttons/AcceptButton";
import { ipcRenderer } from "electron";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

const path = ref(null);
const name = ref(null);

const type = ref(null);

const valid = computed(() => {
  return (
    path.value && name.value && (type.value === "link" ? linkValid.value : true)
  );
});

const linkValid = computed(() => {
  if (type.value != "link") {
    return null;
  }
  try {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    if (!pattern.test(path.value)) {
      return false;
    }
    new URL(path.value);
    return true;
  } catch (error) {
    return false;
  }
});

const store = useStore();

const saveHitem = () => {
  if (!valid.value) {
    return;
  }
  store.dispatch("addHitem", {
    name: name.value,
    path: path.value,
    type: type.value,
  });
  resetData();
};

const resetData = () => {
  name.value = null;
  path.value = null;
  type.value = null;
};

const selectLink = () => {
  resetData();
  type.value = "link";
};

const selectFolder = async () => {
  const folderPath = await ipcRenderer.invoke("select-folder");
  path.value = folderPath;
  type.value = "directory";
};
const selectFile = async () => {
  const filePath = await ipcRenderer.invoke("select-file");
  path.value = filePath;
  type.value = "file";
};
</script>

<style lang="scss">
.add-hitem-cardrow {
  @apply bg-yellow-200 dark:bg-indigo-900 dark:bg-opacity-70;
  @apply mb-4;
  @apply py-3;
  @apply px-3;
  @apply rounded;
  @apply flex;
  @apply gap-3 sm:gap-6;
  @apply items-center;
  @apply justify-evenly;
}
</style>
