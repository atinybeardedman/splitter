<template>
    <div>
        <toggle-button
            v-for="(choice,index) in choices"
            :key="index"
            :id="'choice-' + index"
            :value="choice"
            :selected-value="selectedValue"
            @click="selectedValue = choice"
        >{{ choice }}%</toggle-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import ToggleButton from './ToggleButton.vue';
import BaseInput from './BaseInput.vue';
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
        const selectedValue = ref(5);
        return {
            selectedValue
        }
    }
});
</script>