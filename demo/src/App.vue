<template>
  <div id="app">
    <h1>vue-inner-image-zoom Demo</h1>
    <div style="margin-bottom: 30px;">
      <h2>Pan Example</h2>
      <inner-image-zoom
        zoomSrc="/assets/unsplash-large.jpg"
        :src="srcs[0]"
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
        :width="750"
        :height="500"
        :hasSpacer="true"
      />
    </div>
    <div style="margin-bottom: 30px;">
      <h2>Zoom on Hover Example</h2>
      <inner-image-zoom
        src="/assets/unsplash3.jpg"
        zoomSrc="/assets/unsplash3-large.jpg"
        zoomType="hover"
        :fullscreenOnMobile="true"
        :zoomScale="0.9"
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
  },
  props: ['srcs']
};
</script>
