<template>
  <div id="app">
    <h1>vue-inner-image-zoom Demo</h1>
    <div style="margin-bottom: 30px;">
      <h2>Pan Example</h2>
      <inner-image-zoom
        src="/assets/unsplash.jpg"
        zoomSrc="/assets/unsplash-large.jpg"
        :fullscreenOnMobile="true"
      />
    </div>
    <div>
      <h2>Drag Example</h2>
      <inner-image-zoom
        src="/assets/unsplash.jpg"
        zoomSrc="/assets/unsplash-large.jpg"
        moveType="drag"
        :fullscreenOnMobile="true"
      />
    </div>
  </div>
</template>

<script>
import InnerImageZoom from '../../src/InnerImageZoom';

export default {
  name: 'App',
  components: {
    InnerImageZoom
  }
};
</script>
