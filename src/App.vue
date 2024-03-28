<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Cards from "@/components/Cards.vue";
import Header from "@/components/Header.vue";
import Decks from "@/components/Decks.vue";
import SelfCard from "@/components/SelfCard.vue";
import Scoring from "@/components/Scoring.vue";
import DifficultyModal from "@/components/DifficultyModal.vue";
import DeckChoice from "@/components/DeckChoice.vue";
import HelpModal from "@/components/HelpModal.vue";
import WaitingModal from "@/components/WaitingModal.vue";
import EndModal from "@/components/EndModal.vue";
</script>

<template>
  <div class="head">
    <Header></Header>
  </div>
  <Decks class="canvas">
  </Decks>
  <DeckChoice class="canvas2"></DeckChoice>
  <div class="score">
    <Scoring></Scoring>
  </div>
  <div class="bottom">
    <SelfCard></SelfCard>
  </div>
  <div>
    <DifficultyModal></DifficultyModal>
    <HelpModal></HelpModal>
    <WaitingModal></WaitingModal>
    <EndModal></EndModal>
  </div>
</template>

<style scoped>
.bottom {
  position: fixed;
  bottom: 15vh;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 10vh;
}
.score {
  position: fixed;
  bottom: 30vh;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 20vh;
}
.canvas {
  margin-top: 40px;
  width: 80vw;
  justify-content: space-evenly;
  display: flex;
}
.canvas2 {
  margin-top: 20px;
  width: 80vw;
  justify-content: space-evenly;
  display: flex;
}
.head {
  position: fixed;
  top: 10px;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 10vh;
}
.bottom * {
  margin: 0 1%;
}
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
