<template>
  <div class="primarycontainer">
    <!-- rename classnames so they arent specific to landingpage -->
  <div class="primary--navbar">
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#"><li>FAQs</li></a>
          <a href="#"><li>Schedule</li></a>
          <a href="#"><li>Attendees</li></a>
          <a href="#"><li>Sponsors</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </div>
    </nav>
    <p class="navbar--logo">beCamp</p>
    <a class="navbar--register" href=""> Register</a>
  </div>
    <div class="contentcontainer">
      <nuxt/>
    </div>
    <footer class="footer-primary">
      <div class="footer--credits">
        <a href=""><img src="http://placehold.it/247x55"></a>
        <p class="madebybraid">@2018 beCamp | All rights reserved.<br>
          Made with luv  by Braid
        </p>
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
          <img src="http://placehold.it/25x25">
          <p class="slack--message">Join the Charlottesville Slack Community</p>
        </div>
        <div class="footer--imagerow">
          <ul class="imagerow__socialmedia">
            <li><a href=""><img src="http://placehold.it/30x30"></a></li>
            <li><a href=""><img src="http://placehold.it/30x30"></a></li>
            <li><a href=""><img src="http://placehold.it/30x30"></a></li>
            <li><a href=""><img src="http://placehold.it/30x30"></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  @media screen and (max-width:500px){
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
    }

    .navbar--register{
      padding-left: 1em;
      padding-top: 1em;
    }
    .contentcontainer{
      padding-top: 60px;
    }

    a{
      text-decoration: none;
    }
    #menuToggle
    {
      display: block;
      top: 20px;
      left: 20px;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;
      position: fixed;
    }

    #menuToggle input
    {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      cursor: pointer;
      opacity: 0;
      z-index: 2;
      -webkit-touch-callout: none;
    }

    #menuToggle span
    {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: #cdcdcd;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;
    }

    #menuToggle span:first-child
    {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
    }

    #menu
    {
      position: absolute;
      width: 110%;
      margin: -380px 0 0 -50px;
      padding: 50px;
      background: #ededed;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      transform-origin: 0% 0%;
      transform: translate(0, 100%);
      position: fixed;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li
    {
      padding: 10px 0;
      font-size: 1.2em;
      text-align: center;
    }

    #menuToggle input:checked ~ ul
    {
      transform: none;
    }

    .footer__home, .footer__schedule, .footer__attendees, .footer__sponsors, .footer__contact{
      display: none;
    }

    .imagerow__socialmedia{
      display:flex;
      flex-direction: row;
     justify-content: center;
    }

    .footer__FAQ{
      text-align: center;
    }

  }
</style>

