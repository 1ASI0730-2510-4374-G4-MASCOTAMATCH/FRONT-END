<script>
import {Button as PvButton} from "primevue";
import {MascotaService} from "@/pet/services/mascota.service.js";
import MascotaItem from "@/pet/components/mascota-item.component.vue";
import {Mascota} from "@/pet/model/mascota.entity.js";

export default {
  name: "mascota-list",
  components: {MascotaItem, PvButton},
  data() {
    console.log("usuarioId desde localStorage:", localStorage.getItem("usuarioId"));
    return {
      mascotaService: new MascotaService(),
      mascotas: [],
      usuarioId: localStorage.getItem("usuarioId"),  // Obtener el userId desde localStorage
      mascotaId: localStorage.getItem("mascotaId"),
    }
  },
  created() {
    this.getMascotas();  // Obtener el plan cuando el componente se cree
  },
  methods: {
    getMascotas() {
      this.mascotaService.getPetsByUserId(this.usuarioId)
          .then((response) => {
            console.log(response);
            this.mascotas = response.data.map(m => new Mascota(m));  // Aquí el plan que recibes,  response.data.map(m => new Mascota(m))
          })
          .catch((error) => {
            console.error("Error al obtener las mascotas del usuario:", error);
          });
    },
    addMascota() {
      this.$router.push({ name: 'mascota-form' });
    },
    eliminarMascota(id) {
      this.mascotas = this.mascotas.filter(m => m.id !== id);
    },
    mascotaEliminada(id){
      this.eliminarMascota(id);
      this.getMascotas();
    },
    actualizarUserPlan(userPlanId){
      this.userPlan = userPlanId;
    },
    updatePet(petId){
      this.mascotaId = petId;
    }
  }
}
</script>

<template>
  <section class="MascotaScreen">
    <div class="content">
        Mascota Seleccionada: {{ mascotaId }} <!-- O el nombre del plan que retorne tu API -->
        <div class="content-wrapper">

              <mascota-item v-for="(mascota, index) in mascotas" :mascota="mascota"  @update-pet="updatePet($event)" @mascota-eliminada="mascotaEliminada($event)" :key="mascota.id" ></mascota-item>
        </div>
        <pv-button @click="addMascota"> Agregar mascota </pv-button>
        <div v-if="!mascotas.length" class="no-mascotas">
          No mascotas found.
        </div>
    </div>
  </section>
</template>

<style scoped>
.MascotaScreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 70px 10px 3.5rem 10px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 100%;
  max-width: 1000px;
  width: 100%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}

</style>