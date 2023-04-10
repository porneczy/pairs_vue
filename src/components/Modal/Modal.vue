<script setup lang="ts">
import { useModalIsVisible } from "../../stores/player";
import { usePlayerStore, useCardListStore } from "../../stores/player";

const playerData = usePlayerStore();
const cardList = useCardListStore();
const modalIsVisible = useModalIsVisible();

const restartGame = () => {
    playerData.player.score = 0;
    cardList.Cards.map((card) => {
        card.isMatched = false;
        card.isVisible = false;
    });
    cardList.Cards.sort(() => Math.random() - 0.5);
    modalIsVisible.isVisible = false;
};
</script>

<template>
    <div v-if="modalIsVisible.isVisible" class="modal-overlay">
        <div class="modal-container">
            <div class="modal-header">
                <span
                    class="modal-close"
                    @click="modalIsVisible.isVisible = false"
                    >X</span
                >
            </div>
            <div class="modal-body">
                <h1>Congratulations you won</h1>
                <button @click="restartGame">Restart</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./Modal.scss";
</style>
