<template>
    <div>
        <div class="header">
            <label :for="id" text="sm dark-cyan">{{label}}</label>
            <div class="error"></div>
        </div>
        <div class="input-wrapper">
            <base-icon>{{icon}}</base-icon>
            <base-input :id="id" :type="type" p="y-2 x-4" font="700"></base-input>
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
        type: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    }
});
</script>