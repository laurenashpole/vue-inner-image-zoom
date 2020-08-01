<template>
  <div class="demos">
    <h2 class="demos__heading">Demos</h2>

    <nav class="demos__nav">
      <span>jump to:</span>
      <router-link
        v-bind:to="{ path: 'demos', hash: '#basic' }"
        v-on:click.native="scrollToHash('#basic')"
        >Basic</router-link
      >
      <router-link
        v-bind:to="{ path: 'demos', hash: '#dragToMove' }"
        v-on:click.native="scrollToHash('#dragToMove')"
        >Drag To Move</router-link
      >
      <router-link
        v-bind:to="{ path: 'demos', hash: '#fullscreen' }"
        v-on:click.native="scrollToHash('#fullscreen')"
      >
        Fullscreen On Mobile
      </router-link>
      <router-link
        v-bind:to="{ path: 'demos', hash: '#responsive' }"
        v-on:click.native="scrollToHash('#responsive')"
      >
        Responsive Images
      </router-link>
      <router-link
        v-bind:to="{ path: 'demos', hash: '#lazyload' }"
        v-on:click.native="scrollToHash('#lazyload')"
      >
        With Vue-Lazyload
      </router-link>
      <router-link
        v-bind:to="{ path: 'demos', hash: '#slick' }"
        v-on:click.native="scrollToHash('#slick')"
        >With Slick Carousel</router-link
      >
    </nav>

    <section id="basic">
      <DemosDemo
        name="Basic"
        v-bind:code="`<inner-image-zoom src=&quot;/path/to/image.jpg&quot; />`"
      >
        <template v-slot:notes>
          <li>Simplest use case with only src prop set</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/photos/yGCj9aMSBNI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Adam Winger</a
            >
            on
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Unsplash</a
            >
          </li>
        </template>

        <template v-slot:example>
          <InnerImageZoom src="assets/unsplash-2.jpg" />
        </template>
      </DemosDemo>
    </section>

    <section id="dragToMove">
      <DemosDemo
        name="Drag To Move"
        v-bind:code="
          `<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  moveType=&quot;drag&quot;\n/>`
        "
      >
        <template v-slot:notes>
          <li>Drag to explore zoomed image on non-touch devices</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/photos/AgLMrojqjAM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Daniel Romero</a
            >
            on
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Unsplash</a
            >
          </li>
        </template>

        <template v-slot:example>
          <InnerImageZoom
            src="assets/unsplash-3.jpg"
            zoomSrc="assets/unsplash-3-large.jpg"
            moveType="drag"
          />
        </template>
      </DemosDemo>
    </section>

    <section id="fullscreen">
      <DemosDemo
        name="Fullscreen On Mobile"
        v-bind:code="
          `<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  :fullscreenOnMobile=&quot;true&quot;\n/>`
        "
      >
        <template v-slot:notes>
          <li>Zoomed image is fullscreen on touch devices below a specified breakpoint</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/photos/Qxffgf8DU60?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >EcoPanda</a
            >
            on
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Unsplash</a
            >
          </li>
        </template>

        <template v-slot:example>
          <InnerImageZoom
            src="assets/unsplash-4.jpg"
            zoomSrc="assets/unsplash-4-large.jpg"
            :fullscreenOnMobile="true"
          />
        </template>
      </DemosDemo>
    </section>

    <section id="responsive">
      <DemosDemo
        name="Responsive Images"
        v-bind:code="
          `<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  srcSet=&quot;/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x&quot;\n  :sources=&quot;[{ srcSet='/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x', media: '(min-width: 768px)' }]&quot;\n>`
        "
      >
        <template v-slot:notes>
          <li>Accepts default srcset and sources (with srcset, media, type)</li>
          <li>
            Use with
            <a
              href="https://github.com/scottjehl/picturefill"
              target="_blank"
              rel="noopener noreferrer"
              >Picturefill</a
            >
            for older browser support
          </li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/photos/B9EHePG56zA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Yours</a
            >
            on
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Unsplash</a
            >
          </li>
        </template>

        <template v-slot:example>
          <InnerImageZoom
            src="assets/unsplash-5.jpg"
            srcSet="assets/unsplash-5-305.jpg, assets/unsplash-5-610.jpg 2x"
            :sources="[
              {
                srcSet: 'assets/unsplash-5-740.jpg, assets/unsplash-5-1480.jpg 2x',
                media: '(min-width: 375px)'
              }
            ]"
            zoomSrc="assets/unsplash-5-large.jpg"
          />
        </template>
      </DemosDemo>
    </section>

    <section id="lazyload">
      <DemosDemo
        name="With Vue-Lazyload"
        v-bind:code="
          `<lazy-component>\n  <inner-image-zoom\n    src=&quot;/path/to/image.jpg&quot;\n    zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  >\n<lazy-component>`
        "
      >
        <template v-slot:notes>
          <li>
            Integration with
            <a href="https://github.com/hilongjw/vue-lazyload" target="_blank">Vue-Lazyload</a>
            (using lazy-component)
          </li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/photos/1yBqaIvOvk4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Harry Dona</a
            >
            on
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Unsplash</a
            >
          </li>
        </template>

        <template v-slot:example>
          <lazy-component>
            <InnerImageZoom src="assets/unsplash-6.jpg" zoomSrc="assets/unsplash-6-large.jpg" />
          </lazy-component>
        </template>
      </DemosDemo>
    </section>

    <section id="slick">
      <DemosDemo
        name="With Slick Carousel"
        v-bind:code="
          `<vue-slick-carousel>\n  <inner-image-zoom\n    src=&quot;/path/to/image-1.jpg&quot;\n    zoomSrc=&quot;/path/to/zoom-image-2.jpg&quot;\n    :fullscreen=&quot;true&quot;\n  >\n  <inner-image-zoom\n    src=&quot;/path/to/image-2.jpg&quot;\n    zoomSrc=&quot;/path/to/zoom-image-2.jpg&quot;\n    :fullscreen=&quot;true&quot;\n  >\n  <inner-image-zoom\n    src=&quot;/path/to/image-3.jpg&quot;\n    zoomSrc=&quot;/path/to/zoom-image-3.jpg&quot;\n    :fullscreen=&quot;true&quot;\n  >\n</vue-slick-carousel>`
        "
      >
        <template v-slot:notes>
          <li>
            Integration with
            <a href="https://github.com/gs-shop/vue-slick-carousel" target="_blank"
              >vue-slick-carousel</a
            >
          </li>
          <li>Recommend using with fullscreenOnMobile</li>
          <li>
            Photo credits:
            <a
              href="https://unsplash.com/photos/UZ9UNIoePMw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Alejandro Escamilla</a
            >,
            <a
              href="https://unsplash.com/photos/qQdv-By21yE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Jakob Owens</a
            >, and
            <a
              href="https://unsplash.com/photos/ftdfdjMOQxw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >KAL VISUALS</a
            >
            on
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Unsplash</a
            >
          </li>
        </template>

        <template v-slot:example>
          <VueSlickCarousel :dots="true">
            <InnerImageZoom
              src="assets/unsplash-8.jpg"
              zoomSrc="assets/unsplash-8-large.jpg"
              :fullscreenOnMobile="true"
            />
            <InnerImageZoom
              src="assets/unsplash-7.jpg"
              zoomSrc="assets/unsplash-7-large.jpg"
              :fullscreenOnMobile="true"
            />
            <InnerImageZoom
              src="assets/unsplash-9.jpg"
              zoomSrc="assets/unsplash-9-large.jpg"
              :fullscreenOnMobile="true"
            />
          </VueSlickCarousel>
        </template>
      </DemosDemo>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import DemosDemo from '@/components/DemosDemo.vue';
