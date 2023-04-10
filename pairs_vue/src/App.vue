<script setup lang="ts">
import AppHeader from "./components/AppHeader/AppHeader.vue";
import Card from "./components/Card/Card.vue";
import { useCardListStore } from "./stores/player";

interface Card {
    icon: string | undefined;
    isVisible: boolean;
    isMatched: boolean;
    id: number;
}

const cardList = useCardListStore();

function shuffleCards(cards: Card[]): Card[] {
    return cards.sort(() => Math.random() - 0.5);
}

const shuffledCardList = shuffleCards(cardList.Cards);
</script>

<template>
    <AppHeader />
    <div class="game-board-container">
        <Card
            v-for="(card, index) in shuffledCardList"
            :key="index"
            :icon="card.icon"
            :id="card.id"
        />
    </div>
</template>

<style lang="scss">
@import "./App.scss";
</style>
