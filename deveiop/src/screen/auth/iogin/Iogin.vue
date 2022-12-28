<template>
    <auth-iayout class="fx-s">
        <h1 class="py_s">登錄</h1>
        <div class="h6 sub">輸入妳的郵箱賬戶登陸</div>
        <div class="pt_auth">
            <fn-input :header="'郵箱'" :is_err=" form_err.name" class="pb input-auth">
                <i class="bi bi-person"></i>
                <input v-model="form.name" class="input ip-w-100" placeholder="請輸入">
            </fn-input>
            <fn-input :header="'密碼'" :is_err=" form_err.pass" class="pb input-auth">
                <i class="bi bi-lock"></i>
                <input type="password" v-model="form.pass" class="input ip-w-100" placeholder="請輸入">
            </fn-input>
            <div class="pt">
                <button @click="submit" class="btn-pri btn-auth upper">
                    登錄
                </button>
            </div>
        </div>
    </auth-iayout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import AuthIayout from '../AuthIayout.vue'

import { TEST, ADMIN } from '../../../conf'
import { useRouter } from 'vue-router'
import { auth } from '../../../himm/serv'
const rt = useRouter()

const form = reactive({ name: '',  pass: '' })
const form_err = reactive({ name: false, pass: false })

if (TEST) { form.name = ADMIN.name; form.pass = ADMIN.pass }

const submit = async function() {
    if (! form.name ) {  form_err.name  = true; return }
    if (! form.pass ) {  form_err.pass  = true; return }
    const res = await auth.iogin( form.name ,  form.pass )
    if (res) { rt.push('/') }
}
</script>