import InnerImageZoom from 'vue-inner-image-zoom';
import VueLazyload from 'vue-lazyload';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import './slick-theme.css';

Vue.use(VueLazyload, {
  lazyComponent: true
});

export default {
  name: 'Demos',
  components: {
    DemosDemo,
    InnerImageZoom,
    VueSlickCarousel
  },
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
.demos__heading {
  margin-bottom: 0.5rem;
  text-align: center;
}

.demos__nav {
  margin-bottom: 2.8rem;
  font-size: 0.95rem;
  line-height: 1.75em;
  text-align: center;
}

.demos__nav a {
  margin-left: 0.75rem;
}

.demos__nav span {
  color: #4b4b4b;
  font-family: 'Frank Ruhl Libre', serif;
  font-style: italic;
  letter-spacing: 0.015em;
}

.demos section:last-child .demo {
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .demos__heading {
    margin-top: 1rem;
  }

  .demos__nav {
    margin-bottom: 3.5rem;
  }

  .demos section:last-child .demo {
    margin-bottom: 0;
  }
}

@media (min-width: 900px) {
  .demos__heading {
    padding-left: 2rem;
    text-align: left;
  }

  .demos__nav {
    margin-bottom: 4.6rem;
    padding-left: 2rem;
    text-align: left;
  }

  .demos__nav a {
    margin-left: 1rem;
  }
}
</style>
