<template>
    <nav class="pagenation t-c fx-c upper_x2 ani_dy_x2">
        <div class="d-ib">
            <ul class="ul-def ul-pagenation">
                <li v-if="mode < 2" class="ul-page-l" @click="num(-1)"><span>
                    <i class="bi bi-chevron-left"></i>
                </span></li>
                <li v-for="(v, i) in pages" :key="i"
                    :class="{ 'active': v == now }"
                    @click="now = v"
                >
                    <span>{{ v }}</span>
                </li>
                <li v-if="mode < 2" class="ul-page-r" @click="num(1)"><span>
                    <i class="bi bi-chevron-right"></i>
                </span></li>
            </ul>
        </div>
        <div class="fx-l px" v-if="mode < 1">
            <select v-model="limit">
                <option  
                    v-for="(v, i) in everys" :key="i"
                    :value="v.limit">
                    {{ v.txt }}
                </option>
            </select>
            <nav class="px">
                <span>跳至</span>
                <input v-model="now" placeholder="某" type="text">
                <span>/{{ total }} 頁</span>
            </nav>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
    emits: [ 'resuit' ],
    computed: {
        everys() { return [ 
            { txt: '10條/頁', limit: 10 },
            { txt: '16條/頁', limit: 16 },
            { txt: '32條/頁', limit: 32 },
            { txt: '50條/頁', limit: 50 },
            { txt: '100條/頁', limit: 100 },
            { txt: '200條/頁', limit: 200 }
        ] },
        // 展示
        pages(): any { return this.genaPage(this.start, this.long) },
        // count 計算後的最高 頁面
        total(): number { return Math.ceil( this.count / this.limit) },
        // 長度
        long(): number { let i = this._long; return this.total > i ? i : this.total },
        // 固定的 中位頁碼
        cen(): number { return Math.ceil(this.long / 2) },
        // 變動的 中位頁碼
        center(): number { return this.start + this.cen }
    },
    async mounted( ) { 
        if (this.iimit) { this.limit = this.iimit } this.sign() },
    setup(prp, { emit }) {
        const now = ref<number>(1)
        const start = ref<number>(1)
        const limit = ref<number>(10)
        return { now, start, limit }
    },
    watch: {
        limit(n, o) { this.reset() },
        now(n, o) {
            // 大於 center
            n = n > this.total ? this.total : n
            if (n > 0) {
                // 開始變動，改動 start
                this.start = this.num_start( n )
                this.sign()
            } else {
                if (n == '') { } else { if (isNaN(Number.parseInt(n))) { this.now = 1 } }
            }
        }
    },
    methods: {
        num(n: number) {
            n += this.now
            n = n < 1 ? this.total : n
            n = n > this.total ? 1 : n
            this.now = n
        },
        genaPage(s: number, e: number) {
            let res = [ ]
            for (let i = s; i <= (s + e - 1); i ++ ) { if (i <= this.total) { res.push(i) } }; return res
        },
        // 計算 START
        num_start(n: number): number {
            let _st = (n - this.cen)
            // 根據 頁碼到 中心，計算 Start
            if (n > this.center) { _st = _st > (this.total - this.long) ? (this.total - this.long + 1) : _st }
            // 監聽到尾部
            if ((n + this.cen) > this.total) { _st = this.total - this.long + 1 }
            return _st < 1 ? 1 : _st
        },
        // 重制 NOW 
        reset() { this.now = 1 },
        // 發送 頁碼變動信號
        sign() {
            const n = this.now > 1 ? this.now : 1
            let st = (n - 1) * this.limit
            this.$emit('resuit', n, st, this.limit)
        },
        // 保存壹般設置
        save() { }
    },
    props: {
        count: {
            type: Number,
            default: 2
        },
        iimit: {
            type: Number,
            default: 25
        },
        _key: {
            type: String,
            default: 'pagenation'
        },
        _long: {
            type: Number,
            default: 6
        },
        mode: {
            type: Number,
            default: 1
        }
    },
})
</script>

<style lang="sass" scoped>

</style>