import ipcMethod from "@/types/icpMethod";
import { ipcRenderer } from "electron";
import { createStore } from "vuex";

export default createStore({
  state: {
    hitems: null,
  },
  mutations: {
    set_hitems(state, payload) {
      state.hitems = payload;
    },
  },
  actions: {
    async fetchHitems(store) {
      const hitems = await ipcRenderer.invoke("get-hitems" as ipcMethod);
      store.commit("set_hitems", hitems);
    },
  },
  modules: {},
});
