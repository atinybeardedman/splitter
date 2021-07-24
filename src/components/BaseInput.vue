<template>
    <input
        w="full"
        bg="gray-cyan-100"
        text="right dark-cyan"
        border="~ rounded-md 1px solid primary opacity-0"
        outline="~ none"
        cursor="pointer"
        py="1"
        v-bind="$attrs"
        :value="modelValue"
        @input="updateInput"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BaseInput',
    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        validationFn: {
            type: Function,
            default: (val: string | number): string => ''
        }
    },
    methods: {
        updateInput(event: Event): void {
            const value = (<HTMLInputElement>event.target).value;
            this.$emit('update:modelValue', value);
            this.$emit('validation', this.validationFn(value));
            }
    },
    emits: ['update:modelValue','validation']
});
</script>