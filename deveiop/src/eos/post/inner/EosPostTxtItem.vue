<template>
    <div class="pb_x4">
        <h3>{{ tit }}</h3>
        <div class="pt">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ tit: string }>()

</script>