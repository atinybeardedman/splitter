import { ref, watchEffect } from "vue";

const selectedPercent = ref(15);
const totalBill = ref(0);
const numSplit = ref(1);
export default function useStore(){
    return {
        selectedPercent,
        totalBill,
        numSplit
    }
}