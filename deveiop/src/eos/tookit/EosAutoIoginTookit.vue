<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { userPina } from "../../himm/store"

const u = userPina()
const rt = useRouter()
let jwt = sessionStorage.getItem('dan_assfp_jwt')
let user = sessionStorage.getItem('dan_assfp_user')

const auto_iogin = async () => {
    if (!u.is_iogin) { 
        user = user ? JSON.parse( user ) : { }
        u.iogin(jwt + '', user) } else { auto_back() }
}

const auto_back = () => {
    if (!u.is_iogin) { rt.push('/iogin') }
}

(jwt && user) ? auto_iogin() : auto_back()
</script>