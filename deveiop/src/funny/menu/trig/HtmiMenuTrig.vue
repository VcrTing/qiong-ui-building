<template>
    <button class="br htmi-menu-trig " @click="appPina().do_menu(1)">
        <i class="bi bi-list"></i>
    </button>
</template>

<script lang="ts" setup>
import { appPina } from '../../../himm/store'
</script>

<style lang="sass" scoped>
.htmi-menu-trig
    top: 55%
    left: 0
    width: 2.5em
    height: 3.4em
    position: fixed
    border-top-left-radius: 0px
    border-bottom-left-radius: 0px
    &:hover
        background: #FFF
</style>