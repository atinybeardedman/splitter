<template>
    <base-button
        font="700"
        border="~ 0px rounded-md"
        outline="none active:none"
        my="1.5"
        py="1"
        w="md:7.5rem 9rem"
        transition="colors"
        sm="hover:bg-accent hover:text-dark-cyan"
        :text="isToggled ? 'dark-cyan' : 'white'"
        :bg="isToggled ? 'primary' : 'dark-cyan'"
    >
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
        const { selectedValue, value } = toRefs(props);
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