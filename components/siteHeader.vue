<template>
  <header class="site-header">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/beCampLogo1.png" alt="beCamp">
      </nuxt-link>
    </div>
    <div class="nav">Attendees, FAQs, and more launching soon!</div>
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

  @include bp($m) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    margin: 0 auto;
    max-width: 250px;
    text-align: center;

    @include bp($m) {
      margin: 0;
      text-align: left;
    }

    img {
      max-height: 50px;
    }
  }

  .nav {
    display: none;
    font-size: 1.1rem;

    @include bp($m) {
      padding-top: gutter()/4;
      display: block;
      color: #444;
    }
  }
}
</style>
