<template>
    <div class="fx-r" v-if="!mode">
        <button @click="$emit('back')" class="btn-pri-out btn-def mr">返回</button>
        <button @click="$emit('submit')" class="btn-pri btn-def-ig">儲存</button>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'submit', 'back' ])
defineProps<{
    mode?: number
}>()
</script>