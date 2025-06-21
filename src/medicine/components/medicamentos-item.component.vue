<script>
import { Button as PvButton, Card as PvCard } from "primevue";
import {ShoppingCartService} from "@/shoppingcart/services/shopping-cart.service.js";
import {Plan} from "@/plan/model/plan.entity.js";
import {ShoppingCart} from "@/shoppingcart/model/shopping-cart.entity.js";
import {ShoppingCartItem} from "@/shoppingcart/model/shopping-cart-item.entity.js";

export default {
  name: "medicamentos-item",
  components: { PvButton, PvCard },
  data() {
    return {
      cantidad: 0,
      shoppinCartItems: [],
      shoppingCartService: new ShoppingCartService()
    };
  },
  props: {
    medicamento: {
      type: Object,
      required: true
    },

  },
  methods: {
    increase() {
      this.cantidad++;
    },
    decrease() {
      if (this.cantidad > 0) {
        this.cantidad--;
      }
    },
    asignarMedicamento() {
      if (this.cantidad <= 0) {
        alert("Por favor, selecciona una cantidad antes de comprar.");
        return;
      }
        const item = new ShoppingCartItem({
          medicationId: this.medicamento.id,
          quantity: this.cantidad
        });

        this.$emit('add-item', item);
        alert("✔️ Medicamento comprado");
    }
  }
};
</script>

<template>
  <pv-card class="medicamento-card">
    <template #title>
      <h3>{{ medicamento.name }}</h3>
    </template>
    <template #content>
      <p>{{ medicamento.description }}</p>
      <p><strong>Precio: ${{ medicamento.price?.toFixed(2) ?? 'N/A' }}</strong></p>

      <div class="quantity-control">
        <pv-button @click="decrease">&#9664;</pv-button>
        <span>{{ cantidad }}</span>
        <pv-button @click="increase">&#9654;</pv-button>
      </div>

      <pv-button
          @click="asignarMedicamento"
          label="Comprar"
          icon="pi pi-shopping-cart"
          class="p-button-sm p-button-primary mt-2"
      />
    </template>
  </pv-card>
</template>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0.5rem 0;
}
</style>
