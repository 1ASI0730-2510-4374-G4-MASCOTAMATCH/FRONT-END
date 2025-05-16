<script>
import {Medicina} from "@/pet/model/medicina.entity.js";
import MedicamentosList from "@/pet/components/medicamentos-list.vue";
import {MedicinaService} from "@/pet/services/medicina.service.js";

export default {
  name: "medicamentos-page.component",
  components: {MedicamentosList},
  data() {
    return {
      medicamentos: [],
      errors: [],
      medicinaApi: new MedicinaService(),
    }
  },
  created() {
    this.getMedicamentos();
  },
  methods: {
    getMedicamentos() {
      this.medicinaApi.getAll()
          .then((response) => {
            console.log(response)
            console.log("aqui viene el medicamentos");
            this.medicamentos = response.data.map(m => new Medicina(m));
          })
          .catch(e => {
            this.errors.push(e);
          });
    }
  }
}
</script>

<template>
  <medicamentos-list :medicamentos="medicamentos" ></medicamentos-list>

</template>

<style scoped>

</style>