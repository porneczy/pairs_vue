<script setup lang="ts">
import icon from "../../helpers/svgHelper.vue";
import { useCardListStore, usePlayerStore } from "../../stores/player";

const props = defineProps({
    isVisible: {
        type: Boolean,
    },
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
    const card = cardList.Cards[id];
    console.log(cardList.Cards);

    if (selectedCards.length === 0) {
        selectedCards.push({ id, icon });
        card.isVisible = !card.isVisible;
    } else if (selectedCards.length === 1) {
        selectedCards.push({ id, icon });
        card.isVisible = !card.isVisible;

        // Ellenőrizni azonosságot
        if (selectedCards[0].icon === selectedCards[1].icon) {
            console.log("A két kártya azonos.");

            // Ellenőrzi, hogy ha már játkon kivul van a kártya akkor hiába nyomkodjuk nem ad további pontot
            if (!cardList.Cards[selectedCards[0].id].isMatched) {
                //hozzáad 1 pontot
                player.score++;
            }

            cardList.Cards[selectedCards[0].id].isMatched = true;
            cardList.Cards[selectedCards[1].id].isMatched = true;
            playerData.player.selectedCards = [];

            // Ellenőrizi, hogy az összes kártya felfordítva van-e
            if (cardList.Cards.every((card) => card.isMatched)) {
                console.log("Nyertél!");
                //todo: ide jöhet a nyertes játéklogika
            }
        } else {
            console.log("A két kártya nem azonos.");
            setTimeout(() => {
                console.log("visszafordit");
                playerData.player.selectedCards = [];
                cardList.Cards[selectedCards[0].id].isVisible = false;
                cardList.Cards[selectedCards[1].id].isVisible = false;
            }, 1200);
            //hozzáad 1 pontot
            player.score++;
        }
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
