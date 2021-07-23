import { computed, Ref, ref, watchEffect } from "vue";

const selectedPercent: Ref<number | undefined> = ref();
const totalBill: Ref<number | undefined> = ref();
const numSplit:  Ref<number | undefined> = ref();
const hasError = computed(() => {
    if(!(selectedPercent.value && numSplit.value && totalBill.value) ){
        return true;
    }
    else if(selectedPercent.value < 0){
        return true;
    }
    if(totalBill.value < 0){
        return true;
    }
    if(numSplit.value <= 0){
        return true
    }
    return false;
})
export default function useStore(){
    return {
        selectedPercent,
        totalBill,
        numSplit,
        hasError
    }
}