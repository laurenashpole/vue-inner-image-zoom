<template>
  <div id="app">
    <h1>vue-inner-image-zoom Demo</h1>
    <div style="margin-bottom: 30px;">
      <h2>Spacer Example</h2>
      <inner-image-zoom
        src="/assets/unsplash3.jpg"
        zoomSrc="/assets/unsplash3-large.jpg"
        :fullscreenOnMobile="true"
        :width="750"
        :height="500"
        :hasSpacer="true"
      />
    </div>
    <div style="margin-bottom: 30px;">
      <h2>Pan Example</h2>
      <inner-image-zoom
        src="/assets/unsplash.jpg"
        zoomSrc="/assets/unsplash-large.jpg"
        :fullscreenOnMobile="true"
        :hideCloseButton="true"
        :hideHint="true"
      />
    </div>
    <div style="margin-bottom: 30px;">
      <h2>Drag Example</h2>
      <inner-image-zoom
        src="/assets/unsplash2.jpg"
        zoomSrc="/assets/unsplash2-large.jpg"
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
