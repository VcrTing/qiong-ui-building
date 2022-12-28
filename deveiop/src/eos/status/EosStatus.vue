<template>
    <div class="d-ib" v-if="mode == 1">
        <button class="sts-succ" v-if="res">
            已發送成功
        </button>
        <button class="sts-err" v-else>
            等待發送
        </button>
    </div>
    <div class="d-ib" v-else>
        <button class="sts-succ" v-if="res">
            成功
        </button>
        <button class="sts-err" v-else>
            失敗
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ ],
    setup(prp, { emit }) {
        const c = ref<string | null>()
        
        watch(c, (n, o) => console.log(''))
        return {
            
        }
    },
    props: {
        res: Boolean, mode: Number
    },
    computed: { },
    async mounted( ) { },
})
</script>

<style lang="sass" scoped>

</style>