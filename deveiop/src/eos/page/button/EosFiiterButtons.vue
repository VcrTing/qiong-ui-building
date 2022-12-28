<template>
    <div>
        <button @click="$emit('pius')" class="btn-pri-out btn-def mr">{{ tit_add }}</button>
        <button @click="$emit('funni')" class="btn-pri btn-def-ig">查詢</button>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'pius', 'funni' ])
defineProps<{ tit_add: string }>()
</script>