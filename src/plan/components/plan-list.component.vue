<script>
import PlanItem from "@/plan/components/plan-item.component.vue";
import {Button as PvButton} from "primevue";
import {UsuarioService} from "@/user/services/usuario.service.js";
import {PlanService} from "@/plan/services/plan.service.js";

export default {
  name: "plan-list",
  components: {PvButton, PlanItem},
  data() {
    console.log("usuarioId desde localStorage:", localStorage.getItem("usuarioId"));
    return {
      usuarioApi: new UsuarioService(),
      planesApi: new PlanService(),
      newPlanId: 0,
      usuarioId: localStorage.getItem("usuarioId"),  // Obtener el userId desde localStorage
    }
  },
  emits: ['update-user-plan'],
  props: {
    planes: {
      type: Array,
      required: true
    },
    userPlan:{
      type: Number,
      required: false,
      default: 0
    }
  },
  created() {

  },
  methods: {
    actualizarPlan(planId) {
      this.usuarioApi.UpdatePlanId(this.usuarioId, planId)
          .then((response) => {
            console.log("Recibido desde plan-item:", planId);
            // Emitir el nuevo planId para que el padre lo actualice
            console.log(response.data.planId);
            const newPlanId = response.data.planId;
            this.$emit('update-user-plan', newPlanId);
          })
          .catch((error) => {
            console.error("Error al obtener el plan del usuario:", error);
          });
    }
  }
}
</script>

<template>
  <section class="planList">
    <div class="content-wrapper">
        <plan-item v-for="(plan, index) in planes" :plan="plan"  @change-plan="actualizarPlan($event)" :key="plan.id"></plan-item>
    </div>
  </section>
</template>

<style scoped>
.planList{
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 140px 10px 3.5rem 10px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 80%;
  max-width: 768px;
  width: 94%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}
</style>