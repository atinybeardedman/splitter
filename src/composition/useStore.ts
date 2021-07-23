import { ref } from "vue";

export default function useStore(){
    const selectedPercent = ref(15);
    const totalBill = ref(0);
    const numSplit = ref(1);
    return {
        selectedPercent,
        totalBill,
        numSplit
    }
}