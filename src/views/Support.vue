<template>
  <div class="support">
    <h2 class="support__heading">Support</h2>

    <div class="support__content">
      <p>
        If you run into any bugs I missed during my testing or if I left out any feature that would
        come in handy, please let me know!
      </p>

      <p>
        Most of the implementation choices for this component are based on use cases I&apos;ve
        encountered in the past. For example, I chose a click to zoom trigger because it was
        requested on previous product detail pages I've worked on. If there&apos;s a demand for zoom
        on hover or other additional functionality, I&apos;d be open to taking a look.
      </p>

      <p>
        One of my big motivations for adapting this component from the original
        <a href="https://laurenashpole.github.io/react-inner-image-zoom">React Inner Image Zoom</a>
        was to give Vue a try so don't hesitate to flag any areas in the code or the documentation
        where I'm not following Vue's best practices.
      </p>

      <div>
        <a href="https://github.com/laurenashpole/vue-inner-image-zoom/issues" class="support__btn">
          Submit an issue <span>on Github</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.support {
  padding-bottom: 2.5rem;
  text-align: center;
}

.support__content {
  line-height: 1.5em;
}

.support__content p {
  margin-bottom: 1.25rem;
}

.support__btn {
  background: #3ba676;
  width: auto;
  margin-top: 1.6rem;
  border-radius: 2px;
  padding: 0 2.25rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 3rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  display: inline-block;
}

.support__btn:hover,
.support__btn:focus {
  background: #2e815b;
  color: #fff;
}

.support__btn span {
  display: none;
}

@media (min-width: 768px) {
  .support {
    padding-bottom: 0;
  }

  .support__heading {
    margin-top: 0;
  }

  .support__content {
    max-width: 760px;
    margin: 0 auto;
    font-size: 1.1rem;
  }

  .support__btn span {
    display: inline;
  }
}
</style>
