<script setup>
import {ref} from "vue";
import {NCard, NTag, NButton, NSpace, NInput, NIcon, NRadio} from "naive-ui";
import {secondaryNodes} from "@/components/store/basicStore.js";
import pinia from "@/components/store/store.js";
import {startGame} from "@/components/interacting.js";
const secStore = secondaryNodes(pinia);
const checkedValue = ref(-1)
</script>

<template>
  <div v-if="secStore.waiting" class="overlay">
<!--    <div class="modal" style="width: 50%">-->
    <div style="display: flex; flex-direction: column">


      <div class="loader"></div>
    <h2>
      Waiting opponents...
    </h2>
    </div>
<!--    </div>-->
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

.loader {
  border: 16px solid #f3f3f3; /* 边框颜色 */
  border-top: 16px solid #3498db; /* 上部分边框颜色 */
  border-radius: 50%; /* 设置为圆形 */
  width: 120px; /* 元素宽度 */
  height: 120px; /* 元素高度 */
  animation: spin 2s linear infinite; /* 动画效果 */
  margin: auto; /* 居中显示 */
}

@keyframes spin {
  0% { transform: rotate(0deg); } /* 初始状态 */
  100% { transform: rotate(360deg); } /* 结束状态 */
}
</style>