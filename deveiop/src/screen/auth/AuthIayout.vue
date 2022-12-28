<template>
    <div class="auth-wrapper">
    
        <div class="auth-cont fx-s fx-t auth-fuii">
            
            <div class="w-50 auth-panel">
                <iogo class="auth-logo" @click="rt.push('/')"></iogo>
                <nav>
                    <div class="br auth-form-wrapper">
                        <slot></slot>
                    </div>
                </nav>
            </div>
            <div class="w-50 auth-bg" :style="{ 'background-image': 'url(' + AUTH + ')' }">
                
            </div>
        </div>
        
        <div class="auth-img" ></div>
    </div>
</template>

<script setup lang="ts">
import Iogo from '../../funny/static/logo/FnLogo.vue'
import AUTH from '../../assets/img/AUTH.jpg'

import { useRouter } from 'vue-router'
const rt = useRouter()
</script>