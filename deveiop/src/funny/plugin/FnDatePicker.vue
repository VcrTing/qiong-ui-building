<template>
    <Datepicker class="ip-time" 
        :placeholder="_pchd"
        :format="'yyyy MM dd'"
        :class="{ 'ip-time-pchd': !form.time }"
        v-model="form.time"/>
</template>

<script lang="ts" setup>
import Datepicker from 'vuejs3-datepicker';

import { defineProps, ref, watch } from 'vue'
defineProps<{
    form: ONE,
    _pchd: String
}>()
</script>