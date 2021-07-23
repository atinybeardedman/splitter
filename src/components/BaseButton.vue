<template>
    <button  @click="$emit('click', $event)">
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