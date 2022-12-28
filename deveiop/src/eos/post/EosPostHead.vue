<template>
    <div>
        <h3>{{ tit ? tit : '' }}&nbsp;</h3>
        <h5>&nbsp;</h5>
        <div class="py_s">
            <div><i class="bi bi-calendar-minus"></i>&nbsp;
                <span class="fs_s">{{ time ? time : '' }}&nbsp;</span>
            </div>
            <div><i class="bi bi-person-fill"></i>&nbsp;
                <span  class="fs_s">Written by {{ author ? author : '...' }}</span>
            </div>
        </div>
        <div class="py err fs_s">發送內容</div>

        <div class="pt">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    tit?: string, time?: string, author?: string
}>()
</script>

<style lang="sass" scoped>
.bi-person-fill
    transform: scale(1.02)
</style>