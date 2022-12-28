<template>
    <button class="err" @click="$emit('tap')">儲存</button>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
defineEmits([ 'tap' ])
</script>