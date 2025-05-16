<script>
import PlanList from "@/bounded-context/components/plan-list.component.vue";
import {MedicinaService} from "@/bounded-context/services/medicina.service.js";
import {Medicina} from "@/bounded-context/model/medicina.entity.js";
import MedicamentosList from "@/bounded-context/components/medicamentos-list.vue";

export default {
  name: "medicamentos-page.component",
  components: {MedicamentosList, PlanList},
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
            this.planes = [];
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