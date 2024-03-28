<script setup>
import {NButton, NSpace} from "naive-ui";
import pinia from "@/components/store/store.js";
import basicNodes, {secondaryNodes} from "@/components/store/basicStore.js";
import {onMounted, ref} from "vue";
import {getScore} from "@/components/interacting";
const useStore = basicNodes(pinia);
const secStore = secondaryNodes(pinia)
const audioPlayer = ref(null)
const showAudio = ref(false)
let play = false;
onMounted(() => {
  audioPlayer.value.play();
  getScore();
})
const start = () => {
  if (!play)
    audioPlayer.value.play();
  play = true;
  secStore.starting = true;
}
const help = () => {
  secStore.helping = true;
}
</script>

<template>
  <n-space :justify="'space-evenly'" :align="'baseline'">
  <n-button type="error" size="large" @click="start">
    START!
  </n-button>
    <div style="font-size: 18px; color: darkred">
      ROUND: {{useStore.round}}
    </div>
  <n-button type="info" size="large" @click="help">
    help
  </n-button>
  </n-space>
  <div class="floating-element">

    <div style="display: flex;">
      <div style="" v-show="showAudio">
        <audio ref="audioPlayer" controls loop autoplay>
          <source src="../assets/background.ogg" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    <!-- 悬浮元素内容 -->
    🏆: {{useStore.rating}}
    <button class="setting-button" @click="() => showAudio = !showAudio">
      <svg style="margin-left: 1px" xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="tabler-icon tabler-icon-settings">
        <path
            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      </svg>
    </button>
    </div>

  </div>

</template>

<style scoped>
.floating-element {
  color: darkgoldenrod;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 27px;
  top: 0;
  right: 30px;
  /* 其他样式设置 */
}
.setting-button {
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  height: 48px;
}
</style>