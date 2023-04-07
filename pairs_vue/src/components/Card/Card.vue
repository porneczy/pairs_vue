<script setup lang="ts">
import { ref } from "vue";
import icon from "../../helpers/svgHelper.vue";

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
</script>
<template>
    <div class="card" @click="flipCard">
        <div v-if="!isVisible" class="front-side">
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
