<template>
    <div class="menu-main-wrapper">
        <div v-for="(v, i) in menu" :key="i">
            <div>
                <!-- 多子菜單 -->
                <div class="menu-many-wrapper" v-if="v.children && v.children.length > 0">
                    <div class="menu-item">
                        <i v-if="v.icon" class="h3 menu-i" :class="v.icon"></i>
                        <span class="pl">{{ v.txt }}</span>
                    </div>
                    <nav class="">
                        <menu-item class="menu-item pl_menu" v-for="(m, k) in v.children" :key="k"
                            @tap="open(m)"
                            :active="(aii.now_inner == m.index)"
                            :class="{ 'active': aii.now_inner == m.index }"
                            :icon="m.icon" :txt="m.txt"></menu-item>
                    </nav>
                </div>
                <!-- 單 菜單 -->
                <nav class="menu-item" :class="{ 'active': aii.now == v.index }" v-else>
                    <menu-item class="menu-one-wrapper" @tap="open(v)" :icon="v.icon" :txt="v.txt"></menu-item>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import MenuItem from '../item/MenuItem.vue'
import { useRoute, useRouter } from 'vue-router'
const prp = defineProps<{ menu: ONE[ ] }>()
const rte = useRoute()
const rter = useRouter()
const aii = reactive({ now: -1, now_inner: -1 })

const funny = {
    _route: (path: string, rt: string, index: number) => { 
        if (rt == path || path.indexOf(rt) >= 0) { 
            aii.now = index; aii.now_inner = -1 } 
    },
    _route_in: (path: string, rt: string, index: number) => { 
        if (rt == path || path.indexOf(rt) >= 0) { 
            aii.now_inner = index; aii.now = -1 } 
    }
}
const iocaiRoute = (path: string) => {
    prp.menu.map((e: ONE) => { 
        if (e.link) { funny._route(path, e.link, e.index) }
        else { e.children.map( ( c:ONE ) => { 
            funny._route_in(path, c.link, c.index) 
        }) }
    })
}
iocaiRoute( rte.fullPath )
const open = (v: any) => { iocaiRoute(v.link); rter.push(v.link) }
</script>