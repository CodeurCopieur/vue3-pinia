<script setup>

import HelloWorld from './components/HelloWorld.vue'

// import { storeToRefs, mapState, mapActions } from "pinia";
// import { useCounterStore } from './stores/counter';

// import { computed, onMounted } from "vue";



// // useCounterStore le second
// const counter = useCounterStore();
//  // Utiliser storeToRefs pour conserver la réactivité lors de la déstructuration
// const {count, count2, doubleCount} = storeToRefs(counter);
// const countCpt = computed(() => counter.count);
// const doubleCountCpt = computed(() => counter.doubleCount);
// // const { increment } = counter;

// const { increment } = mapActions(useCounterStore, ['increment', '$reset', '$patch']);

// onMounted(()=> {
//   console.log('mounted')
//   this.$subscribe((mutation, state) => {
//     console.log(mutation);
//     console.log(state);
    
//   })
// }) 

</script>

<template>

  <!-- <p>countCpt => computed : {{ countCpt }}</p>
  <p>DoubleCountCpt => computed : {{ doubleCountCpt }}</p>
  <hr>
  <p>Count : {{ count }}</p>
  <p>Count2 : {{ count2 }}</p>
  <p>doubleCount : {{ doubleCount }}</p>
  <button @click="increment">Incrémentation</button>
  <button @click="$reset()">Reset</button>
 -->

  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
