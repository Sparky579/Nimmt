<script setup>
import {ref} from "vue";
import {NCard, NTag, NButton, NSpace, NInput, NIcon, NRadio} from "naive-ui";
import basicNodes, {secondaryNodes} from "@/components/store/basicStore.js";
import pinia from "@/components/store/store.js";
import {startGame} from "@/components/interacting.js";
const secStore = secondaryNodes(pinia);
const useStore = basicNodes(pinia);
const checkedValue = ref(-1)
const ok = async (e) => {
  secStore.ending = false;
}
</script>

<template>
  <div v-if="secStore.ending" class="overlay">
    <div class="modal" style="width: 20%">
      <div style="margin-top: -10px; font-size: 32px">游戏结束</div>
      <NSpace align="center" justify="center" style="font-size: 24px">
          <div style="white-space: pre-wrap; font-family: Corbel; color: black">
            最终比分是：{{ useStore.self_penalty }} ：{{ useStore.oppo_penalty }} <br>
            <div v-if="useStore.ratingChange.valueOf() > 0">
              你增加了 {{ useStore.ratingChange }} 🏆
            </div>
            <div v-else>
              你减少了 {{ -useStore.ratingChange }} 🏆
            </div>
          </div>
      </NSpace>

      <div style="display: flex; justify-content: center; width: 100%; margin-top: 10px;">
        <NButton @click="ok">OK</NButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 透明度为 0.5 的黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}


.modal {
  z-index: 9;
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>