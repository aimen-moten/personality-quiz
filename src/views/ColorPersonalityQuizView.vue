<template>
    <div class="quiz-view">
      <h1>Color Personality Quiz</h1>
      <p>Rate each word from 1 (least describes you) to 4 (most describes you) in each box. Ensure that each number is used only once per row.</p>
  
      <table class="quiz-table">
        <!-- Use the correct store reference in Options API -->
        <QuizRow 
          v-for="row in 5" 
          :key="row" 
          :rowData="quizStore.getQuizRowByID(row)" 
        />
      </table>
  
      <p v-if="!isQuizValid" class="error-message">Please complete each row with unique ratings (1-4) before submitting.</p>
  
      <button @click="submitQuiz" :disabled="!isQuizValid" class="submit-button">Submit Quiz</button>
    </div>
  </template>
  
  <script>
  import QuizRow from '../components/QuizRow.vue';
  import { useQuizStore } from '@/stores/quizStore';
  
  export default {
    components: { QuizRow },
    data() {
      return {
        quizStore: useQuizStore(),
      };
    },
    computed: {
      isQuizValid() {
        const allFilled = Object.values(this.quizStore.getAllUserAnswer).every(value => value !== 0);
        const rowsValid = [1, 2, 3, 4, 5].every(rowNum => {
          const rowAnswers = Object.values(this.quizStore.getQuizRowByID(rowNum));
          return new Set(rowAnswers).size === rowAnswers.length && rowAnswers.length === 4;
        });
        return allFilled && rowsValid;
      },
    },
    methods: {
      submitQuiz() {
        if (this.isQuizValid) {
          this.quizStore.calculateColorScore();
          this.quizStore.determineColorResult();
          this.$router.push('/color_personality_results');
        }
      },
    },
    created() {
      this.quizStore.clearResults(); // Clear previous answers when the component is created
    },
  };
  </script>
  
  <style scoped>
  .quiz-view {
    text-align: center;
    margin: 2rem;
  }
  
  .quiz-table {
    margin: 1.5rem auto;
    border-collapse: collapse;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
  }
  
  .submit-button {
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  