<template>
  <div class="primarycontainer">
    <!-- rename classnames so they arent specific to landingpage -->
  <div class="primary--navbar">
    <div class="fillerspace"></div>
    <input id="burger" type="checkbox" />
    <label for="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <img class="navbar--logo" src="~static/beCampLogo1.png"/>
    <a class="navbar--register" href=""> <span class="orangeback">Register</span></a>
    <a class="navbar--signin" href=""> Sign In</a>
    <nav class="navbar__div">
      <ul>
        <li><a href="">FAQs</a></li>
        <li><a href="">Schedule</a></li>
        <li><a href="">Attendees</a></li>
        <li><a href="">Sponsors</a></li>
        <li><a href="">Content</a></li>
      </ul>
    </nav>
  </div>
    <div class="contentcontainer">
      <nuxt/>
    </div>
    <section class="footer--container">
      <footer class="footer-primary">
        <div class="footer--credits">
          <div class="footer__logodiv">
            <a href=""><img src="~static/footerlogo.png"></a>
          </div>
          <p class="madebybraid">@2018 beCamp | All rights reserved.
          <div class="madebybraid--msg">
            <p>Made with <span class="heart">luv</span> by Braid</p>
          </div>
        </div>
        <div class="footer--socialmedia">
          <ul>
            <li class="footer__home"><a href="">Home</a></li>
            <li class="footer__FAQ"><a href="">FAQ</a></li>
            <li class="footer__schedule"><a href="">Schedule</a></li>
            <li class="footer__attendees"><a href="">Attendees</a></li>
            <li class="footer__sponsors"><a href="">Sponsors</a></li>
            <li class="footer__contact"><a href="">Contact</a></li>
          </ul>
          <div class="slack">
            <img src="~static/slack.png">
            <p class="slack--message">Join the Charlottesville Slack Community</p>
          </div>
          <div class="footer--imagerow">
            <ul class="imagerow__socialmedia">
              <li><a href=""><img src="~static/mail.png"></a></li>
              <li><a href=""><img src="~static/twitter.png"></a></li>
              <li><a href=""><img src="~static/instagram.png"></a></li>
              <li><a href=""><img src="~static/youtube.png"></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @media screen and (min-width:300px) and (max-width:500px){
    .primary--navbar{
      width: 100%;
      height: 60px;
      background-color: #ededed;
      position: fixed;
      display: flex;
      padding-left: 20%;
    }

    .navbar--logo{
      padding-top: 1em;
      z-index: 6;
    }

    .navbar--register{
      padding-left: 1em;
      padding-top: 1em;
      z-index: 6;
    }

    .navbar--signin{
      padding-left: 1em;
      padding-top: 1em;
      z-index: 6;
    }

    .navbar--logo{
      padding-top: 1em;
      z-index: 6;
      width: auto;
      height: 2em;
    }

    .contentcontainer{
      padding-top: 60px;
    }


    a{
      text-decoration: none;
    }
      h1 {
    position: fixed;
    top: 40px;
    left: 40px;
    z-index: 6;
    font-size: 20px;
    font-weight: 900;
    font-family: sans-serif;
    text-transform: uppercase;
    > span {
      text-transform: none;
      opacity: .5;
      font-weight: 300;
      font-size: 12px;
    }
  }
    input + label {
      position: fixed;
      top: 22px;
      left: 19px;
      height: 20px;
      width: 28px;
      z-index: 5;
      span {
        position: absolute;
        width: 100%;
        height: 2px;
        top: 50%;
        margin-top: -1px;
        left: 0;
        display: block;
        background: black;
        transition: .5s;
      }
      span:first-child {
        top: 3px;
      }
      span:last-child {
        top: 16px;
      }
    }
    label:hover {
      cursor: pointer;
    }
    input:checked + label {
      span {
        opacity: 0;
        top: 50%;
      }
      span:first-child {
        opacity: 1;
        transform: rotate(405deg);
      }
      span:last-child {
        opacity: 1;
        transform: rotate(-405deg);
      }
    }

    input{
      display: none;
    }
    input ~ nav {
      background: $accent;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;;
      z-index: 3;
      transition: .5s;
      transition-delay: .15s;
      overflow: hidden;
      > ul {
        text-align: center;
        position: absolute;
        top: 23%;
        left: 20%;
        right: 20%;
        > li {
          opacity: 0;
          // transition: .5s;
          // transition-delay: 0s;
          > a {
            text-decoration: none;
            text-transform: uppercase;
            color: black;
            font-weight: 700;
            font-family: sans-serif;
            display: block;
            padding: 30px;
          }
        }
      }
    }
    input:checked ~ nav {
      height: 100%;
      transition-delay: 0s;
      > ul {
        > li {
          opacity: 1;

        }
      }
    }
    // End of nav bar
    .footer__home, .footer__schedule, .footer__attendees, .footer__sponsors, .footer__contact{
      display: none;
    }
    .imagerow__socialmedia{
      display:flex;
      flex-direction: row;
     justify-content: center;
    }
    .footer__FAQ{
      display: none !important;
    }
    .slack--message{
      text-align: center;
    }
    .madebybraid--msg{
      text-align: center;
      display: flex;
      justify-content: center;
    }

    .madebybraid{
      text-align: center;
    }
    .slack{
      display: flex;
      justify-content: center;
    }
    .footer__logodiv{
      display: flex;
      justify-content: center;
    }


  // First breakpoint
    .primary--navbar{
        background-color: $accent;


    }
    #menu{
      background-color: $accent;
    }
  }



// -----------------------------------------------------------

  @media screen and (min-width: 501px){
    .primary--navbar{
      display: flex;
      width: 85%;
      padding-top: 1.5em;
      margin: auto;
      max-width: 1300px;
    }

    .navbar__div{
      order: -1;
    }
    .navbar__div a{
      text-decoration: none;
    }
    #burger{
      display: none !important;
    }

    .navbar--logo{
      width: auto;
      height: 2em;
      margin-top: -0.6em;
    }

    .primary--navbar ul li{
      display: inline-block;
      padding-left: 1.2em;
    }

    .navbar--register, .navbar--signin{
          text-decoration: none;
          font-weight: bold;
    }

    .navbar--register{
      padding-left: 12%;
    }

    .navbar--signin{
      padding-left: 8%;
    }

  .navbar--logo{
        order: -1;
  }

  .fillerspace{
    width: 150px;
    background-color:$accent;
    height: 10%;
  }

  .footer--container{
    width:100%;
    background-repeat: no-repeat;
    background-image: url("~static/footerbackground.png");
  }

  .footer-primary{
    margin: auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 13em;
    padding-top: 13em;
  }

  .footer--credits{
    float: left;
  }

  .footer--socialmedia{
    display: flex;
    flex-direction: column;
    float: right;
  }

  .footer--socialmedia a{
    text-decoration: none;
  }

  .footer__logodiv img{
    width: 10em;
  }

  .madebybraid {
    font-size: 0.6em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  .madebybraid--msg{
    font-size:0.6em;
  }

  .slack{
    width: 100%;
    padding-top: 0.4em;
    padding-bottom: 0.4em;
  }

  .slack p{
    font-size: 0.7em;
  }

  .slack img{
    width: 5.5%;
    margin-left: 2em;
  }
  .footer--imagerow{
    float: right;
  }
  .slack--message{
        float: right;
  }

  .footer--imagerow  ul li a img{
    width: 70%;
  }

  .footer--socialmedia ul{
    float: right;
  }
  .footer--socialmedia ul li{
    display: inline-block;
    padding-left: 1em;
    font-size: 0.6em;
  }


  }
</style>

