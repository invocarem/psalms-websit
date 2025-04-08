<script setup>
defineProps({
  psalm: {
    type: Object,
    default: () => null,
    required: true,
  },
})
</script>

<template>
  <div>
    <h1>Tada</h1>
  </div>
  <div class="psalm-display" v-if="psalm">
    <h2>
      Psalm {{ psalm.number }} <span v-if="psalm.section">({{ psalm.section }})</span>
    </h2>
    <h3 class="title">{{ psalm.title }}</h3>

    <div class="text-section">
      <h4>Latin Text</h4>
      <div class="verses">
        <p v-for="(verse, index) in psalm.text" :key="index">{{ verse }}</p>
      </div>
    </div>

    <div class="text-section english">
      <h4>English Translation</h4>
      <div class="verses">
        <p v-for="(verse, index) in psalm.englishText" :key="index">{{ verse }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.psalm-display {
  margin-top: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.title {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.text-section {
  margin-bottom: 2rem;
}

.text-section h4 {
  color: #42b883;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.verses p {
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.english {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}
</style>
