import axios from 'axios'

const API_BASE = 'http://localhost:3000/api/v1/pagos'

export const getPagos = () => axios.get(API_BASE)
export const crearPago = (pago) => axios.post(API_BASE, pago)
