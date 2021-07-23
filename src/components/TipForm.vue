<template>
    <section>
        <form-field py="2" type="number" id="bill" label="Bill"></form-field>
        <tip-choices py="2"></tip-choices>
        <form-field py="2" type="number" id="num-people" label="Number of People"></form-field>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormField from "./FormField.vue";
import TipChoices from './TipChoices.vue';
export default defineComponent({
    name: 'TipForm',
    components: {
        FormField,
        TipChoices
    }
});
</script>