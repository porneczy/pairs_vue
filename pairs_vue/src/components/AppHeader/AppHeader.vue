<script setup lang="ts">
import { usePlayerStore, useCardListStore } from "../../stores/player";

const playerData = usePlayerStore();
const cardList = useCardListStore();

const restartGame = () => {
    playerData.player.score = 0;
    cardList.Cards.map((card) => {
        card.isMatched = false;
        card.isVisible = false;
    });
    cardList.Cards.sort(() => Math.random() - 0.5);
};
</script>

<template>
    <header class="navbar-container">
        <div class="navbar">
            <p>pair vue</p>
            <p>score: {{ playerData.player.score }}</p>
            <button @click="restartGame">Restart</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "./AppHeader.scss";
</style>
