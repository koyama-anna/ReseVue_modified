<template>
  <div class="login">
    <div class="form-item">
      <label for="email">Email</label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div class="form-item">
      <label for="password">Password</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div class="form-item">
      <button @click="handle()">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handle() {
      const token = (
        await axios.post("http://localhost:8000/api/login", {
          email: this.email,
          password: this.password,
        })
      ).data.token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // axiosのすべてのリクエストにトークンを付加する
      this.$router.push({ name: "theshopall" });
    },
  },
};
</script>

<style>
.form-item {
  margin: 0 auto;
  text-align: center;
}

label {
  display: block;
}

input {
  width: 50%;
  padding: 0.5em;
  font: inherit;
}

button {
  padding: 0.5em;
  margin: 1em;
}
</style>
