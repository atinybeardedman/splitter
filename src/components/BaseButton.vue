<template>
    <button
        outline="none active:none hover:none focus:none focus-visible:black"
        border="none rounded-md"
        @click="$emit('click', $event)"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BaseButton',
    emits: ['click']
});
</script>