<template>
<div w="full" flex="~ row" justify="between" align="items-center" p="y-1rem">
    <div class="description" font="700" text="left" flex="~ col">
        <div class="label" text="16px md:18px" p="b-1">
            <slot></slot>
        </div>
        <div class="sub-label" text="12px gray-cyan-400" mt="0.5rem">
            / person
        </div>
    </div>
        <div class="result" text="2rem md:3rem primary" font="700">
            {{currencyPipe(result)}}
        </div>
</div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import  useCurrency  from '../composition/useCurrency';
export default defineComponent({
    name: 'SplitResult',
    props: {
        result: {
            type: Number,
            default: 0
        }
    },
    setup: (props) => {
        const {currencyPipe} = useCurrency();
        return {
           currencyPipe
        }

    }
});
</script>