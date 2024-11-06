<template>
    <div class="results-view">
      <h1>Your Color Personality Results</h1>
  
      <div v-if="colorResult" class="result-card" :class="colorResult.toLowerCase()">
        <h2>{{ colorResult }}</h2>
        <p>{{ colorDescription }}</p>
      </div>
  
      <button @click="retakeQuiz" class="retake-button">Retake Quiz</button>
    </div>
  </template>
  
  <script>
  import { useQuizStore } from '@/stores/quizStore';
  import { mapState, mapActions } from 'pinia';
  
  export default {
    computed: {
      ...mapState(useQuizStore, ['colorResult', 'colorDescriptions']),
  
      colorDescription() {
        return this.colorDescriptions[this.colorResult] || "Discover what makes you unique!";
      },
    },
    methods: {
      ...mapActions(useQuizStore, ['clearResults']),
      
      retakeQuiz() {
        this.clearResults();
        this.$router.push('/color_personality_quiz');
      },
    },
  };
  </script>
  
  <style scoped>
  .results-view {
    text-align: center;
    margin: 2rem;
  }
  
  .result-card {
    padding: 1.5rem;
    border-radius: 10px;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 2rem auto;
    max-width: 500px;
  }
  
  .result-card.red {
    background-color: #e74c3c;
  }
  
  .result-card.blue {
    background-color: #3498db;
  }
  
  .result-card.green {
    background-color: #2ecc71;
  }
  
  .result-card.yellow {
    background-color: #f1c40f;
  }
  
  .retake-button {
    margin-top: 1.5rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .retake-button:hover {
    background-color: #2980b9;
  }
  </style>
  