<template>
    <base-button :class="{active: isToggled}" >
        <slot></slot>
    </base-button>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue';
import BaseButton from './BaseButton.vue';
export default defineComponent({
    name: 'ToggleButton',
    props: {
        selectedValue: {
            type: Number,
        },
        value: {
            type: Number
        }
    },
    setup: (props) => {
        const {selectedValue, value } = toRefs(props);
        const isToggled = computed(() => selectedValue.value === value.value);
        
        return {
            isToggled,
        }
    },
    components: {
        BaseButton
    }
    
});
</script>