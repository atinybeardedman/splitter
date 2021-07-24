<template>
    <section>
        <form-field id="bill" label="Bill" p="y-1rem" icon="dollar">
            <base-input v-model.number="totalBill" placeholder="0" type="number" id="bill" p="y-2 x-4" font="700"></base-input>
        </form-field>
        <tip-choices py="1rem"></tip-choices>
        <form-field p="y-1rem" id="num-split" label="Number of People" icon="person">
            <base-input v-model.number="numSplit" placeholder="1" type="number" id="num-split" p="y-2 x-4" font="700"></base-input>
        </form-field>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import useStore from '../composition/useStore';
import BaseInput from "./BaseInput.vue";
import FormField from "./FormField.vue";
import TipChoices from './TipChoices.vue';
export default defineComponent({
    name: 'TipForm',
    components: {
        FormField,
        BaseInput,
        TipChoices
    },
    setup: () => {
        const { totalBill, numSplit } = useStore();

        return {
            totalBill,
            numSplit
        }
    }
});
</script>  