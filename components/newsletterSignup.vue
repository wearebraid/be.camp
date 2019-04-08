<template>
  <div class="page-section newsletter-signup-form">
    <h2 id="newsletter-header">Join the beCamp newsletter!</h2>
    <h3 class="light">Get the latest news and notifications about beCamp/beSwarm.</h3>
    <div id="mc_embed_signup">
      <form action="https://becamp.us15.list-manage.com/subscribe/post?u=f75f5915da9ca3ce7be9baad3&amp;id=91e20a1da0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="newsletter-form" target="_blank">
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required aria-labelledby="newsletter-header">
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f75f5915da9ca3ce7be9baad3_91e20a1da0" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" :value="buttonLabel" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      viewportWidth: 'system/getViewportWidth'
    }),
    buttonLabel () {
      return this.viewportWidth > 600 ? 'Join Now!' : 'Join!'
    }
  }
}
</script>

<style lang="scss" scoped>
.newsletter-signup-form {
  border-top: 1px solid #eee;
  text-align: center;
  padding-top: 3em;

  @include bp($m) {
    padding-top: 5em;
    padding-bottom: 6em;
  }
}

.newsletter-form {
  background-color: $light-d;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 .25em .25em 0 rgba($dark, .05);
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 1em auto 0 auto;
  padding: .25em;
  display: flex;
  justify-content: space-between;

  @include bp($m) {
    padding: .5em;
  }

  input[type=email] {
    display: block;
    width: 80%;
    font-size: .8em;
    background-color: transparent;
    border: none;
    appearance: none;
    outline: none;
    line-height: 1;
    color: #444;
    padding-right: .25em;
    @include font-smoothing();

    @include bp($m) {
      font-size: 1em;
    }
  }
}
</style>
