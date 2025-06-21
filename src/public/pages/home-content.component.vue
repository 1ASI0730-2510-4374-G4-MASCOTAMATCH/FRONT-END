<script>
import LoginRegister from "@/user/components/login-register.component.vue";

import MascotaList from "@/pet/components/mascota-list.componente.vue";
import MascotaForm from "@/pet/components/mascota-form.component.vue";
import MedicamentosItem from "@/medicine/components/medicamentos-item.component.vue";
import HistorialList from "@/shoppingcart/components/historial-list.component.vue";
import FooterContent from "@/public/components/footer-content.component.vue";
import NavbarContent from "@/public/components/navbar-content.component.vue";
import MedicamentosList from "@/medicine/components/medicamentos-list.component.vue";
import PlanList from "@/medicine/components/medicamentos-list.component.vue";

import { useRoute } from 'vue-router'

export default {
  name: "home-content",
  components: {
    NavbarContent,
    FooterContent,
    HistorialList,
    MedicamentosList,
    MedicamentosItem,
    MascotaForm,
    MascotaList,
    PlanList,
    LoginRegister},

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
  height: 770px;
}
</style>
