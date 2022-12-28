<template>
    <img v-if="!is_div" :src="is_api ? BASE + src : src"/>
    <div class="__ui_img" v-else :style="{
        'background': 'url(' + is_api ? BASE + src : src + ')',
        'background-size': 'cover',
        'background-position': 'center'
    }">
    
    </div>
</template>

<script lang="ts" setup>
import {BASE} from '../../../conf'
defineProps<{
    src: string,
    is_api: { type: boolean, default: true },
    is_div: { type: boolean, default: false }
}>()
</script>

<style lang="sass" scoped>
.__ui_img
    width: 100%
    height: 100%
</style>