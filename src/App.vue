<template>
  <main h="100vh" display="flex" bg="gray-cyan-200">
    <section m="sm:y-auto sm:x-auto y-0" w="30rem">
      <h1 font="700 tracking-0.75rem" py="2rem" text="center uppercase dark-cyan" class="title">
        Spli<br>
        tter
      </h1>
      <div bg="white" border="~ rounded-2xl white" px="2rem" py="2">
        <tip-form m="y-1rem"></tip-form>
        <result-display m="y-1rem"></result-display>
      </div>
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
body {
  font-size: 24px;
  /* font-family: 'Space Mono', monospace; */
}
</style>
