<template>
  <figure
    class="iiz"
    v-bind:class="{
      [className]: className,
      'iis--drag': this.currentMoveType === 'drag'
    }"
    v-on="{
      touchstart: handleTouchStart,
      click: handleClick,
      mouseenter: isTouch ? () => {} : handleMouseEnter,
      mousemove: currentMoveType === 'drag' || !isZoomed ? () => {} : handleMouseMove,
      mouseleave: isTouch ? () => {} : handleMouseLeave
    }"
    ref="img"
  >
    <template v-if="validSources">
      <picture>
        <source
          v-for="(source, i) in validSources"
          :key="i"
          :srcSet="source.srcSet"
          :sizes="source.sizes"
          :media="source.media"
          :type="source.type"
        />
        <img
          class="iiz__img"
          v-bind:class="{ 'iiz__img--invisible': isZoomed }"
          v-bind:style="{
            transition: `linear 0ms opacity ${
              isZoomed ? fadeDuration : 0
            }ms, linear 0ms visibility ${isZoomed ? fadeDuration : 0}ms`
          }"
          :src="src"
          :srcSet="srcSet"
          :sizes="sizes"
          :alt="alt"
        />
      </picture>
    </template>

    <template v-else>
      <img
        class="iiz__img"
        v-bind:class="{ 'iiz__img--invisible': isZoomed }"
        v-bind:style="{
          transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear 0ms visibility ${
            isZoomed ? fadeDuration : 0
          }ms`
        }"
        :src="src"
        :srcSet="srcSet"
        :sizes="sizes"
        :alt="alt"
      />
    </template>

    <template v-if="isActive">
      <template v-if="isFullscreen">
        <Portal>
          <div class="iiz__zoom-portal">
            <img
              class="iiz__zoom-img"
              v-bind:class="{ 'iiz__zoom-img--visible': isZoomed }"
              v-bind:style="{
                top: `${top}px`,
                left: `${left}px`,
                transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
                  this.isFullscreen ? 0 : fadeDuration
                }ms visibility`
              }"
              v-on="{
                load: handleLoad,
                touchstart: handleDragStart,
                touchend: handleDragEnd,
                mousedown: handleDragStart,
                mouseup: handleDragEnd
              }"
              :src="zoomSrc || src"
              alt=""
            />

            <button
              v-if="this.isTouch"
              class="iiz__btn iiz__close"
              v-bind:class="{ 'iiz__close--visible': isZoomed }"
              v-bind:style="{
                transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
                  this.isFullscreen ? 0 : fadeDuration
                }ms visibility`
              }"
              v-on:click="handleClose"
              aria-label="Zoom Out"
            />
          </div>
        </Portal>
      </template>

      <template v-else>
        <img
          class="iiz__zoom-img"
          v-bind:class="{ 'iiz__zoom-img--visible': isZoomed }"
          v-bind:style="{
            top: `${top}px`,
            left: `${left}px`,
            transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
              this.isFullscreen ? 0 : fadeDuration
            }ms visibility`
          }"
          v-on="{
            load: handleLoad,
            touchstart: handleDragStart,
            touchend: handleDragEnd,
            mousedown: handleDragStart,
            mouseup: handleDragEnd
          }"
          :src="zoomSrc || src"
          alt=""
        />

        <button
          v-if="this.isTouch"
          class="iiz__btn iiz__close"
          v-bind:class="{ 'iiz__close--visible': isZoomed }"
          v-bind:style="{
            transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
              this.isFullscreen ? 0 : fadeDuration
            }ms visibility`
          }"
          v-on:click="handleClose"
          aria-label="Zoom Out"
        />
      </template>
    </template>

    <span v-if="!isZoomed" className="iiz__btn iiz__hint"></span>
  </figure>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal';

export default {
  name: 'InnerImageZoom',
  components: {
    Portal
  },
  props: {
    moveType: {
      type: String,
      default: 'pan'
    },
    src: {
      type: String,
      required: true
    },
    srcSet: String,
    sizes: String,
    sources: Array,
    zoomSrc: String,
    alt: String,
    fadeDuration: {
      type: Number,
      default: 150
    },
    fullscreenOnMobile: Boolean,
    mobileBreakpoint: {
      type: Number,
      default: 640
    },
    className: String,
    afterZoomIn: Function,
    afterZoomOut: Function
  },
  data: function () {
    return {
      isActive: false,
      isTouch: false,
      isZoomed: false,
      isFullscreen: false,
      isDragging: false,
      currentMoveType: this.moveType,
      left: 0,
      top: 0,
      imgProps: {}
    };
  },
  created: function () {
    this.setDefaults();
  },
  computed: {
    validSources: function () {
      return this.sources ? this.sources.filter((source) => source.srcSet) : [];
    }
  },
  methods: {
    handleMouseEnter() {
      this.isActive = true;
    },
    handleTouchStart() {
      this.isFullscreen =
        this.fullscreenOnMobile &&
        window.matchMedia &&
        window.matchMedia(`(max-width: ${this.mobileBreakpoint}px)`).matches;
      this.isTouch = true;
      this.currentMoveType = 'drag';
    },
    handleClick(e) {
      if (this.isZoomed) {
        if (!this.isTouch && !this.isDragging) {
          this.zoomOut();
        }

        return;
      }

      if (this.isTouch) {
        this.isActive = true;
      }

      if (this.imgProps.isLoaded) {
        this.zoomIn(e.pageX, e.pageY);
      } else {
        this.imgProps.onLoadCallback = this.zoomIn.bind(this, e.pageX, e.pageY);
      }
    },
    handleLoad(e) {
      this.imgProps.isLoaded = true;
      this.imgProps.zoomImg = e.target;
      this.imgProps.bounds = this.getBounds(this.img, false);
      this.imgProps.ratios = this.getRatios(this.imgProps.bounds, this.imgProps.zoomImg);

      if (this.imgProps.onLoadCallback) {
        this.imgProps.onLoadCallback();
        this.imgProps.onLoadCallback = null;
      }
    },
    handleMouseMove(e) {
      let left = e.pageX - this.imgProps.offsets.x;
      let top = e.pageY - this.imgProps.offsets.y;

      left = Math.max(Math.min(left, this.imgProps.bounds.width), 0);
      top = Math.max(Math.min(top, this.imgProps.bounds.height), 0);

      (this.left = left * -this.imgProps.ratios.x), (this.top = top * -this.imgProps.ratios.y);
    },
    handleDragStart(e) {
      this.imgProps.offsets = this.getOffsets(
        e.pageX || e.changedTouches[0].pageX,
        e.pageY || e.changedTouches[0].pageY,
        this.imgProps.zoomImg.offsetLeft,
        this.imgProps.zoomImg.offsetTop
      );
      this.imgProps.zoomImg.addEventListener(
        this.isTouch ? 'touchmove' : 'mousemove',
        this.handleDragMove,
        { passive: false }
      );

      if (!this.isTouch) {
        this.imgProps.eventPosition = {
          x: e.pageX,
          y: e.pageY
        };
      }
    },
    handleDragMove(e) {
      e.preventDefault();
      e.stopPropagation();

      let left = (e.pageX || e.changedTouches[0].pageX) - this.imgProps.offsets.x;
      let top = (e.pageY || e.changedTouches[0].pageY) - this.imgProps.offsets.y;

      left = Math.max(
        Math.min(left, 0),
        (this.imgProps.zoomImg.offsetWidth - this.imgProps.bounds.width) * -1
      );
      top = Math.max(
        Math.min(top, 0),
        (this.imgProps.zoomImg.offsetHeight - this.imgProps.bounds.height) * -1
      );

      this.left = left;
      this.top = top;
    },
    handleDragEnd(e) {
      this.imgProps.zoomImg.removeEventListener(
        this.isTouch ? 'touchmove' : 'mousemove',
        this.handleDragMove
      );

      if (!this.isTouch) {
        const moveX = Math.abs(e.pageX - this.imgProps.eventPosition.x);
        const moveY = Math.abs(e.pageY - this.imgProps.eventPosition.y);
        this.isDragging = moveX > 5 || moveY > 5;
      }
    },
    handleMouseLeave(e) {
      this.currentMoveType === 'drag' && this.isZoomed ? this.handleDragEnd(e) : this.handleClose();
    },
    handleClose() {
      this.zoomOut(() => {
        setTimeout(() => {
          this.setDefaults();
          this.isActive = false;
          this.isTouch = false;
          this.isFullscreen = false;
          this.currentMoveType = this.moveType;
        }, this.fadeDuration);
      });
    },
    initialMove(pageX, pageY) {
      this.imgProps.offsets = this.getOffsets(
        window.pageXOffset,
        window.pageYOffset,
        -this.imgProps.bounds.left,
        -this.imgProps.bounds.top
      );

      this.handleMouseMove({
        pageX: pageX,
        pageY: pageY
      });
    },
    initialDragMove(pageX, pageY) {
      const initialPageX =
        (pageX - (window.pageXOffset + this.imgProps.bounds.left)) * -this.imgProps.ratios.x;
      const initialPageY =
        (pageY - (window.pageYOffset + this.imgProps.bounds.top)) * -this.imgProps.ratios.y;

      this.imgProps.bounds = this.getBounds(this.$refs.img, this.isFullscreen);
      this.imgProps.offsets = this.getOffsets(0, 0, 0, 0);

      this.handleDragMove({
        changedTouches: [
          {
            pageX: initialPageX,
            pageY: initialPageY
          }
        ],
        preventDefault: () => {},
        stopPropagation: () => {}
      });
    },
    zoomIn(pageX, pageY) {
      const initialMove = this.currentMoveType === 'drag' ? this.initialDragMove : this.initialMove;

      this.isZoomed = true;
      initialMove(pageX, pageY);

      if (this.afterZoomIn) {
        this.afterZoomIn();
      }
    },
    zoomOut(callback) {
      this.isZoomed = false;

      if (this.afterZoomOut) {
        this.afterZoomOut();
      }

      if (callback) {
        callback();
      }
    },
    setDefaults() {
      this.imgProps.isLoaded = false;
      this.imgProps.onLoadCallback = null;
      this.imgProps.zoomImg = null;
      this.imgProps.bounds = {};
      this.imgProps.offsets = {};
      this.imgProps.ratios = {};
      this.imgProps.eventPosition = {};
    },
    getBounds(img, isFullscreen) {
      if (isFullscreen) {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
          left: 0,
          top: 0
        };
      }

      return this.$refs.img.getBoundingClientRect();
    },
    getOffsets(pageX, pageY, left, top) {
      return {
        x: pageX - left,
        y: pageY - top
      };
    },
    getRatios(bounds, zoomImg) {
      return {
        x: (zoomImg.offsetWidth - bounds.width) / bounds.width,
        y: (zoomImg.offsetHeight - bounds.height) / bounds.height
      };
    }
  }
};
</script>

<style scoped></style>
