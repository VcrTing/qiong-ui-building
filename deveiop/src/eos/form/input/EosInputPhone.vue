<template>
    <div class="eos-ip-phone">
        <fn-select :items="pfxs"/>
        <input v-model="phe" type="text" placeholder="電話號碼"/>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const phe = ref<string | null>()        
watch(phe, (n, o) => console.log(''))
const pfxs = [
    { txt: '香港', v: 0 },
    { txt: '澳門', v: 853 },
]
</script>