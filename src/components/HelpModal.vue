<script setup>
import {ref} from "vue";
import {NCard, NTag, NButton, NSpace, NInput, NIcon, NRadio} from "naive-ui";
import {secondaryNodes} from "@/components/store/basicStore.js";
import pinia from "@/components/store/store.js";
import {startGame} from "@/components/interacting.js";
const secStore = secondaryNodes(pinia);
const checkedValue = ref(-1)
const ok = async (e) => {
  secStore.helping = false;
}
</script>

<template>
  <div v-if="secStore.helping" class="overlay">
    <div class="modal" style="width: 50%">
      <h2 style="margin-top: -10px;">游戏帮助</h2>
        <NSpace align="center" justify="center">
          <pre style="white-space: pre-wrap; font-family: Corbel; color: black">
            《谁是牛头王》游戏说明：

            游戏目标：
            在三轮游戏中，通过出牌和策略，使自己的牛头数尽可能少，以便获得最高的得分。

            游戏准备：

            场上共有四组卡的游戏卡牌。
            玩家和对手每轮被发放10张卡牌。编号为1到104。
            游戏规则：

            游戏分为三轮进行，每轮中包含多个回合。
            每个回合，玩家和对手同时出一张卡牌，并按照规则进行结算。
            结算规则是先结算较小的一张，后结算较大的一张
            将出的卡牌放在场上比它小又最接近的卡上面。
            如果放置后，场上的卡牌数量达到5张，则玩家必须将前4张卡牌拿走作为惩罚。
            如果出的牌比场上所有的卡牌都小，则玩家将受到蓝色圆圈指示的卡组的全部卡牌作为惩罚，
            并将自己出的卡牌替换掉这些卡牌。
            玩家可以自由选择蓝色圆圈的位置。
            每张卡牌上标有一个井号，表示牛头数。游戏结束后，牛头数少的玩家获得胜利。
            游戏结束和胜利条件：

            游戏结束后，计算每位玩家拥有的牛头数。
            牛头数越少的玩家获得更高的得分，牛头数相同则平局。
            游戏的目标是在三轮游戏中累积尽可能少的牛头数。
            希望这份游戏说明能够帮助您理解《谁是牛头王》游戏的规则。祝您游戏愉快！
          </pre>
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