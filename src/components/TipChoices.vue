<template>
    <div text="sm dark-cyan">Select Tip %</div>
    <div flex="~ row wrap" justify="between">
        <toggle-button
            v-for="(choice,index) in choices"
            :key="index"
            :id="'choice-' + index"
            :value="choice"
            :selected-value="selectedPercent"
            @click="selectedPercent = choice"
        >{{ choice }}%</toggle-button>
        <base-input placeholder="Custom" font="700" text="placeholder-gray-cyan-500 right" px="1rem" b="~ rounded" type="number" id="custom" w="9rem"></base-input>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import ToggleButton from './ToggleButton.vue';
import BaseInput from './BaseInput.vue';
import useStore from '../composition/useStore';
export default defineComponent({
    name: 'TipChoices',
    components: {
        ToggleButton,
        BaseInput
    },
    props: {
        choices: {
            type: Array as PropType<number[]>,
            default: [5, 10, 15, 25, 50]
        }
    },
    setup() {
        const {selectedPercent} = useStore();
        return {
            selectedPercent
        }
    }
});
</script>