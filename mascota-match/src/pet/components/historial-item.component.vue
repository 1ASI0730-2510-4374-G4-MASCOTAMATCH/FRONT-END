<script>
import {MedicinaMascotaService} from "@/bounded-context/services/medicina-mascota.service.js";
import {MedicinaService} from "@/bounded-context/services/medicina.service.js";
import {MascotaService} from "@/bounded-context/services/mascota.service.js";
import {Historial} from "@/bounded-context/model/historial.entity.js";

export default {
  name: "historial-item",
  data() {
    return {

    }
  },
  props: {
    detalle: {
      type: Object,
      required: true
    }
  },
  created() {

  },
  methods:{

  }
}
</script>

<template>
  <tr>
    <td class="border p-2">{{ detalle.id }}</td>
    <td class="border p-2">{{ detalle.usuarioNombre }}</td>
    <td class="border p-2">{{ detalle.mascotaNombre }} ({{ detalle.mascotaEdad }} años)</td>
    <td class="border p-2">{{ detalle.medicinaNombre }} ({{ detalle.medicinaCantidad }})</td>
    <td class="border p-2">{{ detalle.descripcion }}</td>
  </tr>
</template>

<style scoped>

</style>