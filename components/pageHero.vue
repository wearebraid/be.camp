<template>
  <section
    class="page-hero"
    :style="{backgroundImage: heroBackgroundImage}"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'hero-1.jpg'
    }
  },
  computed: {
    heroBackgroundImage () {
      return `url("/${this.background}")`
    }
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  padding-bottom: 23em;
  position: relative;
  border-bottom: 1em solid $accent;
  z-index: -1;

  @supports (-webkit-clip-path: polygon(0 0, 0 0)) or (clip-path: polygon(0 0, 0 0)) {
    border-bottom: none;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12vw;
    }
    &:before {
      background-color: $accent;
      clip-path: polygon(
        0% 28%, 25% 92%, 100% 0%,
        100% 99.9%, 0% 99.9%
      )
    }
    &:after {
      background-color: #fff;
      clip-path: polygon(
        0% 40%, 25% 100%, 100% 1%,
        100.5% 100.5%, 0% 100.5%
      );
    }
  }

  @include bp($ml) {
    margin-top: 0;
  }
}
.landingpage--notice {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 12em;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
}
.notice--time {
  padding-top: 1.5em;

  @media screen and (max-width: 860px) {
    display: block;
    margin: auto;
  }
}

.notice--time span {
  font-size: 4em;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: $dark-b;
}

.notice--description {
  padding-left: 3em;
  width: 22%;

  @media screen and (max-width: 860px) {
    display: block;
    margin: auto;
    padding-top: 3em;
    width: 88%;
    padding-left: 0;
  }
  @media screen and (max-width: 1521px) {
    width: 39%;
  }
}

.notice--description h1 {
  font-size: 1.9em;
  letter-spacing: 1.75px;
  font-weight: bolder;

  @media screen and (max-width: 680px) {
    font-size: 2.1em;
  }
  @media screen and (max-width: 860px) {
    font-size: 1.6em;
  }
}

.notice--register {
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0px 1px 0px 5px #ff8000;
}

.notice--description p {
  font-size: 1em;
  padding-top: 0.7em;
  padding-bottom: 0.7em;

  @media screen and (max-width: 680px) {
    padding-bottom: 2em;
    width: 64%;
    display: block;
    margin: auto;
  }
  @media screen and (max-width: 860px) {
    padding-bottom: 2em;
  }
}

.register__buttonbox {
  background-color: #ff750f;
  width: 68%;
  padding: 15px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0px 1px 0px 1px #ff8000;

  @media screen and (min-width: 200px) and (max-width: 574px) {
    background-color: black;
  }
  @media screen and (max-width: 680px) {
    width: 36%;
    height: 56px;
  }
  @media screen and (max-width: 860px) {
    display: block;
    margin: auto;
    width: 52%;
  }

  &_inner {
    @media screen and (max-width: 860px) {
      display: block;
      margin: auto;
    }
  }
}

.notice--register {
  color: $light;
  font-weight: lighter;
  letter-spacing: 2.33px;
  font-size: 1em;
}

.playbutton {
  max-width: 20%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 2em;
}
</style>
