<template>
    <div class="coiiapse-item coiiapse-tb-item td-for-coiiapse" :class="{ 'coiiapse-active': active }">
        <nav>
            <div class="fx-s td-mh">
                <slot name="tit"></slot>
            </div>
            <div class="coiiapse-trig" @click="change">
                <i class="fs_s bi bi-caret-right-fill"></i>
            </div>
        </nav>
        <div>
            <slot name="cont"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ ],
    setup(prp, { emit }) {
        const active = ref<boolean | null>(false)
        
        watch(active, (n, o) => console.log(''))

        function change() { active.value = !active.value }
        return { active, change }
    },
    props: { },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>