<script>
import {MascotaService} from "@/pet/services/mascota.service.js";

export default {
  name: "mascota-item",
  data() {
    return {
      mascotaService: new MascotaService(),
      usuarioId: localStorage.getItem("usuarioId"),
      mascotaId: localStorage.getItem("mascotaId"),
    }
  },
  props: {
    mascota: {
      type: Object, //si tuviesemos el assembler, ya no seria object sino la instancia de la clase Mascota (Mascota)
      required: true
    }
  },
  emits: ['update-pet'],
  created() {
  },
  methods: {
    onClick() {
      this.usuarioId = localStorage.getItem("usuarioId");

    },
    deleteMascota() {
      // Validación rápida
      if (!this.mascota.id) {
        console.error("No se puede eliminar una mascota sin un ID válido.");
        return;
      }

      // Llamada al servicio
      this.mascotaService.delete(this.mascota.id)
          .then(() => {
            console.log("Mascota eliminada con éxito.");
            // Emitir evento para que el componente padre actualice la lista
            this.$emit("mascota-eliminada", this.mascota.id);
          })
          .catch((error) => {
            console.error("Error al eliminar la mascota:", error);
          });
    },
    selectMascota(){
      // Guardar en localStorage después de tener los datos
      localStorage.setItem('mascotaId', this.mascota.id);
      this.$emit('update-pet', this.mascota.id);
    }
  }
}
</script>

<template>
  <pv-card class="plan-card">
    <template #title>
      {{ mascota.name }}
    </template>
    <template #content>
      <p>Edad: {{ mascota.age }} años</p>
      <p>Raza: {{ mascota.breed }}</p>

      <pv-button @click="deleteMascota" label="Eliminar" icon="pi " class="p-button-sm p-button-danger mt-2" />

      <pv-button @click="selectMascota" label="Seleccionar" icon="pi" class="p-button-sm p-button-primary mt-2" />

    </template>
  </pv-card>
</template>

<style scoped>

</style>