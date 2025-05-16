<script>
import {Button as PvButton, Card as PvCard} from "primevue";

export default {
  name: "plan-item",
  components: {PvButton, PvCard},
  data() {
    return {

      usuarioId: localStorage.getItem("usuarioId"),
    }
  },
  /**
   * @event cancel-requested - Emitted when the cancel action is triggered
   * @event save-requested - Emitted when the save action is triggered with the category item
   */
  emits: ['change-plan'],

  props: {
    plan: {
      type: Object, //si tuviesemos el assembler, ya no seria object sino la instancia de la clase Plan (Plan)
      required: true
    }
  },created() {
    console.log(this.plan);
    console.log("aqui lelgo la mascota");

  },
  methods: {
    onClick() {
      this.usuarioId = localStorage.getItem("usuarioId");
      this.$emit('change-plan', this.plan.id);
    }
  }
}

</script>

<template>
    <pv-card class="plan-card">
      <img :src="plan.imgUrl" :alt="plan.name" class="plan-image" />
      <template #title>
        {{ plan.name }}
      </template>
      <template #content>
        <p>{{ plan.description }}</p>
        <pv-button @click="onClick" label="Comprar" icon="pi pi-shopping-cart" class="p-button-sm p-button-primary mt-2" />
      </template>
    </pv-card>
</template>

<style scoped>

</style>