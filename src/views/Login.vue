<template>
  <div>
    <h1>Login</h1>
    <div class="card login">
      <p>Correo Electronico:</p>
      <input type="email" name="mail" id="email" placeholder="Ejemplo@gmail.com" v-model="usuario" />
      <p>Contraseña:</p>
      <input
        type="password"
        name="pass"
        id="password"
        placeholder="Contraseña"
        v-model="contrasena"
      />
      <button @click="login()">Login</button>
    </div>
    
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          user => this.$router.replace("home"),
          error => console.log(error)
        );
      email - password.html;
    }
  }
};
</script>


<style scoped>
.login {
  background-color: #42b983;
  color: #2c3e50;
  font-weight: bold;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  padding-bottom: 25px;
  margin: 0 10%;
}
.login input {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
}
.login button {
  background-color: #2c3e50;
  color: #42b983;
  border-radius: 5px;
  display: block;
  font-weight: bold;
  padding: 1% 10%;
  margin: 5% 34%;
}
</style>