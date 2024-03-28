<script setup>
import {ref} from "vue";
import {cows} from "@/components/interacting.js";
defineProps({
  number : {
    type: Number,
    required: true
  },
  sum : {
    type: Number,
    required: false
  }
})

const numColor = (number ) => {
  const value = cows(number)
  if (value === 1) return 'background-color: #10f9f8;'
  if (value === 2) return 'background-color: green;'
  if (value === 3) return 'background-color: darkgreen;'
  if (value === 5) return 'background-color: red;'
  if (value === 7) return 'background-color: purple;'
}
const fontColor = (number) => {
  const value = cows(number)
  if (value === 1) return 'color: black;'
  else return 'color: white;'
}
function concatenateStrings(...strings) {
  return strings.join('');
}
</script>

<template>
  <div class="card">
    <div class="number" :style="concatenateStrings(fontColor(number), numColor(number))">{{ number }}</div>
    <div style="color: darkred; font-weight: bolder; font-size: 24px">{{ `${"#".repeat(cows(number))}` }}</div>
    <div style="color: darkred; font-size: 16px" v-if="sum !== undefined">{{ `TOTAL: ${sum} #` }}</div>
  </div>
</template>


<style scoped>
.card {
  width: 120px;
  height: 200px;
  background-color: #f9f9a0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px solid darkblue;
}

.number {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: red;
  color: white;
  font-size: 36px;
  border-radius: 50%;
}
</style>