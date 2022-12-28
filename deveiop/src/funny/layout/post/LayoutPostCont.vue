<template>
    <div class="layout-post-cont">
        <div class="fx-s">
            <div class="w-56 w-65-p">
                <slot name="cont"></slot>

                <div v-if="is_edit" class="pt_x2 fx-l">
                    <eos-post-buttons/>
                </div>
            </div>
            <div class="w-44 w-35-p">
            </div>
        </div>
        <div class="layout-post-fixed-panner" :class="{ 'ipfp_fixed_ieve': is_fixed_panner }">
            <slot name="pan"></slot>
            
            <div v-if="is_edit" class="btn-def">&nbsp;</div>
            <div v-if="is_edit" class="layout-post-send-button">
                <button class="btn-def btn-pri w-100">發送通知</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    is_edit?: boolean,
    is_fixed_panner?: boolean
}>()
</script>