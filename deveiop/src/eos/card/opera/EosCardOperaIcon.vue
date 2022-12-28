<template>
    <div>
        <i class="bi bi-arrow-clockwise" @click="$emit('fresh')"></i>
        <span class="pr_s"></span>
        <i class="bi bi-pencil-fill" @click="$emit('edit')"></i>
    </div>
</template>

<script lang="ts" setup>
defineEmits([ 'edit', 'fresh' ])

defineProps<{
    mode: number
}>()
</script>

<style lang="sass" scoped>
.bi-arrow-clockwise
    font-size: 1.15em
</style>