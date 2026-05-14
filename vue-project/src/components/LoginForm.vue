<script setup>
import { ref } from 'vue';
import { loggedUser } from '@/store/loggedUser';

const username = ref("");
const password = ref("");
const login = () => {
    console.log(username.value, password.value);
    loggedUser.username = username.value;
}
const props = defineProps({
    msg: String
})

</script>

<template>
    {{ msg }}
  <div v-if="loggedUser.username">
      <p>Welcome {{ loggedUser.username }}!</p>
  </div>
  <div v-else>
      <p>Please log in.</p>
      <input v-model="username" class="input input-bordered">
      <input v-model="password" type="password" class="input input-bordered">
      <button @click="login" class="btn btn-primary"> Login </button>
  </div>
</template>

<style scoped></style>
