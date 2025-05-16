<script>
import {Button as PvButton, Card as PvCard} from "primevue";
import {MedicinaService} from "@/bounded-context/services/medicina.service.js";
import {Medicina} from "@/bounded-context/model/medicina.entity.js";
import {MedicinaMascota} from "@/bounded-context/model/medicina-mascota.entity.js";
import {MedicinaMascotaService} from "@/bounded-context/services/medicina-mascota.service.js";

export default {
  name: "medicamentos-item",
  components: {PvButton, PvCard},
  data() {
    return {
      medicinaService: new MedicinaService(),
      medicinaMascotaService : new MedicinaMascotaService(),
      medicina: new Medicina({}),
      usuarioId: localStorage.getItem("usuarioId"),
      mascotaId: localStorage.getItem("mascotaId"),
      cantidad: 0
    }
  },

  props: {
    medicamento: {
      type: Medicina, //si tuviesemos el assembler, ya no seria object sino la instancia de la clase Plan (Plan)
      required: true
    }
  },
  created() {
    console.log(this.medicamento);
    console.log("aqui lelgo la mascota");
    console.log('Medicina recibida:', this.medicamento);
  },
  mounted() {
    console.log(this.medicamento);
    console.log("aqui lelgo la mascota");
    console.log('Medicina recibida:', this.medicamento);
  },
  methods: {
    increase() {
      this.cantidad++;
    },
    decrease() {
      if (this.cantidad > 0) {
        this.cantidad--;
      }
    },
    asignarMedicamento(){
      const medicinaAsignada = new MedicinaMascota({
        nombre: this.medicamento.nombre,
        descripcion: this.medicamento.descripcion,
        idUsuario: this.usuarioId,
        idMascota: this.mascotaId,
        idMedicina: this.medicamento.id,
        cantidad: this.cantidad,
      });

      this.medicinaMascotaService.create(medicinaAsignada)
          .then(() => {
            alert("✔️ Medicina registrada correctamente");
          })
          .catch((error) => {
            console.error("Error al asignar medicina:", error);
            alert("❌ Ocurrió un error al registrar la medicina");
          });
    },
  }
}

</script>

<template>
  <pv-card class="medicamento-card">

    <template #title>
      <h3>{{ medicamento.nombre }}</h3>
    </template>
    <template #content>
      <p>{{ medicamento.descripcion }}</p>
      <div class="quantity-control">
        <pv-button @click="decrease">&#9664;</pv-button>
        <span>{{ cantidad }}</span>
        <pv-button @click="increase">&#9654;</pv-button>

      </div>
      <pv-button @click="asignarMedicamento" label="Comprar" icon="pi pi-shopping-cart" class="p-button-sm p-button-primary mt-2" />
    </template>

  </pv-card>
</template>

<style scoped>

</style>