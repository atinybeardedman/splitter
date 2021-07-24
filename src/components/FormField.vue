<template>
    <div>
        <div class="header">
            <label :for="id" font="700" text="16px dark-cyan">{{ label }}</label>
            <div class="error"></div>
        </div>
        <div class="input-wrapper" pos="relative">
            <base-icon pos="absolute top-1/2 left-1rem" transform="~ -translate-y-1/2">
                <dollar-icon v-if="icon === 'dollar'"></dollar-icon>
                <person-icon v-else-if="icon === 'person'"></person-icon>
            </base-icon>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseIcon from './BaseIcon.vue';
import DollarIcon from '../assets/icon-dollar.svg?component';
import PersonIcon from '../assets/icon-person.svg?component';
export default defineComponent({
    name: 'FormField',
    components: {
        BaseInput,
        BaseIcon,
        DollarIcon,
        PersonIcon
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