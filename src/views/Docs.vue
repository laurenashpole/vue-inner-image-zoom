<template>
  <div class="docs">
    <h2 class="docs__heading">Docs</h2>

    <nav class="docs__nav">
      <router-link
        v-bind:to="{ path: 'docs', hash: '#installation' }"
        v-on:click.native="scrollToHash('#installation')"
      >
        Installation
      </router-link>
      <router-link
        v-bind:to="{ path: 'docs', hash: '#styling' }"
        v-on:click.native="scrollToHash('#styling')"
      >
        Styling
      </router-link>
      <router-link
        v-bind:to="{ path: 'docs', hash: '#usage' }"
        v-on:click.native="scrollToHash('#usage')"
        >Usage</router-link
      >
      <router-link
        v-bind:to="{ path: 'docs', hash: '#props' }"
        v-on:click.native="scrollToHash('#props')"
        >Props</router-link
      >
    </nav>

    <section class="docs__content">
      <div>
        <h3 id="installation">Installation</h3>
        <h4>NPM</h4>
        <pre class="docs__code"><code v-pre>npm install vue-inner-image-zoom</code></pre>
        <h4>Yarn</h4>
        <pre class="docs__code"><code v-pre>yarn add vue-inner-image-zoom</code></pre>
      </div>

      <div>
        <h3 id="styling">Styling</h3>
        <h4>Import</h4>
        <p>Import the CSS from your node_modules directory:</p>
        <pre
          class="docs__code"
        ><code v-pre>import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';</code></pre>
      </div>

      <div>
        <h3 id="usage">Usage</h3>
        <p>Import the component and include in your template:</p>

        <pre
          class="docs__code"
        ><code v-pre>import InnerImageZoom from 'vue-inner-image-zoom';<br /><br />...<br /><br />export default &lcub;<br />&nbsp;&nbsp;components: &lcub;<br />&nbsp;&nbsp;&nbsp;&nbsp;'inner-image-zoom': InnerImageZoom<br />&nbsp;&nbsp;&rcub;<br/>&rcub;<br /><br />...<br /><br />&lt;inner-image-zoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" /&gt;</code></pre>
      </div>

      <div>
        <h3 id="props">Props</h3>

        <ul class="docs__props-list">
          <li><b>src (String): </b>Required. URL for the original image.</li>
          <li><b>srcSet (String): </b>Default srcset attribute for a responsive original image.</li>
          <li><b>sizes (String): </b>Default sizes attribute for use with srcset.</li>
          <li>
            <b>sources (Array): </b>A list of image sources for using the picture tag to serve the
            appropriate original image (see below for more details).
          </li>
          <li><b>width (Number): </b>Width attribute for original image.</li>
          <li><b>height (Number): </b>Height attribute for original image.</li>
          <li>
            <b>hasSpacer (Boolean): </b>Default false. If true, gets the original image's aspect
            ratio based on the width and height props and creates a spacer to prevent cumulative
            layout shift.
          </li>
          <li>
            <b>zoomSrc (String): </b>URL for the larger zoom image. Falls back to original image src
            if not defined.
          </li>
          <li>
            <b>zoomScale (Number): </b>Default 1. Multiplied against the natural width and height of
            the zoomed image. This will generally be a decimal (example, 0.9 for 90%).
          </li>
          <li>
            <b>zoomPreload (Boolean): </b>Default false If set to true, preloads the zoom image
            instead of waiting for mouseenter.
          </li>
          <li><b>alt (String): </b>Alternative text for the original image.</li>
          <li>
            <b>moveType (String): </b>Default pan. Accepts pan or drag options. The user behavior
            for moving zoomed images on non-touch devices.
          </li>
          <li>
            <b>zoomType (String): </b>Default click. Accepts click or hover options. The trigger for
            zooming images.
          </li>
          <li>
            <b>fadeDuration (Number): </b>Default 150. Fade transition time in milliseconds. If
            zooming in on transparent images, set this to 0 for best results.
          </li>
          <li>
            <b>fullscreenOnMobile (Boolean): </b>Default false. Enables fullscreen zoomed image on
            touch devices below a specified breakpoint.
          </li>
          <li>
            <b>mobileBreakpoint (Number): </b>Default 640. The maximum breakpoint for fullscreen
            zoom image when fullscreenOnMobile is true.
          </li>
          <li>
            <b>hideCloseButton (Boolean): </b>Default false. Hides the close button on touch
            devices. If set to true, zoom out is triggered by tap.
          </li>
          <li><b>hideHint (Boolean): </b>Default false. Hides the magnifying glass hint.</li>
          <li><b>className (String): </b>Custom classname for styling the component.</li>
          <li><b>afterZoomIn (Function): </b>Function to be called after zoom in.</li>
          <li><b>afterZoomOut (Function): </b>Function to be called after zoom out.</li>
        </ul>

        <h4>Sources</h4>
        <p>
          This prop accepts an array of objects which it uses to create a picture tag and source
          elements. The component looks for the following optional properties and you can find
          additional details
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
          >
            here</a
          >:
        </p>

        <ul class="docs__props-list">
          <li><b>srcSet (String): </b>Srcset attribute for source tag.</li>
          <li><b>sizes (String): </b>Sizes attribute for source tag.</li>
          <li>
            <b>media (String): </b>
            An attribute containing a media condition for use with the srcset.
          </li>
          <li>
            <b>type (String): </b>An image MIME type. This is useful for using newer formats like
            WebP.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Docs',
  mounted: function() {
    document.body.style.height = 'auto';

    if (this.$route.hash) {
      setTimeout(() => this.scrollToHash(this.$route.hash.replace('#', '')), 1);
    }
  },
  destroyed: function() {
    document.body.style.height = '100%';
  },
  methods: {
    scrollToHash: function(hashbang) {
      window.scroll(0, document.getElementById(hashbang.replace('#', '')).offsetTop);
    }
  }
};
</script>

