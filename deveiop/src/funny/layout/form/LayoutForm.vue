<template>
    <div class="iayout-page-form iayout-page-box">
        <div class="fx-s">
            <fn-page-header></fn-page-header>
            <slot name="opera"></slot>
        </div>
        <div class="ipd-cont pt_x2 upper">
            <slot name="cont"></slot>
            <br/>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>