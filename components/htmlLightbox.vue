<template>
  <div
    class="lightbox"
    v-if="visible"
    @click="hideLightbox"
  >
    <div class="close">&times; <span>close</span></div>
    <div class="lightbox-content">
      <div
        class="lightbox-inner"
        v-html="content"
        @click.stop="/**/"
      >
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      visible: state => state.lightbox.visible,
      content: state => state.lightbox.content
    })
  },
  methods: {
    hideLightbox () {
      this.$store.commit('lightbox/setVisibility', false);
    }
  }
}
</script>

<style lang="scss" scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($dark, .75);
  z-index: 99;
  padding: gutter()*4 gutter()/2;

  .close {
    position: absolute;
    top: .5rem;
    right: 1.25rem;
    font-size: 2.5em;
    color: #fff;
    font-weight: 100;
    line-height: 1;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      font-weight: normal;
      font-size: 1.33rem;
      margin-left: .25em;
    }
  }
}

.lightbox-content {
  @include row();
  max-width: 800px;
  padding: gutter()/2;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-content: center;
  justify-content: center;

  @include bp($m) {
    padding: gutter();
  }
}

.lightbox-inner {
  background-color: #fff;
  padding: gutter()/2;
  margin: auto;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 .5em 1em 0 rgba($dark, .25);

  & /deep/ iframe {
    width: 100%;
  }
}
</style>
