<template>
    <section>
        <form-field id="bill" label="Bill" p="y-1.25rem lg:y-1rem" icon="dollar">
            <base-input
                v-model.number="totalBill"
                placeholder="0"
                type="number"
                id="bill"
                p="y-2 x-4"
                font="700"
            ></base-input>
        </form-field>
        <tip-choices p="y-1.25rem lg:y-1rem"></tip-choices>
        <form-field :error="validationErrors.split" p="y-1.25rem lg:y-1rem" id="num-split" label="Number of People" icon="person">
            <base-input
                v-model.number="numSplit"
                min="1"
                placeholder="1"
                type="number"
                id="num-split"
                p="y-2 x-4"
                font="700"
                :validation-fn="splitValidation"
                @validation="handleValidation($event, 'split')"
            ></base-input>
        </form-field>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
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
        const validationErrors = reactive({
            bill: '',
            split: '',
        });
        const splitValidation = (val: number) => {
            if(val <= 0){
                return "Can't be zero"
            }
        };
        const handleValidation = (val: string, fieldName: 'bill' | 'split') => {
            validationErrors[fieldName] = val;
        };
        return {
            totalBill,
            numSplit,
            splitValidation,
            handleValidation,
            validationErrors
        }
    }
});
</script>  