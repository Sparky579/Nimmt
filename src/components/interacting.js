import axios from "axios";
import pinia from "@/components/store/store.js";
import basicNodes, {secondaryNodes} from "@/components/store/basicStore.js";
let useStore = basicNodes(pinia);
let secStore = secondaryNodes(pinia);

export async function getScore() {
    try {
        const url = import.meta.env.VITE_APP_BACK_URL + '/score';
        const response = await axios.get(url);
        const res = response.data;
        useStore.rating = res.score;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to get score.');
    }

}
export async function startGame(difficulty){
    try {
        const url = import.meta.env.VITE_APP_BACK_URL + '/dif';
        console.log(difficulty)
        const response = await axios.post(url, {
            difficulty: Number(difficulty)
        })
        const url2 = import.meta.env.VITE_APP_BACK_URL + '/start';
        const response2 = await axios.get(url2);
        const res = response2.data
        const cards = res.card;
        useStore.cards = cards
        useStore.decks = res.decks
        useStore.round = 1;
        useStore.self_penalty_card = [];
        useStore.oppo_penalty_card = [];
        useStore.self_penalty = 0;
        useStore.oppo_penalty = 0
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to start game.');
    }
}


export function cows (number) {
    let value = 1;
    if (number === 0) {
        return 0;
    }
    if (number % 5 === 0) {
        value += 1;
    }
    if (number % 10 === 0) {
        value += 1
    }
    if (number % 11 === 0) {
        value += 4
    }
    if (number % 55 === 0) value += 1
    // console.log(value)
    return value
}
export async function playCard(card, position) {
    try {
        const url = import.meta.env.VITE_APP_BACK_URL + '/draw';
        const response = await axios.post(url, {
            card: card,
            position: position
        })
        const res = response.data
        console.log(res);
        useStore.cards = res.cards
        useStore.decks = res.decks
        useStore.round = res.round;
        useStore.self_penalty = res.penalty1;
        useStore.oppo_penalty = res.penalty2;
        useStore.self_penalty_card = res.self_penalty;
        useStore.oppo_penalty_card = res.oppo_penalty;
        if (res.round === 4) {
            useStore.round = 0;
            useStore.rating = res.score;
            useStore.ratingChange = res.upd;
            secStore.ending = true;
        }
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to play card.');
    }
}