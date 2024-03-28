<script setup>
import {ref} from "vue";
import {NCard, NTag, NButton, NSpace, NInput, NIcon, NRadio} from "naive-ui";
import {secondaryNodes} from "@/components/store/basicStore.js";
import pinia from "@/components/store/store.js";
import {startGame} from "@/components/interacting.js";
const secStore = secondaryNodes(pinia);
const checkedValue = ref(-1)
const handleChange = async (e) => {
  secStore.starting = false;
  await startGame(e.target.value)
}
const cancel = async () => {
  secStore.starting = false;
}
</script>

<template>
  <div v-if="secStore.starting" class="overlay">
    <div class="modal">
      <button class="close-button" @click="closeModal">
        <n-icon :component="CloseCircleOutline" size="24"/>

      </button>
      <h2 style="margin-top: -10px;">Choose difficulty</h2>
      <NCard style="margin-top: 10px; width: 28vw;">
        <NSpace>
          <n-radio
              :checked="checkedValue == 0"
              value=0
              name="basic-demo"
              @change="handleChange"
          >
            Newbie(1000🏆️)
            <span class="icons collectibles" id="collectibles_036" style="margin: 1px;transform:scale(1);image-rendering: pixelated;"></span>
          </n-radio>
          <n-radio
              :checked="checkedValue == 1"
              value=1
              name="basic-demo"
              @change="handleChange"
          >
            Easy(1500🏆️)
            <span class="icons collectibles" id="collectibles_1" style="margin: 1px;transform:scale(1);image-rendering: pixelated;"></span>

          </n-radio>
          <n-radio
              :checked="checkedValue == 2"
              value=2
              name="basic-demo"
              @change="handleChange"
          >
            Normal(2000🏆️)
            <span class="icons collectibles" id="collectibles_2" style="margin: 1px;transform:scale(1);image-rendering: pixelated;"></span>

          </n-radio>
          <n-radio
              :checked="checkedValue == 3"
              value=3
              name="basic-demo"
              @change="handleChange"
          >
            Hard(2500🏆️)<span class="icons collectibles" id="collectibles_3" style="margin: 1px;transform:scale(1);image-rendering: pixelated;"></span>

          </n-radio>
          <n-radio
              :checked="checkedValue == 4"
              value=4
              name="basic-demo"
              @change="handleChange"
          >
            Expert(3000🏆️)<span class="icons collectibles" id="collectibles_4" style="margin: 1px;transform:scale(1);image-rendering: pixelated;"></span>

          </n-radio>
          <n-radio
              :checked="checkedValue == 5"
              value=5
              name="basic-demo"
              @change="handleChange"
          >
            Insane(3500🏆️)<span class="icons collectibles" id="collectibles_5" style="margin: 1px;transform:scale(1);image-rendering: pixelated;"></span>

          </n-radio>
        </NSpace>
      </NCard>
      <div style="display: flex; justify-content: center; margin-top: 10px;">
        <NButton @click="cancel">
          Cancel
        </NButton>
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

.close-button {
  position: absolute;
  top: 15px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
#collectibles_036 {
  background-position: -256px -768px;
}
#collectibles_3 {
  background-position: -128px -416px;
}
#collectibles_1 {
  background-position: -256px -0px;
}
#collectibles_2 {
  background-position: -160px -96px;
}
#collectibles_4 {
  background-position: -384px -416px;
}
#collectibles_5 {
  background-position: -288px -1056px;
}
.collectibles {
  background-image: url("../assets/Collectibles_sprite.png");
  width: 30px;
  height: 30px;
  display: flex;
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