<script setup lang="ts">
import { usePlayerStore } from "../../stores/player";

const playerData = usePlayerStore();
</script>

<template>
    <header class="navbar-container">
        <div class="navbar">
            <p>pair vue</p>
            <p>score: {{ playerData.player.score }}</p>
            <button>Restart</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "./AppHeader.scss";
</style>
