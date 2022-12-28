<template>
    <div>
        <fn-input-fat :tit="'標題'" :is_err="form_err.tit">
            <input class="input" v-model="form.tit" placeholder="請輸入標題"/>
        </fn-input-fat>
        <div class="w-100 py_row"></div>
        
        <div class="fx-l fx-wp">
            <fn-input-fat class="w-50 w-666-p" :tit="'下次發布時間'">
                <eos-time-choise class="input"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>

            <fn-input-fat class="w-50 w-666-p" :tit="'作者'" :is_err="form_err.author">
                <input class="input" v-model="form.author" placeholder="請輸入作者名稱"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>
        </div>

        <!--
        <div class="fx-l fx-wp">
            <fn-input-fat class="w-50 w-666-p" :tit="'類別'">
                <fn-select class="input" :items="choise.types" :def="1"/>
            </fn-input-fat>
            <div class="w-100 py_row"></div>

            <fn-input-fat class="w-666 w-80-p" :tit="'通知內容'" :is_err="form_err.cont_sub">
                <textarea class="input" placeholder="請輸入" v-model="form.cont_sub"></textarea>
            </fn-input-fat>
            <div class="w-100 py_row"></div>
        </div>-->
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const choise = reactive({
    types: [
        { txt: '通知', v: 1 },
        { txt: '廣告', v: 2 },
    ],
})
const form = reactive({
    tit: '', next_publish: '', author: '', type: 1, cont_sub: ''
})
const form_err = reactive({
    tit: false, next_publish: false, author: false, type: false, cont_sub: false
})
</script>