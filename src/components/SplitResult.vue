<template>
<div flex="~ row" justify="between" align="items-center" p="y-1rem">
    <div class="description" font="700" text="left" flex="~ sm:row col">
        <div class="label" text="16px" p="b-1">
            <slot></slot>
        </div>
        <div class="sub-label" text="12px gray-cyan-400">
            / person
        </div>
    </div>
        <div class="result" text="2rem primary" font="700">
            {{currencyPipe(result)}}
        </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  useCurrency  from '../composition/useCurrency';
export default defineComponent({
    name: 'SplitResult',
    props: {
        result: {
            type: Number,
            default: 0
        }
    },
    setup: () => {
        const {currencyPipe} = useCurrency();
        return {
           currencyPipe
        }

    }
});
</script>