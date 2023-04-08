<script setup lang="ts">
import AppHeader from "./components/AppHeader/AppHeader.vue";
import Card from "./components/Card/Card.vue";

interface Card {
    icon: string;
    isVisible: boolean;
    id: Number;
}

const NUMBER_OF_CARDS = 8;

const cardList = Array.from({ length: NUMBER_OF_CARDS }, (_, i) => ({
    icon: `card${i % (NUMBER_OF_CARDS / 2)}`,
    isVisible: true,
    id: i % (NUMBER_OF_CARDS / 2),
}));

function shuffleCards(cards: Card[]): Card[] {
    return cards.sort(() => Math.random() - 0.5);
}

const shuffledCardList = shuffleCards(cardList);
</script>

<template>
    <AppHeader />
    <div class="game-board-container">
        <Card
            v-for="(card, index) in shuffledCardList"
            :isVisible="card.isVisible"
            :icon="card.icon"
            :key="index"
        />
    </div>
</template>

<style lang="scss">
@import "./App.scss";
</style>
