<template>
    <div class="fx-r" v-if="!mode">
        <button @click="$emit('trash')" class="btn-err btn-def-ig mr">刪除</button>
        <button @click="$emit('save')" class="btn-pri btn-def-ig">儲存</button>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'trash', 'save' ])
defineProps<{
    mode?: number
}>()
</script>