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
          <span class="time__seconds">51</span>
          <button class="playbutton">(>)</button>
        </section>
        <section class="notice--description">
          <h1>Join the Other 75 attendees for beCamp 2018</h1>
          <p>Quam si explicavisset, non tam haesitaret. Sin laboramus, quis est, qui alienae modum statuat industriae?</p>
          <a class="notice--register" href="">register now</a>
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
        <div class="movement__div">
          <img class="movement__image" src="http://placehold.it/550x367">
        </div>
      </section>
      <section class="aboutpage--summercamp">
        <div class="summercamp__div">
          <img class="summercamp__image" src="http://placehold.it/550x367">
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
          <p>...And thanks to our wonderful sponsors</p>
        <div class="imagerow">
          <ul class="imagerow__row">
            <li><img class="imagerow--img1" src="http://placehold.it/121x121"></li>
            <li><img class="imagerow--img2" src="http://placehold.it/105x125"></li>
            <li><img class="imagerow--img3" src="http://placehold.it/155x125"></li>
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
         <ul class="imagerow--container">
           <li><img class="sponsor1" src="http://placehold.it/333x82"></li>
           <li><img class="sponsor2" src="http://placehold.it/147x147"></li>
           <li><img class="sponsor3" src="http://placehold.it/257x97"></li>
           <li><img class="sponsor4" src="http://placehold.it/300x45"></li>
           <li><img class="sponsor5" src="http://placehold.it/400x78"></li>
         </ul>
       </div>
       <h2>Join one of these amazing sponsors by supporting your local tech community</h2>
       <a class="howtohelp" href="">See How to Help</a>
     </section>

      <section class="newsletter">
        <h2>Join the beCamp newsletter!</h2>
        <p>Get all of the latest beCamp news</p>
        <div class="newsletter--email">
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


<style scoped>
  @media screen and (max-width: 500px){
    .time__days, .time__hours, .time__minutes, .time__seconds, .playbutton{
      display: none !important;
    }

    .notice--register{
      display: none;
    }

  .aboutpage--movement{
      display: flex;
      flex-flow: column;
  }

  .movement__image{
    max-width: 80%;
    max-height: auto;
    order: 1;
  }
  .showcase{
    order: 2;
  }
  .summercamp__image{
    max-width: 80%;
    max-height: auto;
  }

  .imagerow__row{
    display: flex;
    padding-left: 0.5em;
    padding-top: 0.5em;
  }

  .imagerow--img1, .imagerow--img2, .imagerow--img3{
      max-width: 90%;
      height: auto;
  }

  .sponsor1, .sponsor2,.sponsor3, .sponsor4, .sponsor5{
      max-width: 80%;
      height: auto;
      display: block;
      margin: 0 auto;
      padding-top: 2%;
  }
    h1, h2, h3, h4, h5, h6{
      text-align: center;
    }
    p{
      text-align: center;
    }
  .movement__image, .summercamp__image{
    margin-left: 10%;
  }

  .howtohelp{
    text-align: center;
  }

  .newsletter--email{
    display: flex;
    justify-content: center;
  }

  .sponsor{
    text-align: center;
  }


  }

</style>