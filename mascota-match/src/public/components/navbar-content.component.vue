<script>
export default {
  name: "navbar-content"
}
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/planes">Planes</router-link></li>
      <li><router-link to="/mascotas">Mascotas</router-link></li>
      <li><router-link to="/mascotas/agregar">Agregar Mascota</router-link></li>
      <li><router-link to="/medicamentos">Medicamentos</router-link></li>
      <li><router-link to="/historiales">Historial</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 10px 20px;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.navbar a.router-link-active {
  border-bottom: 2px solid #42b983;
}
</style>