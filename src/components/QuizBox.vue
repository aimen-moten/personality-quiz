<template>
    <div>
      <div>{{ cellID }}</div>
      <input type="number" min="1" max="4" v-model="numberInput" />
      <slot name="word"></slot>
    </div>
  </template>
  
  <script>
  import { useQuizStore } from '@/stores/quizStore';
  import { mapState, mapActions } from 'pinia';

  export default {
    props: ['cellID'],
    computed: {
      ...mapState(useQuizStore, ['getUserAnswerById']),
      numberInput: {
        get() {
          return useQuizStore.getUserAnswerByID(this.cellID);
        },
        set(newVal) {
          this.updateAnswer(this.cellID, newVal);
        }
      },
    },
    methods: {
      ...mapActions(useQuizStore, ['updateAnswer']),
    },
  };
  </script>
  