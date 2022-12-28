<template>
    <LayoutMain>
        <template v-slot:cont>
            <router-view/>

            <eos-auto-iogin-tookit/>
            <eos-tookit-auth/>
        </template>
    </LayoutMain>
</template>

<script lang="ts" setup>
import { userPina } from '../himm/store'
const user = userPina()
</script>