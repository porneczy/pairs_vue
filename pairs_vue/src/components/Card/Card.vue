<script setup>
import icon from "../../helpers/svgHelper.vue";
import { ref } from "vue";

const isVisible = ref(false);

const selectCard = () => {
    isVisible.value = !isVisible.value;
};
</script>
<template>
    <div class="card" @click="selectCard()">
        <div v-if="!isVisible" class="front-side">
            <h1>?</h1>
        </div>
        <div v-else class="back-side">
            <icon name="card0" />
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "./Card.scss";
</style>
