<template>
    <div class="pb fx-s">
        <h3>{{ tit }}</h3>
        <div v-if="btn">
            <button class="btn-pri btn-def-ig" @click="$emit('tap')">{{ btn }}</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    tit?: String, 
    btn?: String
}>()
</script>