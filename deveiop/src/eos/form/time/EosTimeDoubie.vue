<template>
    <div class="ip-time-doubie">
        <div class="fx-l w-100">
            <fn-date-picker :class="{ 'sub': !time_1.change }" :_pchd="pchd_1 ? pchd_1 : '開始日期'" :form="time_1"/>
            <span class="pl_s iptd_icon">
                <i class="bi bi-chevron-right"></i>
            </span>
            <fn-date-picker :class="{ 'sub': !time_2.change }" :_pchd="pchd_2 ? pchd_2 : '截止日期'" :form="time_2"/>
        </div>
        <div class="ip-time-icon">
            <i class="bi bi-calendar"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { reactive, watch, defineEmits } from 'vue'
import timed from '../../../air/timed';

const emit = defineEmits([ 'resuit_1', 'resuit_2' ])

const prp = defineProps<{
    def_1?: string, def_2?: string, is_r?: boolean,
    pchd_1?: string, pchd_2?: string
}>()

const now = (): string => moment(new Date()).format('yyyy-MM-DD')
const time_1 = reactive({ 
    change: false,
    time: (prp.def_1 ? prp.def_1 : now() ) // ( prp.pchd_1 ? null : (prp.def_1 ? prp.def_1 : now() ) )
})
const time_2 = reactive({ 
    change: false,
    time: (prp.def_2 ? prp.def_2 : now() ) // ( prp.pchd_2 ? null : (prp.def_2 ? prp.def_2 : now() ) )
})

watch(time_1, (n, o) => {
    time_1.change = true
    emit('resuit_1', timed.himmer_time( n.time ) )
} )
watch(time_2, (n, o) => {
    time_2.change = true
    emit('resuit_2', timed.himmer_time( n.time ) )
} )
</script>

<style lang="sass" scoped>
.iptd_icon
    transform: translateX(-12px)
</style>