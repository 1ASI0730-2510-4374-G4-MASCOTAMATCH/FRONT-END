<script>
import { Medicina } from "@/medicine/model/medicina.entity.js";
import MedicamentosList from "@/medicine/components/medicamentos-list.component.vue";
import { MedicinaService } from "@/medicine/services/medicina.service.js";

export default {
  name: "medicamentos-page.component",
  components: { MedicamentosList },
  data() {
    return {
      medicamentos: [],
      errors: [],
      medicinaApi: new MedicinaService(),
      mascotaId: localStorage.getItem("mascotaId"),
    };
  },
  created() {
    this.getMedicamentos();
  },
  methods: {
    getMedicamentos() {
      this.medicinaApi.getAll()
          .then((response) => {
            console.log(response);
            console.log("aqui viene el medicamentos");
            this.medicamentos = response.data.map(m => new Medicina(m));
          })
          .catch(e => {
            this.errors.push(e);
          });
    }
  }
};
</script>

<template>
  <section class="medicamentosPage">
    <div class="content-wrapper">
      Mascota Seleccionada: {{ mascotaId }} <!-- O el nombre del plan que retorne tu API -->

      <medicamentos-list :medicamentos="medicamentos" />
    </div>
  </section>
</template>

<style scoped>

.medicamentosPage{
  background-size: cover;
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
}

.content-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 140px 10px 3.5rem 10px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 80%;
  max-width: 768px;
  width: 94%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}
</style>
