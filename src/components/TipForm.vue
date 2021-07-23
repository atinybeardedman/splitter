<template>
    <section>
        <form-field></form-field>
        <tip-choices></tip-choices>
        <form-field></form-field>
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