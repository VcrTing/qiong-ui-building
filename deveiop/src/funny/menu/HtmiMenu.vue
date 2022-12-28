<template>
    <div class="menu-main">
        <div class="logo hand" @click="appPina().do_menu(0)">
            <fn-logo/>
        </div>
        <br/>
        <htmi-menu-inner :menu="menuRoie( userPina().roie_type )"/>
        <br/>
        <br/>
    </div>
</template>

<script lang="ts" setup>
import { appPina, userPina } from '../../himm/store'
import FnLogo from '../static/logo/FnLogo.vue'
import HtmiMenuInner from './hm_inner/HtmiMenuInner.vue'
import { menuRoie } from '../../air/menu'
</script>