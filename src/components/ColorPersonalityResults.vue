<template>
    <div>
      <h1>Your Color Personality Result</h1>
      <div v-if="Array.isArray(colorWinner)">
        <p>You have a tie between multiple colors!</p>
        <ColorMeaning v-for="color in colorWinner" :key="color" :color="color" :shortDesc="getColorMeaningById(color).shortDesc" :adj="getColorMeaningById(color).adjectives" :characteristics="getColorMeaningById(color).characteristics" :sentence="getColorMeaningById(color).sentence" />
      </div>
      <div v-else>
        <ColorMeaning :color="colorWinner" :shortDesc="getColorMeaningById(colorWinner).shortDesc" :adj="getColorMeaningById(colorWinner).adjectives" :characteristics="getColorMeaningById(colorWinner).characteristics" :sentence="getColorMeaningById(colorWinner).sentence" />
      </div>
      <button @click="retakeQuiz">Retake Quiz</button>
    </div>
  </template>
  
  <script>
  import ColorMeaning from './ColorMeaning.vue';
  import { useQuizStore } from '@/stores/quizStore';
  import { mapState, mapActions } from 'pinia';
  
  export default {
    components: { ColorMeaning },
    computed: {
      ...mapState(useQuizStore, ['getColorsAnswerKey', 'getUserColorScoreById', 'getUserColorWinner', 'getColorMeaningByColor']),
      colorWinner() {
        return this.getUserColorWinner;
      },
      getColorMeaningById() {
        return this.getColorMeaningByColor;
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
  