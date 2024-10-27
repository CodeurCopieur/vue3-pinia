<script setup>
import { storeToRefs, mapState, mapActions } from "pinia";
import { useCounterStore } from './stores/counter';
import { computed } from "vue";

// import HelloWorld from './components/HelloWorld.vue'
// const counter = useCounterStore();
 // Utiliser storeToRefs pour conserver la réactivité lors de la déstructuration
// const {count, doubleCount} = storeToRefs(counter);
// const countCpt = computed(() => counter.count);
// const doubleCountCpt = computed(() => counter.doubleCount);
// const { increment } = counter;

const { count, doubleCount } = mapState(useCounterStore, ['count', 'doubleCount']);
const { increment } = mapActions(useCounterStore, ['increment']);

</script>

<template>

  <!-- <p>countCpt => computed : {{ countCpt }}</p>
  <p>DoubleCountCpt => computed : {{ doubleCountCpt }}</p> -->
  <hr>
  <p>Count : {{ count }}</p>
  <button @click="increment">Incrémentation</button>
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
