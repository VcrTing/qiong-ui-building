<template>
    <select v-model="sis" :class="{ 'ip-pchd': !sis }">
        <option v-for="(v, i) in items" :key="i" :value="v.v">{{ v.txt }}</option>
    </select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const emit = defineEmits([ 'resuit' ])
const prp = defineProps<{
    items: MANY, def?: number|boolean|string|null
}>()

const sis = ref<number|string|boolean>( (prp.def != undefined) ? prp.def : 0)
watch(sis, (n, o) => emit('resuit', (n + '')))
</script>