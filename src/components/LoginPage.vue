<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from "../axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data); // Manejar la respuesta, guardar token, redirigir, etc.
      } catch (error) {
        this.errorMessage = error.response.data.message || "An error occurred.";
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionales aquí */
</style>
