<script>
import {PlanService} from "@/plan/services/plan.service.js";
import {Plan} from "@/plan/model/plan.entity.js";
import PlanList from "@/plan/components/plan-list.component.vue";

export default {
  name: "planes-page",
  components: {PlanList},
  data() {
    return {
      planes: [],
      errors: [],
      userPlan: 0,
      planesApi: new PlanService(),
      usuarioId: localStorage.getItem("usuarioId"),  // Obtener el userId desde localStorage

    }
  },
  created() {
    this.getPlanes();
    this.getPlanByOwnerId();

  },
  methods: {
    getPlanes() {
      this.planesApi.getAll()
          .then((response) => {
            console.log(response)
            this.planes = response.data.map(plan => new Plan(plan));
          })
          .catch(e => {
            this.errors.push(e);
            this.planes = [];
          });
    },
    getPlanByOwnerId() {
      this.planesApi.getPlanByOwnerId(this.usuarioId)
          .then((response) => {
            this.userPlan = response.data.id;
          })
          .catch(e => {
            this.errors.push(e);
          });
    },
    actualizarUserPlan(userPlanId){
      this.userPlan = userPlanId;
    }
  }
}
</script>

<template>
  <section class="planPage">
    <div class="content-wrapper">
      Hola, este usuario tiene el plan: {{ userPlan }} <!-- O el nombre del plan que retorne tu API -->

      <plan-list :planes="planes" :userPlan="userPlan" @update-user-plan="actualizarUserPlan($event)"></plan-list>
    </div>
  </section>
</template>

<style scoped>
.planPage{
  background-size: cover;
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
}

.content-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 140px 10px 3.5rem 10px; /* top, right, bottom, left */
  gap: 2rem; /* Añade espacio entre la imagen y el contenido */
  height: 80%;
  max-width: 768px;
  width: 94%; /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */
  margin: 0 auto; /* Importante para tener margenes hasta el limite lateral de la pantalla, y asegurarse de que en los commponentes padres no hay limitaciones de max-widht */  /* Necesario para los margenes laterales, tienes que quitar el padding de los laterales */

}
</style>