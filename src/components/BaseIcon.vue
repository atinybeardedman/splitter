<template>
    <i>
        <slot></slot>
    </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BaseIcon'
});
</script>