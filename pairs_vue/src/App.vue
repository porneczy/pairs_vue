<script setup lang="ts"></script>

<template>
    <h1>pairs vue</h1>
</template>

<style>
@font-face {
    font-family: "CeraRoundPro";
    src: url("./assets/fonts/CeraRoundProRegular.woff") format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "CeraRoundPro-Bold";
    src: url("./assets/fonts/CeraRoundProBold.woff") format("truetype");
    font-display: swap;
}
@font-face {
    font-family: "CeraRoundPro-Thin";
    src: url("./assets/fonts/CeraRoundProThinRegular.woff") format("truetype");
    font-display: swap;
}

:root {
    --primary-color: #e5e5e5;
    --secondary-color: #14213d;
    --tertiary-color: #fca311;
}

body {
    font-family: "CeraRoundPro";
    color: var(--secondary-color);
    background-color: var(--primary-color);
}
</style>
