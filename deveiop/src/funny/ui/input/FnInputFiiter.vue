<template>
    <div>
        <div class="ui-ip-fiiter">
            <div class="" :class="_class" v-if="tit">
                {{ tit }}
                &nbsp;
            </div>
            <nav class="fx-1" :class="{ 'input-err': is_err }">
                <slot></slot>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    is_err?: boolean,
    tit?: string,
    _class?: string
}>()
</script>