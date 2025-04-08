<script setup>
import { ref } from 'vue';
import psalmsData from '@/data/psalms.json';
const emit = defineEmits(['search-result']); // Define the event
const psalmNumber = ref(1);
const section = ref('');
const currentPsalm = ref(null);

const searchPsalm = () => {
   try {
    console.log('Searching for:', psalmNumber.value, section.value);
    
    currentPsalm.value = psalmsData.psalms.find(p => {
      const matchesNumber = p.number === psalmNumber.value;
      const matchesSection = !section.value || 
        (p.section?.toLowerCase() === section.value.toLowerCase());
      
      console.log(`Psalm ${p.number}:`, matchesNumber, matchesSection);
      return matchesNumber && matchesSection;
    });
    emit('search-result', currentPsalm); // Emit the event with data
    console.log('Found psalm:', currentPsalm.value);
  } catch (error) {
    console.error('Search error:', error);
  }
};
</script>

<template>
  <div class="search-container">
    <div class="input-group">
      <label>Psalm Number:</label>
      <input 
        type="number" 
        v-model.number="psalmNumber" 
        min="1" 
        :max="psalmsData.psalms.length"
      >
    </div>
    
    <div class="input-group">
      <label>Section (optional):</label>
      <input 
        type="text" 
        v-model.trim="section"
        placeholder="e.g., 'A'"
      >
    </div>

    <button @click="searchPsalm" class="search-btn">
      Show Psalm
    </button>
  </div>
</template>

<style scoped>
.search-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #359a6d;
}
</style>
