

<template>
  <!-- 100vh is the screen height -->
  <!-- width:100% --
  height: 0, padding-bottom: 100%>
    <-->
    <div class="container">
      <section class="container-landingpage">
        <div class="innercontainer">
      <section class="landingpage--notice">
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

    <section class="aboutpage">
      <h2 class="beCamp__question">What is beCamp?</h2>
      <section class="aboutpage--movement">
      <!-- add a wrapper for h2 and p -->
        <div class="showcase">
          <h3>An Unconference Movement</h3>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        </div>
        <!-- intrinsic ratio boxes for images -->
        <div class="movement__div">
          <img class="movement__image" src="~static/members1.png">
        </div>
      </section>
      <section class="aboutpage--summercamp">
        <div class="summercamp__div">
          <img class="summercamp__image" src="~static/members2.png">
        </div>
        <div class="summercamp__section">
          <h4>A Summer Camp For Geeks</h4>
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
        </div>
      </section>
    </section>


     <section class="whyjoin">
        <h5>Why should I attend beCamp</h5>
        <div class="lightningbackground">
          <div class="whyjoin__centerer">
          <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
          <p>...And thanks to our wonderful sponsors</p>
        <div class="imagerow">
          <ul class="imagerow__row">
            <li>
              <div class="free1">
                <img class="imagerow--img1" src="~static/pizza.png">
                <span>Free Food</span>
              </div></li>

            <li>
              <div class="free2">
                <img class="imagerow--img2" src="~static/beer.png">
                <span>Free Beverages</span>
              </div>
            </li>
            <li>
              <div class="free3">

                  <img class="imagerow--img3" src="~static/shirt.png">
                   <span>Free Shirt</span>
                </div>
            </li>
          </ul>
        </div>
         <div class="registerButton__box">
           <div class="registerButton__box_inner">
           <a href="" class="registerButton">ready to register?</a>
           </div>
         </div>
          </div>
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
           <li><img class="sponsor1" src="~static/sponsor1.png"></li>
           <li><img class="sponsor2" src="~static/sponsor2.png"></li>
           <li><img class="sponsor3" src="~static/sponsor3.png"></li>
           <li><img class="sponsor4" src="~static/sponsor4.png"></li>
           <li><img class="sponsor5" src="~static/sponsor5.png"></li>
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


<style scoped lang="scss">
  @media screen and (min-width: 300px) and (max-width:500px){
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

  .beCamp__question{
    text-align: center;
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

  @media screen and (min-width: 501px){
    .container{

    }

    .container-landingpage{
        background-repeat: no-repeat;
        background-image: url("~static/background.png");
        // background-image: url("~static/background.png");
        margin-top: -5em;
        background-size: cover;
        padding-bottom: 11em;

    }

    .landingpage--notice{
      display:flex;
      width: 50%;
      margin: auto;
      padding-top: 9em;
      max-width: 900px;
    }

    h2{
      text-align: center;
      padding: 2em;
    }

    .notice--time{
      padding-top: 1.5em;
    }

    .notice--time span{
      font-size: 3em;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      color: $dark-b;
    }

    .notice--description{
      padding-left: 2em;
      width: 40%;
    }

    .notice--description h1{
      font-size: 1.5em;
    }

    .notice--register{
      text-decoration: none;
      text-transform: uppercase;

    }

    .notice--description p{
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    .register__buttonbox{
      background-color: $accent;
      width: 60%;
      padding: 6px;
      text-align: center;
    }

  .notice--register{
    color: $light;
    font-weight: lighter;
    letter-spacing: 2.33px;
    font-size: 0.7em;
  }

  .playbutton{
    max-width: 20%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding-top: 2em;
  }

  .aboutpage--movement{
    display: flex;
    margin: auto;
    justify-content: center;
    width: 80%;
  }

  .aboutpage--summercamp{
    display: flex;
    margin: auto;
    justify-content: center;
    width: 80%;
    padding-top: 1.5em;
  }

  .showcase{
    width: 24%;
    padding-right: 2em;
  }

  .summercamp__section{
    width: 24%;
    padding-left: 2em;
  }

  .lightningbackground{
      background-repeat: no-repeat;
      background-image: url("~static/decorator.png");
      background-size: 100%;
  }

  h5{
    padding-top: 4em;
    padding-bottom: 1em;
    text-align: center;
  }

  .lightningbackground p{
    width: 45%;
    display: block;
    margin: auto;
  }

  .imagerow__row{
    display: flex;
    justify-content: center;
    padding-top: 2em;
    padding-bottom: 1.5em;
  }

  .imagerow--img2{
    // padding-left: 2em;
  }

  .imagerow--img3{
    // padding-left: 2em;
  }

  .free1{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .free2{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .free3{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .imagerow__row li{
    padding: 1em;
  }

  .imagerow__row span{
    padding-top: 1em;
  }

  .free1 img{
    max-width: 60%;
    display:block;
    margin: auto;
  }

    .free2 img{
    max-width: 51%;
    display:block;
    margin: auto;
  }

    .free3 img{
    max-width: 60%;
    display:block;
    margin: auto;
  }

  .registerButton__box{
    width: 45%;
    padding: 6px;
    display: block;
    margin: auto;
    padding-bottom: 15em;
  }
  .registerButton{
    width: 45%;
    font-size: 0.8em;
    text-decoration: none;
    text-transform: uppercase;

  }

  .registerButton__box_inner{
    background-color: $accent;
    width: 8.2em;
    padding: 6px;
    font-size: 0.9em;
    text-align: center;
  }

  h6{
    text-align: center;
    padding-bottom: 0.5em;
  }

  .sponsor p{
    width: 55%;
    display: block;
    margin: auto;
  }

  .sponsor--imagerow{
    width: 60%;
    background-color: gray;
    /* display: block; */
    margin: auto;
    width: 60%;
  }


  .imagerow--container{
    display: flex;
    flex-flow: row wrap;
  }



}
</style>