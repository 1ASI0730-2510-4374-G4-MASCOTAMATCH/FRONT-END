<script>
import PlanItem from "@/plan/components/plan-item.component.vue";
import {UsuarioPlanService} from "@/plan/services/usuario-plan.service.js";
import {UsuarioPlan} from "@/plan/model/usuario-plan.entity.js";
import {Button as PvButton} from "primevue";

export default {
  name: "plan-list",
  components: {PvButton, PlanItem},
  data() {
    console.log("usuarioId desde localStorage:", localStorage.getItem("usuarioId"));
    return {
      usuarioPlanService: new UsuarioPlanService(),
      usuarioPlan: new UsuarioPlan({}),
      usuarioId: localStorage.getItem("usuarioId"),  // Obtener el userId desde localStorage
    }
  },
  props: {
    planes: {
      type: Array,
      required: true
    }
  },
  created() {

    this.actualizarPlan();  // Obtener el plan cuando el componente se cree
  },
  methods: {
    actualizarPlan() {
      console.log(this.usuarioId);
      if (this.usuarioId) {
        this.usuarioPlanService.getByUsuarioId(this.usuarioId)
            .then((response) => {
              console.log("aqui viene el usuario_plan");
              console.log(response);
              this.usuarioPlan = new UsuarioPlan(response.data[0]);  // Aquí el plan que recibes
            })
            .catch((error) => {
              console.error("Error al obtener el plan del usuario:", error);
            });
      } else {
        console.log("No se encontró el usuarioId.");
      }
    },
    onUpdatePlan(planId){
      this.usuarioPlanService.getByUsuarioId(this.usuarioId)
          .then(response => {
            const usuarioPlanActual = response.data[0]; // Como solo tiene un plan
            this.usuarioPlan = new UsuarioPlan(usuarioPlanActual);
            const idRegistro = this.usuarioPlan.id;

            const datosActualizados = {
              userId: Number(this.usuarioId),
              planId: Number(planId),
            };

            this.usuarioPlanService.update(idRegistro, datosActualizados)
                .then((response) => {
                  console.log("aqui viene el plan gg");
                  console.log(response);
                  this.usuarioPlan = new UsuarioPlan(response.data);
                })
                .catch((error) => {
                  console.error("Error al obtener el plan del usuario:", error);
                });
          })
    }
  }
}
</script>

<template>
  <section class="planList">
    <div v-if="usuarioPlan">
      Hola, este usuario tiene el plan: {{ usuarioPlan.planId }} <!-- O el nombre del plan que retorne tu API -->
    </div>

    <div class="content-wrapper">
        <plan-item v-for="(plan, index) in planes" :plan="plan"  @change-plan="onUpdatePlan($event)" :key="plan.id"></plan-item>
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