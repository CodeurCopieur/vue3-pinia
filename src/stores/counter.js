import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useCounterStore = defineStore('counterStore', () => {

  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return {
    count,
    doubleCount,
    increment
  }

})



//export const useCounterStore = defineStore('counterStore', {
  // state: () => {
  //   return {
  //     count: 0
  //   }
  // },
  // getters: {
  //   doubleCount : (state) => state.count * 2
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   }
  // }
  // })

// export const useCounterStore = defineStore('counter', {
//   state: ()=> ({
//     count: 0
//   }),
//   getters: {

//   },
//   actions: {
//     increment() {
//       this.count++;
//     }
//   }
// })