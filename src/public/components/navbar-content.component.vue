<script>
export default {
  name: "navbar-content",
  data() {
    return {
      sidebarVisible: true, // o false si quieres que inicie oculto
    };
  },
  computed: {
    mostrarSidebar() {
      const ruta = this.$route.path;
      return ruta.startsWith('/admin') || ruta === '/planes' || ruta === '/mascotas'  || ruta === '/mascotas/agregar' || ruta === '/medicamentos' || ruta === '/historiales';
    }
  }
}
</script>

<template>
  <button v-if="mostrarSidebar" @click="sidebarVisible = !sidebarVisible" class="toggle-button">
    ☰
  </button>


  <div v-if="sidebarVisible  && mostrarSidebar" class="sidebar responsive-sidebar">
    <div class="sidebar-header">
    </div>

    <div class="sidebar-menu">
      <router-link to="/planes" class="menu-item">
        <span>💰</span>
        <p>Planes</p>
      </router-link>
      <router-link to="/mascotas" class="menu-item">
        <span>🐶</span>
        <p>Mascotas</p>
      </router-link>
      <router-link to="/mascotas/agregar" class="menu-item">
        <span>+</span>
        <p>Agregar Mascota</p>
      </router-link>
      <router-link to="/medicamentos" class="menu-item">
        <span>💉</span>
        <p>Medicamentos</p>
      </router-link>
      <router-link to="/historiales" class="menu-item">
        <span>🗎</span>
        <p>Historiales</p>
      </router-link>
    </div>
  </div>



  <nav class="navbar responsive-navbar">

    <nav class="navbar">
      <ul>
        <li><router-link to="/planes">Planes</router-link></li>
        <li><router-link to="/mascotas">Mascotas</router-link></li>
        <li><router-link to="/mascotas/agregar">Agregar Mascota</router-link></li>
        <li><router-link to="/medicamentos">Medicamentos</router-link></li>
        <li><router-link to="/historiales">Historial</router-link></li>
      </ul>
    </nav>

  </nav>
</template>

<style scoped>

.sidebar {
  position: absolute;
  width: 250px;
  background-color: #003D3B;
  color: white;
  height: 93vh;
  padding: 20px;
}
.toggle-button {
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1000;
}

/* Por defecto, mostrar el sidebar y ocultar el navbar */
.responsive-sidebar {
  display: block;
}
.responsive-navbar {
  display: none;
}

/* Cuando el ancho sea menor a px, oculta el sidebar y muestra el navbar */
@media (max-width: 1200px) {
  .responsive-sidebar {
    display: none;
  }

  .responsive-navbar {
    display: block;
  }

  .toggle-button {
    display: none;
  }
}

.sidebar-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
}

.logo-image {
  max-width: 180px;
  height: auto;
  object-fit: contain;
}

.sidebar-menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
  margin-bottom: 8px;
}
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}
.menu-item span {
  font-size: 20px;
  width: 24px;
  text-align: center;
}
.menu-item p {
  font-size: 16px;
  margin: 0;
  font-weight: 500;
}
.router-link-active {
  background-color: rgba(255, 255, 255, 0.25);
  font-weight: 600;
  border-left: 4px solid #ffeb3b;
}
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
