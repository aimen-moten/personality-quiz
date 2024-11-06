<template>
    <tr>
      <QuizBox v-for="(value, key) in rowData" :key="key" :cellID="key">
        <template v-slot:word>
          <ul>
            <li v-for="word in value" :key="word">{{ word }}</li>
          </ul>
        </template>
      </QuizBox>
    </tr>
  </template>
  
  <script>
  import QuizBox from './QuizBox.vue';
  
  export default {
    components: { QuizBox },
    props: ['rowData'],
  };
  </script>
  