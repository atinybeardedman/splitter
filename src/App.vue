<template>
  <main>
    <section>
      <tip-form></tip-form>
      <result-display></result-display>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TipForm  from './components/TipForm.vue';
import ResultDisplay from './components/ResultDisplay.vue';

export default defineComponent({
  name: 'App',
  components: {
    TipForm,
    ResultDisplay
  }
})
</script>

<style>
</style>
