<script setup>

import Cards from "@/components/Cards.vue";
import WhiteCard from "@/components/WhiteCard.vue";
import pinia from "@/components/store/store.js";
import basicNodes from "@/components/store/basicStore.js";
let useStore = basicNodes(pinia);
const changeChoice = (index) => {
  useStore.choice = index;
};
</script>

<template>
  <div>
    <div v-for="(deck, index) in useStore.decks">
      <div class="circle" :class="{ 'blue': useStore.choice == index }" @click="changeChoice(index)"></div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}

.blue {
  background-color: blue;
}
</style>