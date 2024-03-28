<script setup>

import Cards from "@/components/Cards.vue";
import {ref} from "vue";
import WelcomeItem from "@/components/WelcomeItem.vue";
import WhiteCard from "@/components/WhiteCard.vue";
import pinia from "@/components/store/store.js";
import basicNodes from "@/components/store/basicStore.js";
import {cows} from "@/components/interacting.js";
let useStore = basicNodes(pinia);
const decks = ref([
    [12], [23, 34], [55], [77]
])
</script>

<template>
  <div>
    <div v-for="(deck, index) in useStore.decks">
      <div style="margin-top: 170px"></div>
      <div v-for="(card, index) in deck">
        <WhiteCard v-if="index !== deck.length - 1" style="margin-top: -180px"></WhiteCard>
      </div>
      <Cards :number="deck[deck.length - 1]" style="margin-top: -180px" :sum="deck.reduce((a, b) => a+cows(b), 0)"></Cards>
    </div>
  </div>
</template>

<style scoped>

</style>