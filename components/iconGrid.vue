<template>
  <div class="icon-grid">
    <div
      class="icon"
      v-for="icon in icons"
      :key="icon.label"
    >
      <img :src="icon.icon" :alt="icon.label">
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
    margin-bottom: gutter()*2;
    margin-right: gutter()*2;
    max-width: 200px;

    &:last-child {
      margin-right: 0;
    }

    img {
      margin-bottom: gutter();
    }
  }
}
</style>
