import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from './UserStore';

export const useCounterStore = defineStore('counterStore', () => {

  const count = ref(0);
  const name = ref('Codwerk')
  const userStore = useUserStore()

  const doubleCount = computed(() => count.value * 2);
  const doubleCountPlusOne = computed(()=> doubleCount.value + 1)
  const doubleCountPlusOne2 = computed(()=> {
    return (value) => {
      return value + doubleCount.value
    }
  })

  const getUserById = computed(()=> {
    return id => userStore.users.find( user => user.id === id)
  })

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
    doubleCountPlusOne,
    doubleCountPlusOne2,
    increment,
    $reset,
    getUserById
  }

})