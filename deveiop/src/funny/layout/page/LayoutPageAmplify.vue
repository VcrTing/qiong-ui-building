<template>
    <div class="iayout-page-form iayout-page-amplify">
        <div class="fx-s pb">
            <fn-page-header></fn-page-header>
            <slot name="opera"></slot>
        </div>
        <hr class="hr-deep"/>
        <div class="ipd-cont pt_x2 upper">
            <slot name="cont"></slot>
            <br/>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>