<template>
  <section class="quick-start">
    <h3 class="quick-start__heading">Quick <span>Start</span></h3>

    <div class="quick-start__content">
      <div class="quick-start__step">
        <span>Install:</span>
        <code v-pre>npm install vue-inner-image-zoom</code>
      </div>
      <div class="quick-start__step">
        <span>Style:</span>
        <code v-pre>import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'</code>
      </div>
      <div class="quick-start__step">
        <span>Import:</span>
        <code v-pre>import InnerImageZoom from 'vue-inner-image-zoom'</code>
      </div>
      <div class="quick-start__step">
        <span>Template:</span>
        <code v-pre>
          &lt;inner-image-zoom src="/path/to/image.jpg" /&gt;
        </code>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-start {
  background: #f2f3f7;
  margin: 4em 0 2rem 0;
  padding: 1.6rem 1rem 1rem 1.6rem;
}

.quick-start__heading {
  margin: 0 0 1.6rem 0;
  text-align: center;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 2rem;
  letter-spacing: 0.025em;
}

.quick-start__content {
  color: #4b4b4b;
  flex-grow: 1;
  counter-reset: step;
}

.quick-start__content span {
  color: #727292;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  display: block;
}

.quick-start__step {
  background: #fff;
  padding: 1.1rem 1rem 1rem calc(2rem + 10px);
  position: relative;
  word-break: break-word;
}

.quick-start__step + .quick-start__step {
  margin-top: 0.75rem;
}

.quick-start__step:before {
  counter-increment: step;
  content: counter(step);
  background: #3ba676;
  width: 45px;
  height: 45px;
  margin-top: -22.5px;
  border-radius: 1px;
  padding-right: 2px;
  color: #fff;
  font-family: 'Frank Ruhl Libre', serif;
  font-style: italic;
  line-height: 45px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: -15px;
}

@media (min-width: 768px) {
  .quick-start {
    margin-top: 6rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
  }

  .quick-start__heading {
    width: 33.333%;
    padding-right: 1.6rem;
  }

  .quick-start__heading span {
    display: block;
  }

  .quick-start__step {
    padding-left: calc(2rem + 30px);
  }
}

@media (min-width: 1024px) {
  .quick-start {
    margin-top: 8rem;
  }
}
</style>
