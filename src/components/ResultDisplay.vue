<template>
    <div bg="dark-cyan" flex="~ col" align="items-stretch" justify="md:between" text="white" border="~ rounded-2xl" p="1.5rem md:3rem">
        <div>
            <split-result :result="tipSplit">Tip Amount</split-result>
            <split-result :result="totalSplit">Total</split-result>
        </div>
        <base-button
            :disabled="hasError"
            @click.prevent="resetStore"
            font="700"
            border="~ 0px rounded"
            outline="none active:none"
            my="1.5"
            py="3"
            w="full"
            transition="colors"
            md="hover:bg-accent disabled:bg-primary"
            text="20px dark-cyan center uppercase"
            bg="primary"
            :opacity="hasError ? '50': '100'"
        >Reset</base-button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, watchEffect, toRefs } from 'vue';
import SplitResult from './SplitResult.vue';
import BaseButton from './BaseButton.vue';
import useStore from '../composition/useStore';
export default defineComponent({
    name: 'ResultDisplay',
    components: {
        SplitResult,
        BaseButton
    },
    setup: () => {
        const { selectedPercent, totalBill, numSplit, hasError } = useStore();
        const tipSplit = computed(() => 
            hasError.value ? 0 : (totalBill.value * (selectedPercent.value / 100) / numSplit.value)
         );
        const totalSplit = computed(() => hasError.value ? 0 : (totalBill.value * (1 + selectedPercent.value / 100)) / numSplit.value);
        const resetStore = () => {
            if(!hasError.value){
                totalBill.value = undefined;
                numSplit.value = undefined;
                selectedPercent.value = undefined;
            }
        }
        return {
            tipSplit,
            totalSplit,
            hasError,
            resetStore
        }
    }
});
</script>