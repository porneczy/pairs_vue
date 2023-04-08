import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
    state: () => ({ player: {
        score: 0
    } }),
});
