<template>
  <section
    class="container-landingpage"
    :style="{backgroundImage: heroBackgroundImage}"
  >
    <div class="innercontainer">
      <section class="landingpage--notice">
        <!-- <img class="notice__logo" src="~static/beCampLogo1.png"/> -->
        <section class="notice--time">
          <p class="launchdate">September 28 - 29, 2018 | Rice Hall @UVa</p>
          <!-- pseudoelements for days, hours -->
          <div class="timecontainer">
            <span class="time__days">78:</span>
            <span class="time__hours">08:</span>
            <span class="time__minutes">05:</span>
            <span class="time__seconds">51</span>
          </div>
          <img class ="playbutton" button="" src="~/static/playbutton.png"/>
        </section>
        <section class="notice--description">
          <h1>Join the other 75 attendees for beCamp 2018</h1>
          <p>Quam si explicavisset, non tam haesitaret. Sin laboramus, quis est, qui alienae modum statuat industriae?</p>
          <div class="register__buttonbox">
            <a class="notice--register" href="">register now</a>
          </div>
        </section>
      </section>
    </div>
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
.container-landingpage {
  background-repeat: no-repeat;
  // background-image: url("~static/background.png");
  margin-top: -5em;
  background-size: cover;
  padding-bottom: 23em;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
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
      100.1% 100.1%, 0% 100.1%
    );
  }

  @media screen and (max-width: 860px) {
    margin-top: -8em;
  }
}
.landingpage--notice {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* width: 50%; */
  justify-content: center;
  margin: auto;
  padding-top: 12em;
  /* max-width: 900px; */

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
