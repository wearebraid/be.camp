<template>
  <div class="site-wrapper">
    <div class="page-header">
      <div class="logo">
        <img src="/beCampLogo1.png" alt="beCamp">
      </div>
    </div>
    <div class="page-content">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
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
  }
}
</style>

