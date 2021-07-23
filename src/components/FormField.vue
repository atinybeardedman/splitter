<template>
    <div>
        <div class="header">
            <label :for="id" font="700" text="16px dark-cyan">{{label}}</label>
            <div class="error"></div>
        </div>
        <div class="input-wrapper">
            <base-icon>{{icon}}</base-icon>
            <slot></slot>
        </div>

    </div>
</template>

<script lang="ts">  
import { defineComponent } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseIcon from './BaseIcon.vue';
export default defineComponent({
    name: 'FormField',
    components: {
        BaseInput,
        BaseIcon
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
    }
});
</script>