<script>
import MedicamentosItem from "@/medicine/components/medicamentos-item.component.vue";
import {ShoppingCartService} from "@/shoppingcart/services/shopping-cart.service.js";
import {ShoppingCart} from "@/shoppingcart/model/shopping-cart.entity.js";
import {Plan} from "@/plan/model/plan.entity.js";

export default {
  name: "medicamentos-list",
  components: { MedicamentosItem },
  data() {
    return {
      usuarioId: localStorage.getItem("usuarioId"),
      mascotaId: localStorage.getItem("mascotaId"),
      shoppingCart: new ShoppingCart({}),
      shoppingCartApi: new ShoppingCartService()
    };
  },
  props: {
    medicamentos: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.shoppingCart.ownerId = this.usuarioId;
    this.shoppingCart.petId = this.mascotaId;
  },
  methods: {
    addToCart(item){
      this.shoppingCart.items.push(item);
      this.UpdateCart();
    },
    UpdateCart(){
      //agrega a la base de datos del purchasecart
      console.log(this.shoppingCart);
      this.shoppingCartApi.create(this.shoppingCart)
          .then((response) => {
            console.log(response)
            this.shoppingCart.items = [];
          });
    }
  }
};
</script>

<template>
  <section class="medicamentosList">
    <div class="content-wrapper">
      <medicamentos-item
          v-for="medicamento in medicamentos"
          :key="medicamento.id"
          :medicamento="medicamento"
          @add-item="addToCart($event)"
      />
    </div>

    <div v-if="!medicamentos.length" class="no-medicamentos">
      No medicamentos found.
    </div>

  </section>
</template>

<style scoped>

</style>
