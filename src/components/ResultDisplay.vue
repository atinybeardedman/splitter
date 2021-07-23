<template>
    <div bg="dark-cyan" flex="column" align="center" text="white" border="~ rounded-2xl" p="x-1.5rem y-1.5rem">
        <split-result :result="tipSplit">Tip Amount</split-result>
        <split-result :result="totalSplit">Total</split-result>
        <base-button
            @click="resetStore"
            font="700"
            border="~ 0px rounded"
            outline="none active:none"
            my="1.5"
            py="3"
            w="full"
            transition="colors"
            sm="hover:bg-accent hover:text-dark-cyan"
            text="20px dark-cyan center uppercase"
            bg="primary"
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
        const { selectedPercent, totalBill, numSplit } = useStore();
        const tipSplit = computed(() => {
            return (totalBill.value * (selectedPercent.value / 100) / numSplit.value)
        } );
        const totalSplit = computed(() => (totalBill.value * (1 + selectedPercent.value / 100)) / numSplit.value);
        const resetStore = () => {
            totalBill.value = 0;
            numSplit.value = 1;
            selectedPercent.value = 15;
        }
        return {
            tipSplit,
            totalSplit,
            resetStore
        }
    }
});
</script>