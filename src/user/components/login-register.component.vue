<script>
import {UsuarioService} from "@/user/services/usuario.service.js";
import {Usuario} from "@/user/model/usuario.entity.js";

export default {
  name: "login-register",
  data() {
    return {
      correo: '',
      password: '',
      usuarioService: new UsuarioService(),
      usuario: new Usuario({}),
      usuarioId: null,
    }
  },
  methods: {
    onSubmit() {
      console.log("Correo:", this.correo)
      console.log("Contraseña:", this.password)

      if (this.correo && this.password) {
        this.usuarioService.validateLogin(this.correo, this.password)
            .then(response => {
              console.log(response)
              if (response.data) {
                this.usuario = new Usuario(response.data);

                // Guardar en localStorage después de tener los datos
                localStorage.setItem('usuarioId', this.usuario.id);
                console.log(this.usuario.id);

                this.$router.push('/planes') // Redirige al plan si todo está bien

              }
            })




      } else {
        alert('Por favor ingrese su correo y contraseña.')
      }
    }
  }
}
</script>

<template>
  <section class="LoginScreen">
    <div class="content-wrapper">
      <form @submit.prevent="onSubmit">
        <h1 class="tituloIS">Iniciar Sesión</h1>

        <div>
          <label for="email">Correo Electrónico:</label>
          <input
              type="email"
              id="email"
              v-model="correo"
              placeholder="Ingrese su correo"
          />
        </div>

        <div>
          <label for="password">Contraseña:</label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Ingrese su contraseña"
          />
        </div>


          <button type="submit">Iniciar Sesión</button>


      </form>

      <!-- Cuadro de bienvenida -->
      <div class="user-box">
        <p>User1: erick@gmail.com</p>
        <p>Password1: 1234567</p>

        <p>User2: juan@gmail.com</p>
        <p>Password2: 1234567</p>
      </div>

    </div>
  </section>
</template>


<style scoped>
.LoginScreen {
  background-color: ghostwhite;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 140px 10px 3.5rem 10px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 80%;
  max-width: 768px;
  width: 94%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}

form {
  flex:1;
  border: 3px solid #808000;
  background-color:  #D3F2CE;
  border-radius: 20px;
  padding: 20px;
}

.tituloIS{
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
  color: #8B4513;
}

form div {
  margin-bottom: 10px;
  color: #8B4513;
}

input[type="email"], input[type="password"] {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

button {
  color: #8B4513;
  display: block;
  background-color: white;
  padding: 10px 25px;
  border: 2px solid #FFA726;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
}

button:hover {
  color: #8B4513;
  background-color: #FFA726;
  font-weight: bold;
  cursor: pointer;
}

.redirection{
  padding: 30px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  color: #FFA726;
}

</style>