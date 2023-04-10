import { defineStore } from "pinia";

const NUMBER_OF_CARDS = 8;
let idCounter = 0;
const cardList = Array.from({ length: NUMBER_OF_CARDS }, (_, i) => ({
    icon: `card${i % (NUMBER_OF_CARDS / 2)}`,
    isVisible: false,
    isMatched: false,
    id: idCounter++,
}));

export const usePlayerStore = defineStore("player", {
    state: () => ({ player: {
        score: 0,
        selectedCards: []
    } }),
});
export const useCardListStore = defineStore("CardList", {
    state: () => ({ Cards: cardList }),
});
