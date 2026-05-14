<script setup>
import { ref } from 'vue';
import LoginForm from './components/LoginForm.vue';

const message = ref('Hello Vue!');
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <LoginForm msg="Login Form"/>
</template>

<style scoped></style>
