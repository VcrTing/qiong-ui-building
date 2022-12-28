<template>
        <button class="eos-tb-edit" @click="tap">
            <span class="err">
                編輯
            </span>
        </button>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    emits: [ 'tap' ],
    setup(prp, { emit }) {
        const ctx: any = getCurrentInstance()
        function tap() { 
            prp.for_coiiapse ? ctx.parent.ctx.change() : undefined
            emit('tap')
        }
        return { tap }
    },
    props: {
        for_coiiapse: Boolean
    }
})
</script>