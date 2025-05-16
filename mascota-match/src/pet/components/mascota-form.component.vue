<script>
import {Mascota} from "@/pet/model/mascota.entity.js";
import {MascotaService} from "@/pet/services/mascota.service.js";

export default {
  name: "mascota-form",
  data() {
    return {
      nombre: '',
      edad: 0,
      mascotaService: new MascotaService(),
      mascota: new Mascota({}),
      usuarioId: localStorage.getItem("usuarioId"),
    }
  },
  methods: {
    onSubmit() {
      console.log('Formulario enviado');  // 👈 Asegúrate de que se imprima
      console.log("Nombre:", this.nombre)
      console.log("Edad:", this.edad)

      //para que aparezca un menssaje flotante al submitearlo
      //if (this.mascota.nombre || this.mascota.edad) {
      //  this.$toast.add({severity:'warn', summary:'Validación', detail:'Por favor completa todos los campos'});
      //  return;
      //}

      if (this.mascota.nombre && this.mascota.edad) {
        console.log("por aqui creo que no pasa");
        const nuevaMascota = {
          nombre: this.mascota.nombre,
          edad: this.mascota.edad,
          usuarioId: Number(this.usuarioId)
        };

        this.mascotaService.create(nuevaMascota)
            .then((response) => {
              console.log("Mascota agregada con éxito:", response.data);
              // Actualiza la mascota local con lo que devuelve el backend (opcional)
              this.mascota=new Mascota(response.data);
              alert("✔️ Mascota registrada correctamente");
            })
            .catch((error) => {
              console.error("Error al agregar mascota:", error);
            });

      } else {
        alert('Por favor ingrese el nombre y la edad de la mascota.')
      }
    }
  }
}
</script>

<template>
  <section class="form-mascota">
    <div class="content-wrapper">
      <form @submit.prevent="onSubmit">
        <h1 class="tituloIS">Agregar Mascota</h1>

        <div class="campos">
          <label for="name">Nombre:</label>
          <input
              type="string"
              id="name"
              v-model="mascota.nombre"
              placeholder="Ingrese el nombre de su mascota"
          />
        </div>

        <div class="campos">
          <label for="age">Edad:</label>
          <input
              type="number"
              id="age"
              v-model="mascota.edad"
              placeholder="Ingrese la edad de su mascota"
          />
        </div>
        <div class="p-field">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </section>

</template>

<style scoped>
.form-mascota {
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
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
.campos{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.form-group label {
  margin-bottom: 10px; /* ← Aquí separas el label del input */
  font-weight: bold;
}
.form-group input {
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
form {
  flex:1;
  border: 3px solid #1b601d;
  background-color: #1f411a;
  border-radius: 20px;
  padding: 20px;
  max-width: 375px;
}

.tituloIS{
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: bold;
  color: #ffffff;
}

form div {
  margin-bottom: 10px;
  color: #ffffff;
}

input[type="name"], input[type="age"] {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

button {
  color: #223c09;
  display: block;
  background-color: #8db09c;
  padding: 10px 25px;
  border: 2px solid #6bdda0;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
}

button:hover {
  color: #eeeeee;
  background-color: #2bc545;
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