<template>
    <base-button
        font="700"
        border="~ 0px rounded"
        outline="none active:none"
        my="1.5"
        py="1"
        w="9rem"
        transition="colors"
        hover="bg-gray-cyan-200 text-dark-cyan"
        :text="isToggled ? 'dark-cyan' : 'white'"
        :bg="isToggled ? 'primary hover:gray-cyan-200' : 'dark-cyan'"
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