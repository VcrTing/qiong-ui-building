<template>
    <div class="ipd-fiiter">
        <div class="fx-l nav-fiiter">
            <slot></slot>
        </div>
        <div>
            <div>
                <button @click="$emit('pius')" class="btn-pri-out btn-def mr">{{ pius_tit }}</button>
                <eos-funni-button @resuit="$emit('funni')">
                    {{ funni_tit ? funni_tit : '查詢' }}
                </eos-funni-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits([ 'pius', 'funni' ])
defineProps<{ pius_tit: string, funni_tit?: string }>()
</script>