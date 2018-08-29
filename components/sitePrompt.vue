<template>
  <div
    class="site-prompt"
    :style="styles"
    ref="prompt"
  >
    <div class="inner">
      <div
        class="close"
        @click="dismiss"
      >
        <span class="icon">&times;</span>
        <span class="label"> dismiss</span>
      </div>
      <div class="content">
        <p>{{ message }}</p>

        <div class="cta">
          <a
            v-if="ctaLink"
            href="https://www.customink.com/fundraising/becamp-hat"
            target="_blank"
            rel="noopener"
            class="small"
            @click="dismiss"
          >
            <button>{{ ctaMessage }}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: {
    promptId: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    ctaLink: {
      type: String
    },
    ctaMessage: {
      type: String,
      default: 'Read More'
    }
  },
  data () {
    return {
      show: false,
      componentHeight: 0
    }
  },
  mounted () {
    this.setComponentHeight()
    this.show = true
  },
  computed: {
    ...mapGetters({
      viewportWidth: 'system/getViewportWidth'
    }),
    styles () {
      if (this.show) {
        return {
          marginTop: 0
        }
      } else {
        return {
          marginTop: `-${this.componentHeight}px`
        }
      }
    }
  },
  methods: {
    dismiss () {
      this.show = false
    },
    setComponentHeight () {
      this.componentHeight = this.$refs.prompt.clientHeight
    }
  },
  watch: {
    viewportWidth: {
      handler () {
        this.setComponentHeight()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.site-prompt {
  background-color: linear-gradient(to bottom, #fff, $light-d);
  border-bottom: 1px solid #eee;
  padding: gutter();
  transition: margin 1s;
}

.inner {
  position: relative;
  @include row();

  @include bp($m) {
    display: flex;
    flex-direction: row;
  }
}

.close {
  position: absolute;
  bottom: gutter()/4;
  right: 0;
  font-size: 1.5em;
  vertical-align: top;

  @include bp($m) {
    position: static;
    font-size: 2em;
    line-height: 1;
    min-width: 50px;
  }

  span {
    display: inline-block;
    line-height: 1rem;
    cursor: pointer;
  }

  .icon {
    position: relative;
    top: .125em;

    @include bp($m) {
      position: static;
      border: 2px solid #000;
      border-radius: 50%;
      padding: .1em;
    }
  }

  .label {
    font-size: 1.1rem;
    margin-left: .25em;

    @include bp($m) {
      display: none;
    }
  }
}

.content {
  @include bp($m) {
    display: flex;
    align-items: center;
  }

  p {
    @include bp($m) {
      margin-bottom: 0;
    }
  }

  .cta {
    @include bp($m) {
      min-width: 200px;
      text-align: right;
      padding-left: gutter()/2;
    }
  }
}

button {
  font-size: 1rem;
}
</style>
