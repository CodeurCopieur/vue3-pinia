<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from './stores/counter';
import { computed } from "vue";

// import HelloWorld from './components/HelloWorld.vue'
const counter = useCounterStore();
 // Utiliser storeToRefs pour conserver la réactivité lors de la déstructuration
const {count, doubleCount} = storeToRefs(counter);
const countCpt = computed(() => counter.count);
const doubleCountCpt = computed(() => counter.doubleCount);
const { increment } = counter

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <p>Counter : {{ countCpt }}</p>
  <p>Counter : {{ doubleCountCpt }}</p>
  <button @click="increment">Incrémentation</button>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
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
