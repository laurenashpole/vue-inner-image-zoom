<template>
  <section class="product">
    <div class="product__img">
      <InnerImageZoom
        src="assets/unsplash-1.jpg"
        zoomSrc="assets/unsplash-1-large.jpg"
        alt="Product details page style zoomable image"
      />
    </div>

    <div class="product__details">
      <h2>Vue Inner Image Zoom Component</h2>
      <p>Great for ecommerce product images!</p>
      <p class="product__price">$0</p>
      <a class="product__btn" href="https://github.com/laurenashpole/vue-inner-image-zoom"
        >View on Github</a
      >
      <ul class="product__list">
        <li>Details</li>
        <li>Zoom + pan on hover and zoom + drag on touch</li>
        <li>Supports responsive images</li>
        <li>Can be used with other popular Vue components</li>
        <li>
          Photo credit:
          <a
            href="https://unsplash.com/photos/TVllFyGaLEA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
            >STIL</a
          >
          on
          <a
            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
            >Unsplash</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import InnerImageZoom from 'vue-inner-image-zoom';
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';

export default {
  name: 'HomeProduct',
  components: {
    InnerImageZoom
  }
};
</script>

<style scoped>
.product {
  padding: 0.2rem 0.2rem 0 0.2rem;
}

.product__details {
  text-align: center;
}

.product__details h2 {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 1.4rem;
}

.product__price {
  margin: -0.5rem 0 1.8rem 0;
  font-family: 'Frank Ruhl Libre', serif;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 0.025em;
}

.product__btn {
  background: #3ba676;
  width: 100%;
  margin-bottom: 0.8rem;
  border-radius: 2px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 3rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  display: inline-block;
}

.product__btn:hover,
.product__btn:focus {
  background: #2e815b;
  color: #fff;
}

.product__list {
  margin: 0;
  border-top: 1px solid #d9dade;
  padding: 1.6rem 0 0 0;
  list-style: none;
  text-align: left;
}

.product__list li + li {
  margin-top: 10px;
}

.product__list li:first-child {
  font-size: 0.8rem;
  font-weight: 900;
  line-height: 1.25rem;
  letter-spacing: 0.075em;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .product {
    padding: 0;
    display: flex;
    align-items: center;
  }

  .product__img {
    width: 50%;
    flex-shrink: 0;
  }

  .product__details {
    padding-left: 5%;
    font-size: 0.95rem;
    text-align: left;
  }

  .product__details h2 {
    margin-top: 0;
  }

  .product__btn {
    width: auto;
    margin-bottom: 2rem;
    padding: 0 2.25rem;
  }

  .product__list {
    border-top: none;
    padding-top: 0;
  }
}

@media (min-width: 1024px) {
  .product {
    padding: 2rem 2rem 0 2rem;
  }

  .product__details {
    padding-left: 7.5%;
    font-size: 1rem;
  }

  .product__details h2 {
    font-size: 2rem;
  }
}
</style>
