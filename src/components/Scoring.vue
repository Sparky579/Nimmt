<script setup>
import {NGrid, NGi} from "naive-ui";
import pinia from "@/components/store/store.js";
import basicNodes from "@/components/store/basicStore.js";
import {cows} from "./interacting.js";
let useStore = basicNodes(pinia);
</script>

<template>
<n-grid :cols="2">
  <n-gi>
    <div class="light-green" >
      <h2>Your Score : {{ useStore.self_penalty }}</h2>
      <div>
        1 Ox: {{useStore.self_penalty_card.filter(x => cows(x) == 1).join(', ')}} <br>
        2 Ox: {{useStore.self_penalty_card.filter(x => cows(x) == 2).join(', ')}} <br>
        3 Ox: {{useStore.self_penalty_card.filter(x => cows(x) == 3).join(', ')}} <br>
        5 Ox: {{useStore.self_penalty_card.filter(x => cows(x) == 5).join(', ')}} <br>
        7 Ox: {{useStore.self_penalty_card.filter(x => cows(x) == 7).join(', ')}} <br>
      </div>
    </div>
  </n-gi>
  <n-gi>
    <div class="green" >
      <h2>Opponent Score : {{useStore.oppo_penalty}}</h2>
      <div>
        1 Ox: {{useStore.oppo_penalty_card.filter(x => cows(x) == 1).join(', ')}} <br>
        2 Ox: {{useStore.oppo_penalty_card.filter(x => cows(x) == 2).join(', ')}} <br>
        3 Ox: {{useStore.oppo_penalty_card.filter(x => cows(x) == 3).join(', ')}} <br>
        5 Ox: {{useStore.oppo_penalty_card.filter(x => cows(x) == 5).join(', ')}} <br>
        7 Ox: {{useStore.oppo_penalty_card.filter(x => cows(x) == 7).join(', ')}} <br>
      </div>
    </div>
  </n-gi>
</n-grid>
</template>

<style scoped>
.light-green {
  height: 100%;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: darkblue;
}
.green {
  height: 100%;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: darkred;
}
</style>