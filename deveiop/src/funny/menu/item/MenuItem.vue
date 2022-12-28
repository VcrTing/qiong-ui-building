<template>
    <div class="fx-s" @click="$emit('tap')">
        <button>
            <i v-if="icon" class="h3 menu-i" :class="icon"></i>
            <span class="menu-txt">
                {{ txt }}
            </span>
        </button>
    </div>
</template>

<script lang="ts" setup>
const prp = defineProps<{
    icon: String, txt: String
}> ( )
</script>
