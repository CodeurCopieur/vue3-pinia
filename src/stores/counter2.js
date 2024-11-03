import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore('counterStore', () => {

  const count = ref(0);
  const name = ref('Codwerk')
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function $reset() {
    count.value = 0
    name.value = 'Codwerk'
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    $reset
  }

})