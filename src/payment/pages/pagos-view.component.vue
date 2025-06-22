<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-2xl mb-4">Pagos</h2>

    <form @submit.prevent="registrarPago" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Seleccione lo que desea pagar:</label>
        <select v-model="tipoPagoSeleccionado" class="p-inputtext w-full" required>
          <option disabled value="">Elige aquí</option>
          <option v-for="plan in planes" :key="plan.id" :value="plan.id">
            {{ plan.name }}
          </option>
          <option value="carrito">Carrito de Compras</option>
        </select>
      </div>

      <div>
        <label class="block mb-1 font-semibold">Método de pago:</label>
        <select v-model="nuevoPago.metodo" class="p-inputtext w-full" required>
          <option disabled value="">Selecciona un método</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="paypal">PayPal</option>
          <option value="yape">Yape</option>
          <option value="plin">Plin</option>
        </select>
      </div>

      <div v-if="nuevoPago.metodo === 'tarjeta'">
        <input v-model="tarjeta.numero" placeholder="Número de tarjeta" class="p-inputtext w-full mb-2" required />
        <input v-model="tarjeta.fecha" placeholder="Fecha vencimiento (MM/AA)" class="p-inputtext w-full mb-2" required />
        <input v-model="tarjeta.cvc" placeholder="CVC" class="p-inputtext w-full" required />
      </div>

      <div v-if="nuevoPago.metodo === 'paypal'">
        <input v-model="paypalEmail" placeholder="Correo de PayPal" class="p-inputtext w-full" required />
      </div>

      <div v-if="nuevoPago.metodo === 'yape' || nuevoPago.metodo === 'plin'">
        <input v-model="numeroCelular" placeholder="Número de celular" class="p-inputtext w-full" required />
      </div>

      <button type="submit" class="p-button w-full">Confirmar y Pagar</button>
    </form>

    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-2">Historial de Pagos</h3>
      <ul v-if="pagos.length">
        <li v-for="pago in pagos" :key="pago.id" class="mb-2 border-b pb-2">
          <p><strong>Pago:</strong> {{ obtenerNombrePago(pago) }}</p>
          <p><strong>Método:</strong> {{ formatoMetodo(pago.metodo) }}</p>
          <p><strong>Monto:</strong> S/. {{ pago.monto?.toFixed(2) ?? '0.00' }}</p>
          <p><strong>Fecha:</strong> {{ new Date(pago.fecha).toLocaleString() }}</p>
        </li>
      </ul>
      <p v-else class="text-gray-500">No hay pagos registrados aún.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const usuarioId = 1
const planes = ref([])
const pagos = ref([])
const tipoPagoSeleccionado = ref('')
const nuevoPago = ref({ usuarioId, metodo: '' })
const tarjeta = ref({ numero: '', fecha: '', cvc: '' })
const paypalEmail = ref('')
const numeroCelular = ref('')

// Reiniciar campos dinámicos al cambiar método de pago
watch(() => nuevoPago.value.metodo, () => {
  tarjeta.value = { numero: '', fecha: '', cvc: '' }
  paypalEmail.value = ''
  numeroCelular.value = ''
})

async function cargarPlanes() {
  try {
    const res = await axios.get('http://localhost:3000/api/v1/planes')
    planes.value = res.data
    console.log('🚀 Planes cargados:', planes.value)
  } catch (err) {
    console.error('Error cargando planes:', err)
  }
}

async function cargarPagos() {
  try {
    const res = await axios.get('http://localhost:3000/api/v1/pagos')
    pagos.value = res.data.filter(p => p.usuarioId === usuarioId)
    console.log('🚀 Pagos cargados:', pagos.value)
  } catch (err) {
    console.error('Error cargando pagos:', err)
  }
}

async function registrarPago() {
  if (!tipoPagoSeleccionado.value || !nuevoPago.value.metodo) {
    alert('Por favor, completa selección y método de pago.')
    return
  }

  let monto = 0
  let planId = null
  let tipoPago = ''

  if (tipoPagoSeleccionado.value === 'carrito') {
    tipoPago = 'carrito'
    const carrito = JSON.parse(localStorage.getItem('shopping_cart') || '[]')
    monto = carrito.reduce((a, i) => a + i.precio * i.cantidad, 0)
  } else {
    tipoPago = 'plan'
    planId = Number(tipoPagoSeleccionado.value)
    monto = 39.9
  }

  const detalles =
      nuevoPago.value.metodo === 'tarjeta' ? tarjeta.value :
          nuevoPago.value.metodo === 'paypal' ? { email: paypalEmail.value } :
              { celular: numeroCelular.value }

  const payload = {
    usuarioId,
    planId,
    tipoPago,
    metodo: nuevoPago.value.metodo,
    monto,
    detalles,
    fecha: new Date().toISOString()
  }
  console.log('Registrando pago:', payload)

  try {
    await axios.post('http://localhost:3000/api/v1/pagos', payload)
    alert('Pago registrado')
    resetFormulario()
    await cargarPagos()
  } catch (err) {
    console.error('Error al registrar pago:', err)
    alert('Falló el registro del pago')
  }
}

function resetFormulario() {
  tipoPagoSeleccionado.value = ''
  nuevoPago.value.metodo = ''
  tarjeta.value = { numero: '', fecha: '', cvc: '' }
  paypalEmail.value = ''
  numeroCelular.value = ''
}

function obtenerNombrePago(pago) {
  if (pago.tipoPago === 'carrito' || pago.planId === null) return 'Carrito de Compras'
  const p = planes.value.find(x => x.id === pago.planId)
  return p ? p.name : 'Desconocido'
}

function formatoMetodo(m) {
  return { tarjeta: 'Tarjeta', paypal: 'PayPal', yape: 'Yape', plin: 'Plin' }[m] || 'Otro'
}

onMounted(async () => {
  await cargarPlanes()
  await cargarPagos()
})
</script>

<style scoped>
.p-inputtext { padding: .5rem; border: 1px solid #ccc; border-radius: .25rem }
.p-button { background: #3b82f6; color: white; padding: .5rem; border-radius: .25rem; font-weight: bold; cursor: pointer }
</style>
