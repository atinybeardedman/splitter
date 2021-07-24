<template>
    <div>
        <div v-if="label" class="header" flex="~ row" justify="between" text="16px" font="700" p="b-0.5rem">
            <label :for="id"  text="gray-cyan-500">{{ label }}</label>
            <div text="warning" class="error-label">{{error}}</div>
        </div>
        <div
            transition="~"
            :class="['input-wrapper', {error}]"
            border="~ rounded-md 2px solid primary opacity-0 focus-within:opacity-100 hover:opacity-100"
            pos="relative"
        >
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
        error: {
            type: String,
            default: ''
        }
    }
});
</script>

<style>
    .error.input-wrapper {
        @apply border-warning border-opacity-100;
    }
</style>