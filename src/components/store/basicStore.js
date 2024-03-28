import { defineStore } from "pinia";
import {reactive, ref, toRefs} from "vue";
const basicNodes = defineStore('basicNodes', () => {
    const round = ref(0);
    const cards = ref([]);
    const decks = ref([]);
    const self_penalty = ref(0)
    const oppo_penalty = ref(0)
    const self_penalty_card = ref([])
    const oppo_penalty_card = ref([])
    const choice = ref(0)
    const rating = ref(0)
    const ratingChange = ref(-4)
    return { round, cards, decks, self_penalty, self_penalty_card, oppo_penalty, oppo_penalty_card, choice, rating, ratingChange }
})
const secondaryNodes =  defineStore('secondaryNodes', () => {
    const starting = ref(false);
    const helping = ref(false);
    const waiting = ref(false);
    const ending = ref(false);
    return { starting, helping, waiting, ending }
})
export default basicNodes
export { secondaryNodes }