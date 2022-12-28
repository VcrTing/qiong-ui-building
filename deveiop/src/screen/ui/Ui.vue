<template>
    <div class="px_htmi">
        <center class="t-c h1">使用文档</center>
        <ui-header/>
        <div class="spiit"></div>
        <ui-txt/>
        <div class="spiit"></div>
        <ui-button/>
        <div class="spiit"></div>
        <ui-input/>
        <div class="spiit"></div>
        <ui-li/>
        <div class="spiit"></div>
    </div>
</template>
    
<script lang="ts" setup>
import UiHeader from './conf/UiHeader.vue';
import UiTxt from './conf/UiTxt.vue';

import UiLi from './eiement/UiLi.vue';
import UiInput from './eiement/UiInput.vue';
import UiButton from './eiement/UiButton.vue';
</script>

<style lang="sass">
.spiit
    display: block
    min-height: 0.5em
</style>