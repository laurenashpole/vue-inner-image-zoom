<template>
  <div id="app">
    <h1>vue-inner-image-zoom Demo</h1>
    <inner-image-zoom
      src="/assets/unsplash.jpg"
      zoomSrc="/assets/unsplash-large.jpg"
      :fullscreenOnMobile="true"
    />
  </div>
</template>

<script>
import InnerImageZoom from '../../src/InnerImageZoom';
import '../../src/InnerImageZoom/styles.css';

export default {
  name: 'App',
  components: {
    InnerImageZoom
  }
};
</script>
