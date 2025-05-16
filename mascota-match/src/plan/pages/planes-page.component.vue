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