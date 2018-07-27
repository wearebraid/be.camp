<template>
  <!-- 100vh is the screen height -->
  <!-- width:100% --
  height: 0, padding-bottom: 100%>
    <-->
    <div class="container">
      <section class="container-landingpage">
        <nav class="landingpage--navbar">
          <div class="landingpage--logo"></div>
          <ul>
            <!-- add a tags with hrefs -->
            <li><a href=""> </a> </li>
            <li>Schedule</li>
            <li>Attendees</li>
            <li>Sponsors</li>
            <li>Contact</li>
          </ul>
        <div class="navbar--account">
          <div class="account__register"><a href=""></a></div>
          <div class="account__signin"><a href=""></a></div>
         </div>
       </nav>
      <section class="landingpage--notice">
        <section class="notice--time">
          <p>September 28 - 29, 2018 | Rice Hall @UVa</p>
          <!-- pseudoelements for days, hours -->
          <span class="time__days">78:</span>
          <span class="time__hours">08:</span>
          <span class="time__minutes">05:</span>
          <span class="time__seconds">51:</span>
          <button class="playbutton"></button>
        </section>
        <section class="notice--description">
          <h1>Join the Other 75 attendees for beCamp 2018</h1>
          <p>Quam si explicavisset, non tam haesitaret. Sin laboramus, quis est, qui alienae modum statuat industriae?</p>
          <a href="">register now</a>
        </section>
      </section>
     </section>

     <section class="aboutpage">
       <h6>What is beCamp</h6>
       <section="aboutpage--movement">
       <!-- add a wrapper for h2 and p -->
       <div class="showcase">
         <h2>An Unconference Movement</h2>
         <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        </div>
         <!-- intrinsic ratio boxes for images -->
         <div class="movement__image">
          <img src="">
         </div>
       </section>
      <section class="aboutpage--summercamp">
        <div class="summercamp__image">
          <img src="">
        </div>
        <div class="summercamp__section">
          <h3>A Summer Camp For Geeks</h3>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        </div>
     </section>

     <section class="whyjoin">
        <div class="lightningbackground">
          <h4>Why Should I attend beCamp</h4>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        <div class="imagerow">
        <ul>
          <li><img src=""></li>
          <li><img src=""></li>
          <li><img src=""></li>
        </ul>
         </div>
         <a href="" class="registerButton"></a>
       </div>
     </section>

     <section class="sponsor">
       <!-- lists of images, single list of sponsors and use flexbox to style them so they have multiple rows
       flex: row, justify-content: space-between, flex-wrap: wrap;
        -->
       <div class="sponsor--imagerow">
         <ul>
           <li><img src=""></li>
           <li><img src=""></li>
           <li><img src=""></li>
           <li><img src=""></li>
           <li><img src=""></li>
           <li><img src=""></li>
         </ul>

       </div>
       <p>Join one of these amazing sponsors by supporting your local tech community</p>
       <a href="">See How to Help</a>
     </section>


      <section class="newsletter">
        <h5>Join the beCamp newsletter!</h5>
        <p>Get all of the latest beCamp news</p>
        <div class="">
          <input placeholder="Your email address">
          <button>join now!</button>
        </div>
      </section>

      <footer class="footer-primary">
        <div class="footer--credits">
          <a href=""><img src=""></a>
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
          <div class="footer--imagerow">
            <ul>
              <li><a href=""><img src=""></a></li>
              <li><a href=""><img src=""></a></li>
              <li><a href=""><img src=""></a></li>
              <li><a href=""><img src=""></a></li>
            </ul>
          </div>
        </div>
      </footer>
  </div>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>