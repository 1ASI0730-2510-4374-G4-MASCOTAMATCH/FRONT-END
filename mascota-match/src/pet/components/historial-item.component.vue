<script>

export default {
  name: "historial-item",
  data() {
    return {

    }
  },
  props: {
    detalle: {
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
  <tr>
    <td class="border p-2">{{ detalle.id }}</td>
    <td class="border p-2">{{ detalle.usuarioNombre }}</td>
    <td class="border p-2">{{ detalle.mascotaNombre }} ({{ detalle.mascotaEdad }} años)</td>
    <td class="border p-2">{{ detalle.medicinaNombre }} ({{ detalle.medicinaCantidad }})</td>
    <td class="border p-2">{{ detalle.descripcion }}</td>
  </tr>
</template>

<style scoped>

</style>