<script>
import {MedicinaService} from "@/pet/services/medicina.service.js";
import {Medicina} from "@/pet/model/medicina.entity.js";
import MedicamentosItem from "@/pet/components/medicamentos-item.component.vue";

export default {
  name: "medicamentos-list",
  components: {MedicamentosItem},
  data() {
    console.log("usuarioId desde localStorage:", localStorage.getItem("usuarioId"));
    return {
      medicinaService: new MedicinaService(),
      medicina: new Medicina({}),
    }
  },
  props: {
    medicamentos: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log("aqui se crea el componente medicamentos");
  },
  methods: {
  }
}
</script>

<template>
  <section class="medicamentosList">

    <div class="content-wrapper">
      <medicamentos-item v-for="(medicamento, index) in medicamentos" :medicamento="medicamento"  :key="medicamento.id"></medicamentos-item>
    </div>

    <div v-if="!medicamentos.length" class="no-medicamentos">
      No medicamentos found.
    </div>
  </section>
</template>

<style scoped>

</style>