<template>
  <footer class="global-site-footer" role="contentinfo">

    <newsletter-signup />

    <div
      class="site-footer"
      :style="{backgroundImage: footerBackgroundImage}"
      :data-accent-color="currentPageAccentColor"
    >
      <div class="content">
        <div class="credits">
          <div class="logo">
            <div v-lazy-container="{ selector: 'img' }">
              <nuxt-link to="/swarm">
                <img
                  data-src="beCampLogo1.png"
                  alt="beCamp"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="copyright">
            &copy; {{ year }} beCamp
          </div>
          <div class="project-source">
            Website source available on <a href="https://github.com/wearebraid/be.camp" target="_blank" rel="noopener" name="Github link">github</a>
          </div>
          <div class="braid-credit">
            <a href="https://www.wearebraid.com" target="_blank" rel="noopener" name="Braid credit">
              Made with <span class="heart" aria-label="love">❤️</span> by Braid in Charlottesville
            </a>
          </div>
        </div>
        <div class="slack-promo">
          <div class="sales-pitch">
            <h3>Cville Slack</h3>
            Want that beCamp feeling all year?<br>
            Join the conversation in the #becamp channel on Cville Slack!
            <div v-lazy-container="{ selector: 'img' }">
              <a
                href="http://slack.cville.co"
                target="_blank"
                rel="noopener"
                name="Cville Slack link"
              >
                <img
                  data-src="slack.png"
                  alt=""
                />
                Join Cville Slack (It's free!)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: {
    background: {
      type: String,
      default: '/hero-1.jpg'
    }
  },
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  },
  computed: {
    ...mapState([
      'currentPageAccentColor'
    ]),
    footerBackgroundImage () {
      return `url("${this.background}")`
    },
  }
}
</script>

<style lang="scss" scoped>
.site-footer {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  padding: 4em gutter() 2em gutter();
  position: relative;
  border-bottom: 1em solid $accent;
  position: relative;
  overflow: hidden;

  @include bp($ms) {
    padding-top: 5em;
    padding-bottom: 2em;
  }
  @include bp($ml) {
    padding-top: 6em;
    padding-bottom: 3em;
  }
  @include bp($l) {
    padding-top: 10em;
  }

  @supports (-webkit-clip-path: polygon(0 0, 0 0)) or (clip-path: polygon(0 0, 0 0)) {
    border-bottom: none;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 12vw;
      z-index: 2;
      transform: scale(-1);
    }
    &:before {
      background-color: $accent;
      clip-path: polygon(
        0% 28%, 25% 75%, 100% 0%,
        100% 99.5%, 0% 99.5%
      )
    }
    &:after {
      background-color: #fff;
      clip-path: polygon(
        0% 50%, 25% 100%, 100% 10%,
        100.5% 100.5%, 0% 100.5%
      );
    }

    @include bp($m) {
      &:before {
        clip-path: polygon(
          0% 20%, 25% 85%, 100% 0%,
          100% 99.5%, 0% 99.5%
        )
      }
      &:after {
        clip-path: polygon(
          0% 40%, 25% 100%, 100% 3%,
          100.5% 100.5%, 0% 100.5%
        );
      }
    }

    @include bp($l) {
      &:before {
        clip-path: polygon(
          0% 28%, 25% 92%, 100% 0%,
          100% 99.5%, 0% 99.5%
        )
      }
      &:after {
        clip-path: polygon(
          0% 40%, 25% 100%, 100% 3%,
          100.5% 100.5%, 0% 100.5%
        );
      }
    }

    &[data-accent-color="blue"] {
      &:before { background-color: $accent4 !important; }
    }
    &[data-accent-color="black"] {
      &:before { background-color: $dark !important; }
    }
  }

  @include bp($ml) {
    margin-top: 0;
  }

  .content {
    position: relative;
    z-index: 1;
  }
}

.content {
  max-width: 250px;
  margin: 0 auto;
  padding: gutter()/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  @include bp($ml) {
    @include row();
    padding: gutter();
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .credits {
    order: 2;

    @include bp($ml) {
      order: 1;
    }

    .logo {
      max-width: 250px;
      margin-bottom: gutter()/2;
    }

    .copyright,
    .braid-credit,
    .project-source {
      line-height: 1.5;
      color: #666;
    }

    .braid-credit {
      padding-top: gutter();
      a {
        color: #666;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
      .heart {
        font-size: .75em;
      }
    }
    .project-source {
      a {
        color: inherit;
      }
    }
  }

  .slack-promo {
    margin-bottom: gutter()*3;
    color: #666;
    line-height: 1.4;

    @include bp($ml) {
      order: 2;
      margin-bottom: 0;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: gutter();
      padding: gutter()/2;
      text-decoration: none;
      border: 1px solid #ddd;
      justify-content: center;
      border-radius: 5px;
      background: linear-gradient(to bottom, #fff, #f5f5f5);
      color: #666;

      &:hover {
        background: #fff;
      }

      @include bp($ml) {
        max-width: 220px;
        margin-right: auto;
      }

      img {
        max-width: 25px;
        max-height: 25px;
        display: inline-block;
        margin-right: .5em;
      }
    }
  }
}
</style>
