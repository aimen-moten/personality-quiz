<template>
  <div id="app" class="wrapper">
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/all_color_meaning">All Color Meanings</RouterLink>
        <RouterLink to="/color_personality_quiz">Personality Quiz</RouterLink>
      </nav>
      <RouterView />
  </header>
</div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "App",
  components: {
    RouterLink, RouterView
  }
}
</script>
