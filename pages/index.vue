<template>
  <!-- 100vh is the screen height -->
  <!-- width:100% --
  height: 0, padding-bottom: 100%>
    <-->
    <div class="container">
      <section class="container-landingpage">
      <section class="landingpage--notice">
        <section class="notice--time">
          <p class="launchdate">September 28 - 29, 2018 | Rice Hall @UVa</p>
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
      <h2>What is beCamp</h2>
      <section class="aboutpage--movement">
      <!-- add a wrapper for h2 and p -->
        <div class="showcase">
          <h3>An Unconference Movement</h3>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        </div>
        <!-- intrinsic ratio boxes for images -->
        <div class="movement__image">
          <img src="http://placehold.it/550x367">
        </div>
      </section>
      <section class="aboutpage--summercamp">
        <div class="summercamp__image">
          <img src="http://placehold.it/550x367">
        </div>
        <div class="summercamp__section">
          <h4>A Summer Camp For Geeks</h4>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        </div>
      </section>
    </section>

     <section class="whyjoin">
        <div class="lightningbackground">
          <h5>Why Should I attend beCamp</h5>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        <div class="imagerow">
        <ul>
          <li><img src="http://placehold.it/121x121"></li>
          <li><img src="http://placehold.it/105x125"></li>
          <li><img src="http://placehold.it/155x125"></li>
        </ul>
         </div>
         <a href="" class="registerButton"></a>
       </div>
     </section>

     <section class="sponsor">
       <!-- lists of images, single list of sponsors and use flexbox to style them so they have multiple rows
       flex: row, justify-content: space-between, flex-wrap: wrap;
        -->
      <h6>How can I become a beCamp sponsor?</h6>
      <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
       <div class="sponsor--imagerow">
         <ul>
           <li><img src="http://placehold.it/333x82"></li>
           <li><img src="http://placehold.it/147x147"></li>
           <li><img src="http://placehold.it/257x97"></li>
           <li><img src="http://placehold.it/300x45"></li>
           <li><img src="http://placehold.it/400x78"></li>
         </ul>
       </div>
       <h2>Join one of these amazing sponsors by supporting your local tech community</h2>
       <a href="">See How to Help</a>
     </section>

      <section class="newsletter">
        <h2>Join the beCamp newsletter!</h2>
        <p>Get all of the latest beCamp news</p>
        <div class="">
          <input placeholder="Your email address">
          <button>join now!</button>
        </div>
      </section>

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
