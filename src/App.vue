<template>
  <div id="app">
    <main className="main">
      <h1>
        Vue Inner Image Zoom<br />has moved to
        <a href="https://innerimagezoom.com/">innerimagezoom.com</a>
      </h1>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  font: 125% 'Frank Ruhl Libre', serif;
  font-weight: 300;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cstyle%3E.st0%7Bfill:none;stroke:%23e7e8eB;stroke-miterlimit:10%7D%3C/style%3E%3Cpath class='st0' d='M9.5 20h21M20 30.5v-21'/%3E%3C/svg%3E");
  background-size: 31px;
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

@media (min-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}

.main {
  width: 100%;
  padding: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .main {
    max-width: 768px;
    margin: 0 auto;
    padding: 3rem;
  }
}
</style>
