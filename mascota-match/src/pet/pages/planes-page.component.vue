<script>
import {PlanService} from "@/bounded-context/services/plan.service.js";
import {MedicinaService} from "@/bounded-context/services/medicina.service.js";
import {UsuarioService} from "@/bounded-context/services/usuario.service.js";
import {Plan} from "@/bounded-context/model/plan.entity.js";
import {Medicina} from "@/bounded-context/model/medicina.entity.js";
import {Usuario} from "@/bounded-context/model/usuario.entity.js";
import PlanList from "@/bounded-context/components/plan-list.component.vue";

export default {
  name: "planes-page",
  components: {PlanList},
  data() {
    return {
      planes: [],
      errors: [],
      planesApi: new PlanService(),
    }
  },
  created() {
    this.getPlanes();
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
    }
  }
}
</script>

<template>
  <plan-list :planes="planes"></plan-list>
</template>

<style scoped>

</style>