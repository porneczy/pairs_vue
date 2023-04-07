<script setup lang="ts">
import AppHeader from "./components/AppHeader/AppHeader.vue";
import Card from "./components/Card/Card.vue";
</script>

<template>
    <AppHeader />
    <div class="game-board-container">
        <Card />
    </div>
</template>

<style lang="scss">
@import "./App.scss";
</style>
