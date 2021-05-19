<template>
  <div id="app">
    <app-nav />
    <main class="main">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  height: 100%;
  color: #373737;
  font: 125% 'Mada', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: block;
}

body:before {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cstyle%3E.st0%7Bfill:none;stroke:%23e7e8eB;stroke-miterlimit:10%7D%3C/style%3E%3Cpath class='st0' d='M9.5 20h21M20 30.5v-21'/%3E%3C/svg%3E");
  background-size: 31px;
  background-position: right bottom;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 70vw;
  height: 60vh;
}

h2 {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 2rem;
  letter-spacing: 0.025em;
}

a {
  color: #3ba676;
}

a:hover,
a:focus {
  color: #2e815b;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

@media (min-width: 1024px) {
  h2 {
    font-size: 3rem;
  }
}

.main {
  width: 100%;
  padding: 0.8rem;
  flex-grow: 1;
}

@media (min-width: 768px) {
  .main {
    max-width: 1164px;
    margin: 4rem auto;
    padding: 0 1.6rem;
  }
}
</style>
