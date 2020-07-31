<template>
  <figure
    class="iiz"
    ref="img"
    v-bind:class="{
      [className]: className,
      'iiz--drag': this.currentMoveType === 'drag'
    }"
    v-on="{
      touchstart: handleTouchStart,
      click: handleClick,
      mouseenter: isTouch ? () => {} : handleMouseEnter,
      mousemove: currentMoveType === 'drag' || !isZoomed ? () => {} : handleMouseMove,
      mouseleave: isTouch ? () => {} : handleMouseLeave
    }"
  >
    <template v-if="validSources">
      <picture>
        <source
          v-for="(source, i) in validSources"
          v-bind:key="i"
          v-bind:srcSet="source.srcSet"
          v-bind:sizes="source.sizes"
          v-bind:media="source.media"
          v-bind:type="source.type"
        />
        <img
          class="iiz__img"
          v-bind:class="{ 'iiz__img--invisible': isZoomed }"
          v-bind:style="{
            transition: `linear 0ms opacity ${
              isZoomed ? fadeDuration : 0
            }ms, linear 0ms visibility ${isZoomed ? fadeDuration : 0}ms`
          }"
          v-bind:src="src"
          v-bind:srcSet="srcSet"
          v-bind:sizes="sizes"
          v-bind:alt="alt"
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
        v-bind:src="src"
        v-bind:srcSet="srcSet"
        v-bind:sizes="sizes"
        v-bind:alt="alt"
      />
    </template>

    <template v-if="isActive">
      <template v-if="isFullscreen">
        <MountingPortal mount-to="body" name="iizPortal" append>
          <div class="iiz__zoom-portal">
            <img
              class="iiz__zoom-img"
              alt=""
              v-bind:class="{ 'iiz__zoom-img--visible': isZoomed }"
              v-bind:style="{
                top: `${top}px`,
                left: `${left}px`,
                transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
                  this.isFullscreen ? 0 : fadeDuration
                }ms visibility`
              }"
              v-bind:src="zoomSrc || src"
              v-on="{
                load: handleLoad,
                touchstart: handleDragStart,
                touchend: handleDragEnd,
                mousedown: handleDragStart,
                mouseup: handleDragEnd
              }"
            />

            <button
              v-if="this.isTouch"
              class="iiz__btn iiz__close"
              aria-label="Zoom Out"
              v-bind:class="{ 'iiz__close--visible': isZoomed }"
              v-bind:style="{
                transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
                  this.isFullscreen ? 0 : fadeDuration
                }ms visibility`
              }"
              v-on:click="handleClose"
            />
          </div>
        </MountingPortal>
      </template>

      <template v-else>
        <img
          class="iiz__zoom-img"
          alt=""
          v-bind:class="{ 'iiz__zoom-img--visible': isZoomed }"
          v-bind:style="{
            top: `${top}px`,
            left: `${left}px`,
            transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
              this.isFullscreen ? 0 : fadeDuration
            }ms visibility`
          }"
          v-bind:src="zoomSrc || src"
          v-on="{
            load: handleLoad,
            touchstart: handleDragStart,
            touchend: handleDragEnd,
            mousedown: handleDragStart,
            mouseup: handleDragEnd
          }"
        />

        <button
          v-if="this.isTouch"
          class="iiz__btn iiz__close"
          aria-label="Zoom Out"
          v-bind:class="{ 'iiz__close--visible': isZoomed }"
          v-bind:style="{
            transition: `linear ${this.isFullscreen ? 0 : fadeDuration}ms opacity, linear ${
              this.isFullscreen ? 0 : fadeDuration
            }ms visibility`
          }"
          v-on:click="handleClose"
        />
      </template>
    </template>

    <span v-if="!isZoomed" class="iiz__btn iiz__hint"></span>
  </figure>
</template>

<script>
import { MountingPortal } from 'portal-vue';

export default {
  name: 'InnerImageZoom',
  components: {
    MountingPortal
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
  data() {
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
  created() {
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
      this.imgProps.bounds = getBounds(this.$refs.img, false);
      this.imgProps.ratios = getRatios(this.imgProps.bounds, this.imgProps.zoomImg);

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
      this.imgProps.offsets = getOffsets(
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
      this.imgProps.offsets = getOffsets(
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

      this.imgProps.bounds = getBounds(this.$refs.img, this.isFullscreen);
      this.imgProps.offsets = getOffsets(0, 0, 0, 0);

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
      console.log('is this happening');
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
    }
  }
};

function getBounds(img, isFullscreen) {
  if (isFullscreen) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      left: 0,
      top: 0
    };
  }

  return img.getBoundingClientRect();
}

function getOffsets(pageX, pageY, left, top) {
  return {
    x: pageX - left,
    y: pageY - top
  };
}

function getRatios(bounds, zoomImg) {
  return {
    x: (zoomImg.offsetWidth - bounds.width) / bounds.width,
    y: (zoomImg.offsetHeight - bounds.height) / bounds.height
  };
}
</script>

<style scoped>
.iiz {
  margin: 0;
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: zoom-in;
}

.iiz--drag .iiz__zoom-img--visible {
  cursor: grab;
}

.iiz__img {
  max-width: 100%;
  height: auto;
  display: block;
  pointer-events: none;
  visibility: visible;
  opacity: 1;
}

.iiz__img--invisible {
  visibility: hidden;
  opacity: 0;
}

.iiz__zoom-img {
  width: auto !important;
  max-width: none !important;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  display: block;
}

.iiz__zoom-img--visible {
  visibility: visible;
  opacity: 1;
  cursor: zoom-out;
}

.iiz__zoom-portal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
}

.iiz__btn {
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0;
  position: absolute;
  text-decoration: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-appearance: none;
  appearance: none;
}

.iiz__btn:before {
  content: '';
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}

.iiz__hint {
  bottom: 10px;
  right: 10px;
  pointer-events: none;
}

.iiz__hint:before {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.9'%3E%3Cpath d='M13.9 7.4C13.9 3.8 11 .9 7.4.9S.9 3.8.9 7.4s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5zm5.3 12.5l-6.7-7.2c-1.4 1.3-3.2 2.1-5.1 2.1-4.1 0-7.4-3.3-7.4-7.4S3.3 0 7.4 0s7.4 3.3 7.4 7.4c0 1.7-.6 3.4-1.7 4.7l6.8 7.2-.7.6z' fill='%23000222'/%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
}

.iiz__close {
  top: 10px;
  right: 10px;
  visibility: hidden;
  opacity: 0;
}

.iiz__close--visible {
  visibility: visible;
  opacity: 1;
}

.iiz__close::before {
  content: '';
  width: 29px;
  height: 29px;
  background-image: linear-gradient(#222, #222), linear-gradient(#222, #222);
  background-size: 100% 1px, 1px 100%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
