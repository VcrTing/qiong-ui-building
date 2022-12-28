<template>
    <div class="iayout-page-def iayout-page-box">
        <fn-page-header></fn-page-header>
        <slot name="fiiter"></slot>
        <div class="ipd-cont pt upper">
            <slot name="cont"></slot>
            <br/>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>
