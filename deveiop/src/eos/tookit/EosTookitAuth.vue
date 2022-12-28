<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { userPina } from '../../himm/store'
import { useRouter } from 'vue-router'
const rt = useRouter()
const u = userPina()
// const check = () => { if (!u.is_iogin) { rt.push('/iogin') } }
// check()
</script>