
<script>
import HistorialItem from "@/shoppingcart/components/historial-item.component.vue";
import {ShoppingCartService} from "@/shoppingcart/services/shopping-cart.service.js";
import {Historial} from "@/shoppingcart/model/historial.entity.js";

export default {
  name: "historial-list",
  components: {HistorialItem},
  data() {
    return {
      usuarioId: localStorage.getItem("usuarioId"),  // Obtener el userId desde localStorage
      mascotaId: localStorage.getItem("mascotaId"),
      shoppingCartApi: new ShoppingCartService(),
      historial: [],

    }
  },
  created() {
   this.showHistorial();
  },
  methods:{
    showHistorial(){
      this.shoppingCartApi.getByOwnerIdAndPetId(this.usuarioId, this.mascotaId)
          .then((response) => {
            console.log(response)
            this.historial = response.data.map(h => new Historial(h));  // Aquí el plan que recibes,  response.data.map(m => new Mascota(m))

            console.log(this.historial);
          })
          .catch((error) => {
            console.error("Error al obtener el historial:", error);
          });
    }
  }
}

</script>

<template>
  <section class="HistorialScreen">
    <div class="content-wrapper">
      <table class="table-auto border-collapse w-full">
        <thead>
        <tr>
          <th class="border-1 border-gray-300 p-2">ID</th>
          <th class="border-1 border-gray-300 p-2">Mascota</th>
          <th class="border-1 border-gray-300 p-2" colspan="2">Medicamentos</th>
          <th class="border-1 border-gray-300 p-2">Cantidad</th>
        </tr>
        </thead>
        <tbody class="table-auto border-collapse border border-gray-300 w-full">
        <historial-item
            v-for="historialItem in historial"
            :key="historialItem.id"
            :historialItem="historialItem">
        </historial-item>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.HistorialScreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.content-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 140px 10px 3.5rem 10px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 100%;
  max-width: 1700px;
  width: 100%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}
</style>