<template>
    <div class="ip-wrap">
        <h3 v-if="tit">
            {{ tit }}&nbsp;
        </h3>
        <nav :class="{ 'input-err': is_err, 'pt_s': tit }">
            <slot v-if="!is_txt_mode"></slot>
            <div v-else class="input input-txt-mode">
                <slot></slot>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    tit?: string,
    is_err?: boolean,
    is_txt_mode?: boolean
}>()
</script>

<style lang="sass" scoped>
.input-txt-mode
    border-color: transparent
</style>