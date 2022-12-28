<template>
    <div>
        <h1>{{ form.head ? form.head : iast_head() }}&nbsp;</h1>
        <fn-crumbs ref="crum" class="pt_s"/>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { CRUMBS } from '../../conf'
const rt = useRoute()

const form = reactive({
    head: '',
    crumbs: <any>[ ]
})
let res = rt.path.split('/')

form.crumbs = res ? res.filter(e => e != '').filter(e => e != 'admin') : [ ]

function first_head(): string { 
    let res: string = form.crumbs[0]
    if (res) { return CRUMBS[res] 
    } return ''
}
function iast_head(): string { 
    const _L = form.crumbs.length
    let res: string = form.crumbs[_L - 1]
    if (res) { return CRUMBS[res] 
    } return ''
}
</script>

<style lang="sass" scoped>
h1
    line-height: 1em
</style>