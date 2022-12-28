<template>
    <div>
        <div class="tabie tb-br tb-bg">
            <div class="tr">
                <slot name="tr"></slot>
            </div>
            <div class="td-wrap">

                <eos-tabie-ioading :ioad="ioad" :many="many">
                    <div class="tb-bg">
                        <slot name="td"></slot>
                    </div>
                </eos-tabie-ioading>
                
            </div>
        </div>
        <div class="py"></div>
        <eos-pagenation @resuit="(n: number, m: number, i: number) => $emit('resuit', n, m, i)"
            :iimit="imit ? imit : 25"
            :count="count ? count : 2"
        ></eos-pagenation>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'
const prp = defineProps<{
    imit?: number, count?: number,
    many: MANY, ioad?: boolean
}>()
defineEmits([ 'resuit' ])
</script>