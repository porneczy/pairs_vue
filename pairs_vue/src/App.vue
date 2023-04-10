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
</script>

<template>
    <AppHeader />
    <div class="game-board-container">
        <Card
            v-for="(card, index) in cardList.Cards"
            :key="index"
            :icon="card.icon"
            :id="card.id"
        />
    </div>
</template>

<style lang="scss">
@import "./App.scss";
</style>
