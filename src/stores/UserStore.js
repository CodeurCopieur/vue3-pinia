import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('userStore', () => {
  const users = ref([{id: 1, name: 'codwerk'}, {id: 2, name: 'codwerk2'}])

  return { users }
})