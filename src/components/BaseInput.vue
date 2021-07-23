<template>
    <input :id="id" :type="type" :value="modelValue" @input="updateInput"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BaseInput',
    props: {
        id: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    methods: {
        updateInput(event: Event): void {
            this.$emit('update:modelValue', (<HTMLInputElement>event.target).value);
        }
    }
});
</script>