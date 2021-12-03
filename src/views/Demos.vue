<template>
  <div class="demos">
    <h2 class="demos__heading">Demos</h2>

    <nav class="demos__nav" aria-label="Demos">
      <span class="demos__nav-label">jump to:</span>
      <span>
        <router-link
          v-bind:to="{ path: 'demos', hash: '#basic' }"
          v-on:click="scrollToHash('#basic')"
          >Basic</router-link
        >
        <router-link
          v-bind:to="{ path: 'demos', hash: '#withLoadingSpacer' }"
          v-on:click="scrollToHash('#withLoadingSpacer')"
          >With Loading Spacer</router-link
        >
        <router-link
          v-bind:to="{ path: 'demos', hash: '#dragToMove' }"
          v-on:click="scrollToHash('#dragToMove')"
          >Drag To Move</router-link
        >
        <router-link
          v-bind:to="{ path: 'demos', hash: '#zoomOnHover' }"
          v-on:click="scrollToHash('#zoomOnHover')"
          >Zoom On Hover</router-link
        >
        <router-link
          v-bind:to="{ path: 'demos', hash: '#fullscreen' }"
          v-on:click="scrollToHash('#fullscreen')"
        >
          Fullscreen On Mobile
        </router-link>
        <br />
        <router-link
          v-bind:to="{ path: 'demos', hash: '#mobileNoCloseButton' }"
          v-on:click="scrollToHash('#mobileNoCloseButton')"
        >
          Mobile No Close Button
        </router-link>
        <router-link
          v-bind:to="{ path: 'demos', hash: '#responsive' }"
          v-on:click="scrollToHash('#responsive')"
        >
          Responsive Images
        </router-link>
        <router-link
          v-bind:to="{ path: 'demos', hash: '#swiper' }"
          v-on:click="scrollToHash('#swiper')"
          >With Swiper Carousel</router-link
        >
      </span>
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
              href="https://unsplash.com/@awcreativeut?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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

    <section id="withLoadingSpacer">
      <DemosDemo
        name="With Loading Spacer"
        v-bind:code="`<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  :width=&quot;750&quot;\n  :height=&quot;500&quot;\n  :hasSpacer=&quot;true&quot;\n/>`"
      >
        <template v-slot:notes>
          <li>Uses width and height props to generate image aspect ratio</li>
          <li>Creates an image spacer to prevent cumulative layout shift</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/@henmankk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Keagan Henman</a
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
            src="assets/unsplash-10.jpg"
            zoomSrc="assets/unsplash-10-large.jpg"
            :width="750"
            :height="500"
            :hasSpacer="true"
          />
        </template>
      </DemosDemo>
    </section>

    <section id="dragToMove">
      <DemosDemo
        name="Drag To Move"
        v-bind:code="`<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  moveType=&quot;drag&quot;\n/>`"
      >
        <template v-slot:notes>
          <li>Drag to explore zoomed image on non-touch devices</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/@rmrdnl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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

    <section id="zoomOnHover">
      <DemosDemo
        name="Zoom On Hover"
        v-bind:code="`<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  zoomType=&quot;hover&quot;\n/>`"
      >
        <template v-slot:notes>
          <li>Trigger image zoom on hover</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Louis Hansel</a
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
            src="assets/unsplash-12.jpg"
            zoomSrc="assets/unsplash-12-large.jpg"
            zoomType="hover"
          />
        </template>
      </DemosDemo>
    </section>

    <section id="fullscreen">
      <DemosDemo
        name="Fullscreen On Mobile"
        v-bind:code="`<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  :fullscreenOnMobile=&quot;true&quot;\n/>`"
      >
        <template v-slot:notes>
          <li>Zoomed image is fullscreen on touch devices below a specified breakpoint</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/@ecopanda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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

    <section id="mobileNoCloseButton">
      <DemosDemo
        name="Mobile No Close Button"
        v-bind:code="`<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  :hideCloseButton=&quot;true&quot;\n/>`"
      >
        <template v-slot:notes>
          <li>Hides the close button on touch devices</li>
          <li>Zoom out is triggered by tap</li>
          <li>
            Photo credit:
            <a
              href="https://unsplash.com/@fredmarriage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >freddie marriage</a
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
            src="assets/unsplash-11.jpg"
            zoomSrc="assets/unsplash-11-large.jpg"
            :hideCloseButton="true"
          />
        </template>
      </DemosDemo>
    </section>

    <section id="responsive">
      <DemosDemo
        name="Responsive Images"
        v-bind:code="`<inner-image-zoom\n  src=&quot;/path/to/image.jpg&quot;\n  zoomSrc=&quot;/path/to/zoom-image.jpg&quot;\n  srcSet=&quot;/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x&quot;\n  :sources=&quot;[{ srcSet='/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x', media: '(min-width: 768px)' }]&quot;\n>`"
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
              href="https://unsplash.com/@lovefromyours?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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

    <section id="swiper">
      <DemosDemo
        name="With Swiper Carousel"
        v-bind:code="`<swiper>\n  <swiper-slide>\n    <inner-image-zoom\n      src=&quot;/path/to/image-1.jpg&quot;\n      zoomSrc=&quot;/path/to/zoom-image-2.jpg&quot;\n      :fullscreen=&quot;true&quot;\n    >\n  </swiper-slide>\n  <swiper-slide>\n    <inner-image-zoom\n      src=&quot;/path/to/image-2.jpg&quot;\n      zoomSrc=&quot;/path/to/zoom-image-2.jpg&quot;\n      :fullscreen=&quot;true&quot;\n    >\n  </swiper-slide>\n  <swiper-slide>\n    <inner-image-zoom\n      src=&quot;/path/to/image-3.jpg&quot;\n      zoomSrc=&quot;/path/to/zoom-image-3.jpg&quot;\n      :fullscreen=&quot;true&quot;\n    >\n  </swiper-slide>\n</swiper>`"
      >
        <template v-slot:notes>
          <li>
            Integration with
            <a href="https://github.com/nolimits4web/swiper" target="_blank">Swiper</a>
          </li>
          <li>Recommend using with fullscreenOnMobile</li>
          <li>
            Photo credits:
            <a
              href="https://unsplash.com/@alejandroescamilla?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Alejandro Escamilla</a
            >,
            <a
              href="https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              >Jakob Owens</a
            >, and
            <a
              href="https://unsplash.com/@kalvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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
          <swiper
            :modules="modules"
            loop
            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
            :pagination="{ clickable: true }"
          >
            <swiper-slide>
              <InnerImageZoom
                src="assets/unsplash-8.jpg"
                zoomSrc="assets/unsplash-8-large.jpg"
                :fullscreenOnMobile="true"
              />
            </swiper-slide>
            <swiper-slide>
              <InnerImageZoom
                src="assets/unsplash-7.jpg"
                zoomSrc="assets/unsplash-7-large.jpg"
                :fullscreenOnMobile="true"
              />
            </swiper-slide>
            <swiper-slide>
              <InnerImageZoom
                src="assets/unsplash-9.jpg"
                zoomSrc="assets/unsplash-9-large.jpg"
                :fullscreenOnMobile="true"
              />
            </swiper-slide>
          </swiper>
          <button type="button" class="swiper-button-prev"></button>
          <button type="button" class="swiper-button-next"></button>
        </template>
      </DemosDemo>
    </section>
  </div>
</template>

<script>
import DemosDemo from '@/components/DemosDemo.vue';
import InnerImageZoom from 'vue-inner-image-zoom';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper } from 'swiper/vue/swiper';
import { SwiperSlide } from 'swiper/vue/swiper-slide';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import './swiper-theme.css';

export default {
  name: 'Demos',
  components: {
    DemosDemo,
    InnerImageZoom,
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination, A11y]
    };
  },
  mounted: function () {
    document.body.style.height = 'auto';

    if (this.$route.hash) {
      setTimeout(() => this.scrollToHash(this.$route.hash.replace('#', '')), 1);
    }
  },
  unmounted: function () {
    document.body.style.height = '100%';
  },
  methods: {
    scrollToHash: function (hashbang) {
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

.demos__nav-label {
  color: #4b4b4b;
  font-family: 'Frank Ruhl Libre', serif;
  font-style: italic;
  letter-spacing: 0.015em;
}

.demos__nav a {
  margin-left: 0.75rem;
}

.demos__nav br {
  display: none;
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
    display: flex;
  }

  .demos__nav-label {
    flex-shrink: 0;
  }

  .demos__nav br {
    display: block;
  }

  .demos__nav a {
    margin-left: 1rem;
  }
}
</style>
