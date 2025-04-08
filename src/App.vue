<script setup>
import { ref } from 'vue';
import PsalmSearch from './components/PsalmSearch.vue';
import PsalmDisplay from './components/PsalmDisplay.vue';

const currentPsalm = ref(null);
</script>

<template>
  <header>
    <h1>Psalms Viewer</h1>
  </header>

  <main>
    <PsalmSearch @search-result="(result) => currentPsalm = result" />
    <PsalmDisplay :psalm="currentPsalm" />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}
</style>
