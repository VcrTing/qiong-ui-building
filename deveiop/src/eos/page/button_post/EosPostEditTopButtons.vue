<template>
    <div class="fx-r fx-1" v-if="!mode">
        <eos-card-temp class="w-20 ip-mh br" :temp="1"/>
        <div class="px_s"></div>
        <button @click="$emit('send')" class="btn-pri-out btn-def mr">
            發送通知模版及記錄
        </button>
        <button @click="$emit('view')" class="btn-pri-out btn-def-ig mr">預覽</button>
        <button @click="$emit('back')" class="btn-pri-out btn-def">返回</button>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'send', 'view', 'back' ])
defineProps<{
    mode?: number
}>()
</script>