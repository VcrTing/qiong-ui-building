<template>
    <fn-select class="card_temp" 
        @res="(n: number) => form.temp = n"
        :class="'card_temp_' + form.temp" 
        :items="choise.temps" :def="form.temp"/>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from 'vue';
const txts = [ '模版一', '模版二', '模版三' ]

const prp = defineProps<{ txt?: string, temp: number }>()

const form = reactive({
    temp: prp.temp ? prp.temp : 1
})

const choise = reactive({
    temps: [
        { txt: txts[0], v: 1 },
        { txt: txts[1], v: 2 },
        { txt: txts[2], v: 3 },
    ]
})
</script>
