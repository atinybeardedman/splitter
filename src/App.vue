<template>
  <main h="100vh" display="flex" bg="gray-cyan-200">
    <section m="md:y-auto md:x-auto y-0" max-w="md:925px">
      <h1 font="700 tracking-0.75rem" p="y-2rem md:b-4rem" text="center uppercase dark-cyan" class="title">
        Spli
        <br />tter
      </h1>
      <div md="flex flex-row justify-evenly" bg="white" border="~ rounded-2xl white" p="1rem">
        <tip-form m="md:1rem" min-w="md:375px" w="md:45/100 full"></tip-form>
        <result-display m="md:1rem" min-w="md:375px" w="md:45/100 full"></result-display>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TipForm from './components/TipForm.vue';
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
