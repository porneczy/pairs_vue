<script setup lang="ts">
import icon from "../../helpers/svgHelper.vue";
import { useCardListStore, usePlayerStore } from "../../stores/player";

const props = defineProps({
    icon: {
        type: String,
    },
    id: {
        type: Number,
        required: true,
    },
});

const cardList = useCardListStore();
const playerData = usePlayerStore();

const flipCard = () => {
    const { player } = playerData;
    const { id, icon } = props;
    const { selectedCards, score } = player;
    const actualCard = cardList.Cards[id];

    function setScorePlusOne() {
        if (
            !cardList.Cards[selectedCards[0].id].isMatched &&
            !cardList.Cards[selectedCards[1].id].isMatched
        ) {
            player.score++;
        }
    }

    function checkAllCardsMatched() {
        if (cardList.Cards.every((card) => card.isMatched)) {
            console.log("Nyertél!");
            //todo: ide jöhet a nyertes játéklogika
        }
    }

    function checkMatches() {
        if (selectedCards[0].icon === selectedCards[1].icon) {
            handleMatchedCards();
        } else {
            handleMisMatchedCards();
        }
    }

    function handleMatchedCards() {
        setScorePlusOne();

        cardList.Cards[selectedCards[0].id].isMatched = true;
        cardList.Cards[selectedCards[1].id].isMatched = true;
        playerData.player.selectedCards = [];

        checkAllCardsMatched();
    }

    function handleMisMatchedCards() {
        setTimeout(() => {
            cardList.Cards[selectedCards[0].id].isVisible = false;
            cardList.Cards[selectedCards[1].id].isVisible = false;
            playerData.player.selectedCards = [];
        }, 1200);
        setScorePlusOne();
    }

    function addSelectedCard(id: number, icon: string | undefined) {
        selectedCards.push({ id, icon });
        actualCard.isVisible = !actualCard.isVisible;
    }

    if (selectedCards.length === 0) {
        addSelectedCard(id, icon);
    } else if (selectedCards.length === 1) {
        if (selectedCards[0].id === id) {
            actualCard.isVisible = false;
            playerData.player.selectedCards = [];
            return;
        }
        addSelectedCard(id, icon);
        checkMatches();
    } else {
        return;
    }
};
</script>
<template>
    <div class="card" @click="flipCard">
        <div
            v-if="
                !cardList.Cards[props.id].isMatched &&
                !cardList.Cards[props.id].isVisible
            "
            class="front-side"
        >
            <h1>?</h1>
        </div>
        <div v-else class="back-side">
            <icon :name="props.icon" />
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "./Card.scss";
</style>
