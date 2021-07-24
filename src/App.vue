<template>
  <main h="100vh" display="flex" bg="gray-cyan-200">
    <section m="lg:y-auto lg:x-auto y-0" max-w="lg:925px">
      <h1 font="700 tracking-0.75rem" p="y-2rem lg:b-4rem" text="center uppercase gray-cyan-500" class="title">
        Spli
        <br />tter
      </h1>
      <div lg="flex flex-row justify-evenly" bg="white" border="~ rounded-2xl white" p="md:1rem 2rem">
        <tip-form m="lg:1rem" min-w="lg:375px" w="lg:45/100 full"></tip-form>
        <result-display m="lg:1rem" min-w="lg:375px" w="lg:45/100 full"></result-display>
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
