<script setup>
import { storeToRefs } from "pinia";
  import { useCounterStore } from '../stores/counter2';

  const counter = useCounterStore();
  const {count, name, doubleCount, doubleCountPlusOne, doubleCountPlusOne2, getUserById} = storeToRefs(counter);

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

  <p>count : {{ count }}</p>
  <p>doubleCount : {{ doubleCount }}</p>
  <p>name : {{ name }}</p>
  <p>doubleCountPlusOne : {{ doubleCountPlusOne }}</p>
  <p>doubleCountPlusOne2 : {{ doubleCountPlusOne2(2) }}</p>
  <p>User avec l'id 2 : {{ getUserById(2).name }}</p>
  <button @click="add()">Incrémentation</button>
  <button @click="counter.$reset()">Reset</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
