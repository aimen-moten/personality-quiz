<template>
    <div>
      <h1>Color Personality Quiz</h1>
      <p>Please fill out each box in the table with a score between 1 and 4.</p>
      <table>
        <QuizRow v-for="row in 5" :key="row" :rowData="getQuizRowById(row)" />
      </table>
      <p v-if="!validateQuiz">Please fill out all boxes</p>
      <button @click="submitAnswers" :disabled="!validateQuiz">Get Results</button>
    </div>
  </template>
  
  <script>
  import QuizRow from './QuizRow.vue';
  import { useQuizStore } from '@/stores/quizStore';
  import { mapState, mapActions } from 'pinia';
  
  export default {
    components: { QuizRow },
    computed: {
      ...mapState(useQuizStore, ['getQuizRowById', 'getAllUserAnswer']),
      validateQuiz() {
        return Object.values(this.getAllUserAnswer).every(value => value !== 0);
      }
    },
    methods: {
      ...mapActions(useQuizStore, ['calculateColorScore', 'determineColorResult', 'clearResults']),
      submitAnswers() {
        this.calculateColorScore();
        this.determineColorResult();
        this.$router.push('/color_personality_results');
      }
    },
    created() {
      this.clearResults();
    }
  };
  </script>
  