<script>
import LoginRegister from "@/bounded-context/components/login-register.component.vue";
import PlanList from "@/bounded-context/components/plan-list.component.vue";
import MascotaList from "@/bounded-context/components/mascota-list.componente.vue";
import MascotaForm from "@/bounded-context/components/mascota-form.component.vue";
import MedicamentosItem from "@/bounded-context/components/medicamentos-item.component.vue";
import MedicamentosList from "@/bounded-context/components/medicamentos-list.vue";
import HistorialList from "@/bounded-context/components/historial-list.component.vue";
import FooterContent from "@/public/components/footer-content.component.vue";
import { useRoute } from 'vue-router'
import NavbarContent from "@/public/components/navbar-content.component.vue";

export default {
  name: "home-content",
  components: {
    NavbarContent,
    FooterContent,
    HistorialList,
    MedicamentosList, MedicamentosItem, MascotaForm, MascotaList, PlanList, LoginRegister},

  data(){
    return{
      route : useRoute()
    }
  }

}


</script>

<template>
  <!-- Solo muestra navbar y footer si NO estás en login -->
  <navbar-content v-if="route.name !== 'login'"></navbar-content>

  <router-view />

  <footer-content v-if="route.name !== 'login'"></footer-content>

</template>

<style scoped>
section {
  height: 1000px;
}
</style>