<style scoped>
.docs {
  padding: 0 0.2rem;
}

.docs__heading {
  margin-bottom: 0.5rem;
  text-align: center;
}

.docs__nav {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  text-align: center;
}

.docs__nav a {
  margin-right: 0.75rem;
}

.docs__content {
  border-top: 1px solid #d5d5df;
  padding: 1.5rem 0 2.5rem 0;
}

.docs__content h3 {
  margin: 0 0 1.5rem 0;
  padding: 1.5rem 0 0 0;
}

.docs__content h4 {
  margin: 1.5rem 0 0.665rem 0;
  color: #727292;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  text-transform: uppercase;
}

.docs__content b {
  margin-bottom: 2px;
  font-weight: 600;
}

.docs__content div + div {
  padding-top: 1.5rem;
}

.docs__content p {
  line-height: 1.4em;
}

.docs__content p:last-child {
  margin-bottom: 0;
}

.docs__code {
  background: #f2f3f7;
  margin-top: 0;
  padding: 1.5rem;
  border-radius: 1px;
  overflow: auto;
}

.docs__props-list {
  margin: 0;
  padding: 0;
  border: 1px solid #d5d5df;
  border-radius: 1px;
  list-style: none;
}

.docs__props-list li {
  padding: 0.65rem;
  line-height: 1.4em;
}

.docs__props-list li + li {
  border-top: 1px solid #d5d5df;
}

@media (min-width: 768px) {
  .docs {
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .docs__heading {
    width: 100%;
    margin: 0 0 0 25%;
    border-left: 1px solid #d5d5df;
    padding-left: 3rem;
    text-align: left;
  }

  .docs__nav {
    width: 25%;
    padding: 1.55rem 2rem 0 2rem;
    text-align: right;
  }

  .docs__nav a {
    margin: 0 0 0.5rem 0;
    display: block;
  }

  .docs__content {
    width: 75%;
    border: none;
    border-left: 1px solid #d5d5df;
    padding: 0 0 2rem 3rem;
  }
}
</style>
