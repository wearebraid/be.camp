<template>
  <div class="icon-grid">
    <div
      class="icon"
      v-for="icon in icons"
      :key="icon.label"
    >
      <img v-lazy="icon.icon" :alt="icon.label" class="no-border">
      <h3 class="label" v-html="icon.label"></h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Array,
      required: true
    },
    columns: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-grid {
  padding: gutter()*2 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;

  .icon {
    margin: gutter()/2;
    max-width: 200px;

    @include bp($m) {
      margin: gutter()/2 gutter();
    }

    img {
      margin-bottom: gutter();
      max-width: 120px;
      max-height: 120px;
    }
  }
}
</style>
