<script>
import HistorialItem from "@/bounded-context/components/historial-item.component.vue";
import {HistorialService} from "@/bounded-context/services/historial.service.js";
import {MedicinaMascotaService} from "@/bounded-context/services/medicina-mascota.service.js";
import {MedicinaMascota} from "@/bounded-context/model/medicina-mascota.entity.js";
import {Historial} from "@/bounded-context/model/historial.entity.js";
import {MedicinaService} from "@/bounded-context/services/medicina.service.js";
import {MascotaService} from "@/bounded-context/services/mascota.service.js";
import {UsuarioService} from "@/bounded-context/services/usuario.service.js";

export default {
  name: "historial-list",
  components: {HistorialItem},
  data() {
    return {
      medicinaService : new MedicinaService(),
      mascotaService : new MascotaService(),
      usuarioService : new UsuarioService(),
      medicinaMascotaService : new MedicinaMascotaService(),
      datosFinales: [],
      usuarioId: localStorage.getItem("usuarioId"),  // Obtener el userId desde localStorage

    }
  },
  created() {
   this.asignarMedicamento();
  },
  methods:{
    asignarMedicamento(){

      this.medicinaMascotaService.getAll().then(response => {
        this.medicinaMascotas = response.data.map(m => new MedicinaMascota(m));

        // Promesas para cada item
        const promesas = this.medicinaMascotas.map(item => {
          const usuarioPromise = this.usuarioService.getById(item.idUsuario);
          const mascotaPromise = this.mascotaService.getById(item.idMascota);
          const medicinaPromise = this.medicinaService.getById(item.idMedicina);

          // Esperar que las 3 se resuelvan
          return Promise.all([usuarioPromise, mascotaPromise, medicinaPromise])
              .then(([usuarioRes, mascotaRes, medicinaRes]) => {
                const usuario = usuarioRes.data;
                const mascota = mascotaRes.data;
                const medicina = medicinaRes.data;

                return {
                  id: item.id,
                  usuarioNombre: usuario.nombre,
                  mascotaNombre: mascota.nombre,
                  mascotaEdad: mascota.edad,
                  medicinaNombre: medicina.nombre,
                  medicinaCantidad: item.cantidad, // viene del MedicinaMascota
                  descripcion: medicina.descripcion
                };
              });
        });

        // Esperamos todas las promesas
        Promise.all(promesas)
            .then(resultados => {
              this.datosFinales = resultados;
              console.log("Datos enriquecidos:", this.datosFinales);
            })
            .catch(error => {
              console.error("Error al obtener detalles:", error);
            });

      })
    },
  }
}

</script>

<template>
  <table class="table-auto border-collapse border border-gray-300 w-full">
    <thead>
    <tr>
      <th class="border border-gray-300 p-2">ID</th>
      <th class="border border-gray-300 p-2">Nombre</th>
      <th class="border border-gray-300 p-2">Producto</th>
    </tr>
    </thead>
    <tbody>
    <historial-item
        v-for="detalle in datosFinales"
        :key="detalle.id"
        :detalle="detalle">
    </historial-item>
    </tbody>
  </table>
</template>

<style scoped>

</style>