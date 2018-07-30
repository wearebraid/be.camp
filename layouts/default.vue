<template>
  <div class="primarycontainer">
    <!-- rename classnames so they arent specific to landingpage -->
    <nav class="primarycontainer--navbar">
      <div class="navbar--logo"></div>
      <ul>
        <li><a href="">Schedule</a> </li>
        <li><a href="">Attendees</a> </li>
        <li><a href="">Sponsors</a> </li>
        <li><a href="">Contact</a> </li>
      </ul>
      <div class="navbar--account">
        <div class="account__register"><a href=""></a></div>
        <div class="account__signin"><a href=""></a></div>
      </div>
    </nav>
    <div class="contentcontainer">
      <nuxt/>
    </div>
    <footer class="footer-primary">
      <div class="footer--credits">
        <a href=""><img src="http://placehold.it/247x55"></a>
        <p>Text</p>
      </div>
      <div class="footer--socialmedia">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Schedule</a></li>
          <li><a href="">Attendees</a></li>
          <li><a href="">Sponsors</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <div class="slack">
          <img src="http://placehold.it/25x25">
          <p class="slack--message">Join the Charlottesville Slack Community</p>
        </div>
        <div class="footer--imagerow">
          <ul>
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

<style>
</style>
