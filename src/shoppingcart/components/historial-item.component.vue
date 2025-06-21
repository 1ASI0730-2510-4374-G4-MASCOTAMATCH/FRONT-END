
<script>

import {MedicineCart} from "@/shoppingcart/model/medicine-cart.entity.js";

export default {
  name: "historial-item",
  computed: {
    MedicineCart() {
      return MedicineCart
    }
  },
  data() {
    return {

    }
  },
  props: {
    historialItem: {
      type: Object,
      required: true
    }
  },
  created() {

  },
  methods:{

  }
}
</script>

<template>
  <tr v-for="(item, index) in historialItem.items" :key="index">
    <td class="border-1 border-gray-300 p-2 text-center">{{ historialItem.id }}</td>
    <td class="border-1 border-gray-300 p-2 text-center">{{ historialItem.petName }} ({{historialItem.petAge}} años)</td>
    <td class="border-1 border-gray-300 p-2 text-center">{{ item.name }}</td>
    <td class="border-1 border-gray-300 p-2 text-center">{{ item.description }}</td>
    <td class="border-1 border-gray-300 p-2 text-center">{{ item.quantity }}</td>
  </tr>
</template>

<style scoped>

</style>