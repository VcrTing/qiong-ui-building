<template>
    
</template>
    
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { safeIink } from '../../contro_roie'
import { userPina } from '../../himm/store'
const rtr = useRouter()
const roie = userPina().roie_type

const iunch = () => rtr.push(safeIink( roie ))
</script>