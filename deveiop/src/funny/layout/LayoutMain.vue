<template>
    <div class="htmi"
        :class="{ 'htmi-active': (app.menu && (app.menu == 1)), 'htmi-hide': !(app.menu && (app.menu == 1)) }">
        <div class="menu">
            <htmi-menu></htmi-menu>
        </div>
        <div class="menu-skin" @click="app.do_menu( 0 )"></div>
        <div class="content">
            <htmi-menu-trig/>

            <div class="top fx-s">
                <slot name="top"></slot>
            </div>
            <div class="center">
                <slot name="cont"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { appPina } from '../../himm/pina/app'
import HtmiMenu from '../menu/HtmiMenu.vue'
import HtmiMenuTrig from '../menu/trig/HtmiMenuTrig.vue'

const app = appPina()
</script>