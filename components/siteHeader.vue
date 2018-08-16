<template>
  <header class="site-header">
    <div class="logo">
      <img src="/beCampLogo1.png" alt="beCamp">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.site-header {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 100%;
  z-index: 2;
  padding: gutter();
  @include row();

  .logo {
    margin: 0 auto;
    max-width: 250px;
    text-align: center;

    img {
      max-height: 50px;
    }
  }
}
</style>
