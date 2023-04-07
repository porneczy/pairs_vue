<script setup lang="ts">
import AppHeader from "./components/AppHeader/AppHeader.vue";
import Card from "./components/Card/Card.vue";

interface Card {
    icon: string;
    isVisible: boolean;
}

const cardList: Card[] = [];

for (let i = 0; i <= 18; i++) {
    cardList.push({
        icon: `card${i}`,
        isVisible: false,
    });
}
</script>

<template>
    <AppHeader />
    <div class="game-board-container">
        <Card
            v-for="(card, index) in cardList"
            :isVisible="card.isVisible"
            :icon="card.icon"
            :key="index"
        />
    </div>
</template>

<style lang="scss">
@import "./App.scss";
</style>
