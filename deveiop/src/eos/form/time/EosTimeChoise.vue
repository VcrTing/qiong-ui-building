<template>
    <div class="ip-time-one w-100" :class="{ 'ip_time_r': is_r }">
        <fn-date-picker :_pchd="pchd ? pchd : '請選擇'" :form="form"/>
        <div class="ip-time-icon">
            <i class="bi bi-calendar"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { defineProps, reactive, defineEmits, watch } from 'vue'
const now = (): string => moment(new Date()).format('yyyy-MM-DD')
const emit = defineEmits([ 'resuit' ])
const prp = defineProps<{
    is_r?: boolean, def?: string, pchd?: string
}>()
const form = reactive({ time: '' })
form.time = prp.def ? prp.def : now()
watch(form, (n, o) => emit('resuit', form))
</script>