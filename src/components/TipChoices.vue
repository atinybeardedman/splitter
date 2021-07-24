<template>
    <div>
        <div font="700" text="16px dark-cyan" p="b-1rem">Select Tip %</div>
        <div flex="~ row wrap" justify="evenly">
            <toggle-button
                v-for="(choice,index) in choices"
                :key="index"
                :id="'choice-' + index"
                :value="choice"
                :selected-value="selectedPercent"
                @click="selectedPercent = choice"
            >{{ choice }}%</toggle-button>
            <form-field w="md:7.5rem 8.5rem"  py="1.5">
                <base-input
                    v-model.number="customTip"
                    placeholder="Custom"
                    font="700"
                    text="placeholder-gray-cyan-500 right"
                    p="x-1"
                    type="number"
                    id="custom"
                ></base-input>
            </form-field>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, watchEffect } from 'vue';
import ToggleButton from './ToggleButton.vue';
import BaseInput from './BaseInput.vue';
import FormField from './FormField.vue';
import useStore from '../composition/useStore';
export default defineComponent({
    name: 'TipChoices',
    components: {
        ToggleButton,
        BaseInput,
        FormField
    },
    props: {
        choices: {
            type: Array as PropType<number[]>,
            default: [5, 10, 15, 25, 50]
        }
    },
    setup() {
        const { selectedPercent } = useStore();
        const customTip: Ref<number | undefined> = ref();
        watchEffect(() => {
            if (typeof customTip.value === 'number') {
                console.log(customTip.value);
                selectedPercent.value = customTip.value;
            }
        })
        return {
            selectedPercent,
            customTip
        }
    }
});
</script>