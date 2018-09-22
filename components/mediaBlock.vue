<template>
  <div
    class="media-block"
    :class="{alt: altLayout}"
  >
    <div
      class="media-content"
      v-html="content.copy"
    >
    </div>
    <div class="media-image">
      <img
        v-lazy="content.image"
        alt="supporting content image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    altLayout: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .media-block {
    margin-bottom: gutter()*3;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    &:last-child {
      margin-bottom: 0;
    }

    @include bp($m) {
      flex-direction: row;
      max-width: 100%;
      align-items: center;
    }

    &.alt {
      .media-content {
        @include bp($m) {
          text-align: left;
          padding-right: 0;
          padding-left: gutter()*3;
          order: 2;
        }
      }
      .media-image {
        @include bp($m) {
          order: 1;
        }
      }
    }

    .media-content {
      @include bp($m) {
        width: 60%;
        padding-right: gutter()*3;
        text-align: right;
      }
    }

    .media-image {
      border: 8px solid #fff;
      box-shadow: 0 2px 1em 0 rgba($dark, .2);
      border-radius: 3px;

      @include bp($m) {
        width: 40%;
      }

      img {
        display: block;
      }
    }
  }
</style>
