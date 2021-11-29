<template>
  <div class="demo">
    <div class="demo__main">
      <h3 class="demo__heading">{{ name }}</h3>

      <div class="demo__content">
        <div class="demo__example">
          <slot name="example"></slot>
        </div>

        <div class="demo__notes">
          <h4 class="demo__notes-heading">Notes:</h4>

          <ul class="demo__notes-list">
            <slot name="notes"></slot>
          </ul>

          <button
            class="demo__code-btn"
            v-on:click="handleClick"
            v-bind:aria-expanded="showCode"
            v-bind:aria-controls="parsedName"
          >
            {{ showCode ? 'Hide Code -' : 'Show Code +' }}
          </button>
        </div>
      </div>
    </div>

    <pre v-if="showCode" class="demo__code" v-bind:id="parsedName">
      <button v-clipboard:copy="code" v-clipboard:success="handleCopy" class="demo__code-copy demo__code-btn" type="button" >Cop{{isCopied ? 'ied!' : 'y'}}</button>
      <code>{{ code }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'DemosDemo',
  props: {
    name: String,
    code: String
  },
  data() {
    return {
      showCode: false,
      isCopied: false
    };
  },
  computed: {
    parsedName: function() {
      return `${this.name.replace(/ /g, '')}Code`;
    }
  },
  methods: {
    handleClick() {
      this.showCode = !this.showCode;
    },
    handleCopy() {
      this.isCopied = true;

      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.demo {
  padding-top: 1.5rem;
  margin-bottom: 2.5rem;
  overflow: hidden;
}

.demo__main {
  background-image: linear-gradient(#f2f3f7, #f2f3f7),
    linear-gradient(transparent 1.5rem, #f2f3f7 1.5rem), linear-gradient(#f2f3f7, #f2f3f7);
  background-size: 2rem calc((100vw - 1.8rem) * 0.666),
    calc(100% - 4rem) calc((100vw - 1.8rem) * 0.666), 2rem calc((100vw - 1.8rem) * 0.666);
  background-position: 0 0, 2rem 0, 100% 0;
  background-repeat: no-repeat;
  padding: 0 1rem 1rem 1rem;
}

.demo__heading {
  width: 100%;
  margin: 0;
  padding: 0 1.5em;
  color: #9697ae;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  text-align: center;
  line-height: 3rem;
  transform: translateY(-1.5rem);
}

.demo__notes-heading {
  margin: 1rem 0;
  font-family: 'Frank Ruhl Libre', serif;
  letter-spacing: 0.025em;
}

.demo__notes-list {
  padding: 0 0 1rem 1rem;
  font-size: 0.95rem;
}

.demo__notes-list li + li {
  margin-top: 0.5rem;
}

.demo__code-btn {
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  color: #3ba676;
  font-family: 'Mada', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}

.demo__code-btn:hover,
.demo__code-btn:focus {
  color: #2e815b;
  text-decoration: underline;
}

.demo__code {
  background: #fff;
  margin: 1rem;
  padding: 1.5em;
  border: 1px solid #d5d5df;
  border-radius: 1px;
  color: #4b4b4b;
  line-height: 1.4em;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  white-space: normal;
}

.demo__code code {
  white-space: pre;
}

.demo__code-copy {
  background: #fff;
  border-left: 1px solid #d5d5df;
  border-bottom: 1px solid #d5d5df;
  padding: 0.25rem 0.75rem;
  color: #9697ae;
  font-size: 0.6rem;
  font-weight: 700;
  position: absolute;
  top: 0;
  right: 0;
  transition: background 0.1s linear, color 0.1s linear, border-color 0.1s linear;
}

.demo__code-copy:hover,
.demo__code-copy:focus {
  background: #727292;
  border-color: #727292;
  color: #fff;
  text-decoration: none;
}

@media (min-width: 768px) {
  .demo__main {
    background-size: 2rem calc((100vw - 5.6rem) * 0.666), 17rem calc((100vw - 5.6rem) * 0.666),
      calc(100% - 19rem) calc((100vw - 5.6rem) * 0.666);
    background-position: 0 0, 2rem 0, 19rem 0;
    padding: 0 2rem 2rem 2rem;
  }

  .demo__heading {
    width: 17rem;
    margin-bottom: 1rem;
    padding: 0 1.75rem;
    text-align: left;
  }
}

@media (min-width: 900px) {
  .demo {
    margin-bottom: 4em;
    padding-top: 2em;
  }

  .demo__main {
    background-size: 2rem calc(100% - 4rem), 17rem calc(100% - 4rem),
      calc(100% - 19rem) calc(100% - 4rem);
  }

  .demo__content {
    display: flex;
    align-items: flex-start;
  }

  .demo__example {
    width: calc(75% - 2rem);
    position: relative;
  }

  .demo__notes {
    width: calc(25% + 2rem);
    padding: 0 0 6rem 2rem;
    position: relative;
  }

  .demo__notes-heading {
    margin-top: 1.5rem;
  }

  .demo__notes-list {
    padding-bottom: 1rem;
  }

  .demo__code-btn {
    position: absolute;
    left: 2rem;
    bottom: 4rem;
  }

  .demo__code {
    margin: 1rem 2rem;
    padding: 2rem;
  }

  .demo__code-copy {
    left: auto;
    bottom: auto;
  }
}
</style>
