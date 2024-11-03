<script setup>
import { storeToRefs } from "pinia";
  import { useCounterStore } from '../stores/counter2';

  const counter = useCounterStore();
  const {count, name, doubleCount} = storeToRefs(counter);

  const { increment, $reset } = counter;

  counter.$subscribe((mutation, state) => {
    console.log(mutation, state);
    
  })

  const add = ()=> {
    counter.$patch({
      count: counter.count+1,
      name: Math.random() + ' Codwerk'
    })
  };
</script>

<template>

  <p>Count : {{ count }}</p>
  <p>doubleCount : {{ doubleCount }}</p>
  <p>name : {{ name }}</p>
  <button @click="add()">Incrémentation</button>
  <button @click="counter.$reset()">Reset</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
