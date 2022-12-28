<template>
    <div class="fx-s crumb">
        <nav class="fx-l">
            <div v-for="(v, i) in crumbs" :key="i" class="">
                <div class="d-ib" :class="{ ' ': i < iong, 'aaaa': i >= iong }">{{ txts[v] }}</div>
                <span v-if="i < iong" class="px">/</span>
            </div>
        </nav>
        <div>
            <slot></slot>
        </div>
    </div>
    <!--
    <div v-if="is_tit">
        <h2>{{ txts[ crumbs[ iong ] ] }}</h2>
    </div>-->
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { CRUMBS } from '../../../conf';
const prp = defineProps<{ is_tit?: boolean }>()

const txts: ONE = CRUMBS

const rout = useRoute();
const path: string = rout.path; 
let res: string[] = path ? path.split('/') : [ ]

let crumbs = ref<string[]>([ '' ])
crumbs.value = res.filter(e => e != '').filter(e => e != 'admin')

const iong = ref<number>(crumbs.value.length - 1)
</script>