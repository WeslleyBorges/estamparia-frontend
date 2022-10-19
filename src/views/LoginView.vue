<script>
import api from '@/services'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
      login() {
        api.login(this.email, this.password)
        .then((response) => console.log('token', response))
      }
    }
}
</script>

<template>
<form @:submit.prevent="login">
  <div class="mb-3">
    <p id="login-title">Login</p>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">E-mail</label>
    <input type="email" class="form-control" id="email" v-model="email">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
</template>

<style>
#login-title {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
</style>