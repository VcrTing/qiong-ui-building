<template>
    <div class="fx-r" v-if="!mode">
        <button @click="$emit('back')" class="btn-pri-out btn-def mr">返回</button>
        <button @click="$emit('edit')" class="btn-pri btn-def-ig">編輯</button>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'edit', 'back' ])
defineProps<{
    mode?: number
}>()
</script>