<script setup>
import Cards from "@/components/Cards.vue";
import {computed, onMounted, ref} from "vue";
const cards = ref([12, 55, 23, 45, 66, 78, 99, 101, 2])
const sortedCard = computed(() => useStore.cards.sort((a, b) => a - b));
import pinia from "@/components/store/store.js";
import basicNodes, {secondaryNodes} from "@/components/store/basicStore.js";
import {playCard} from "@/components/interacting.js";
let useStore = basicNodes(pinia);
let secStore = secondaryNodes(pinia);
const audioPlayer = ref(null);
onMounted(() => {
  // const useStore = basicNodes(pinia);
  useStore.cards.sort((a, b) => a - b);
});
const deleteCard = async (card) => {
  audioPlayer.value.play();
  secStore.waiting = true
  // const index = cards.value.indexOf(card);
  // if (index !== -1) {
  //   useStore.cards.splice(index, 1);
  // }
  // console.log(sortedCard.value)
  await playCard(card, useStore.choice)
  secStore.waiting = false
};

</script>

<template>
  <div class="container">
    <Cards v-for="card in sortedCard" :number="card" @click="deleteCard(card)" class="card"></Cards>
  </div>
  <div style="display: none">
    <audio ref="audioPlayer" controls>
      <source src="../assets/v1.wav" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}
.card:hover {
  cursor: pointer;
}
</style>