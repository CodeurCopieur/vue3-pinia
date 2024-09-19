import { defineStore } from "pinia";


export const useCounterStore = defineStore('counterStore', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount : (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})



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