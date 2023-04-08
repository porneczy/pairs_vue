<script setup lang="ts">
import { ref } from "vue";
import icon from "../../helpers/svgHelper.vue";
import { usePlayerStore } from "../../stores/player";

const props = defineProps({
    isVisible: {
        type: Boolean,
    },
    icon: {
        type: String,
    },
});

const isVisible = ref(props.isVisible);

const flipCard = () => {
    isVisible.value = !isVisible.value;
};

const playerData = usePlayerStore();
const scorePlus1 = () => {
    playerData.player.score++;
};
</script>
<template>
    <div class="card" @click="flipCard">
        <div v-if="!isVisible" class="front-side" @click="scorePlus1">
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
