<template>
  <!-- 100vh is the screen height -->
  <!-- width:100% --
  height: 0, padding-bottom: 100%>
    <-->
  <div class="container">
    <page-hero />

    <section class="aboutpage">
      <h2 class="beCamp__question">What is beCamp?</h2>
      <div class="aboutpage--container">
        <div class="aboutpage__decorator"></div>
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
      </div>
    </section>

     <section class="whyjoin">
        <div class="lightningbackground">
          <div class="whyjoin__centerer">
              <h5>Why should I attend beCamp?</h5>
              <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.<br><br>
              <span class="thankssponsors">...And thanks to our wonderful sponsors</span></p>
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
       <div class="sponsor--imagerow">
         <h6>How can I become a beCamp sponsor?</h6>
         <p>Maecenas id pulvinar risus, cursus hendrerit nunc. Sed accumsan, turpis non congue volutpat, elit mi vehicula tortor, tincidunt vulputate magna est eu lorem. Aenean tincidunt eros urna, at faucibus quam bibendum sed. Mauris consequat augue nisl, varius luctus nisi blandit.</p>
         <ul class="imagerow--container">
           <li><img class="sponsor1" src="~static/sponsor1.png"></li>
           <li><img class="sponsor2" src="~static/sponsor2.png"></li>
           <li><img class="sponsor3" src="~static/sponsor3.png"></li>
           <li><img class="sponsor4" src="~static/sponsor4.png"></li>
           <li><img class="sponsor5" src="~static/sponsor5.png"></li>
         </ul>
         <h2 class="supportstatement">Join one of these amazing sponsors by supporting your local tech community</h2>
         <div class="howtohelp--box">
            <a class="howtohelp" href="">See How to Help</a>
         </div>
       </div>

     </section>

      <section class="newsletter">
          <h2>Join the beCamp newsletter!</h2>
          <p>Get all of the latest beCamp news</p>
          <div class="newsletter--email">
            <input placeholder="Your email address">
            <div class="joinnow__div">
              <button>join now!</button>
            </div>
          </div>
          <div class="joinnow__div2">
            <button>join now!</button>
          </div>
      </section>

  </div>
</template>
<script>
export default {

};
</script>


<style scoped lang="scss">
.notice--register {
  display: none;
}

.aboutpage--movement {
  display: flex;
  flex-flow: column;
}

.beCamp__question {
  text-align: center;
}
.movement__image {
  max-width: 80%;
  max-height: auto;
  order: 1;
}
.showcase {
  order: 2;
}
.summercamp__image {
  max-width: 90%;
  max-height: auto;
}

.imagerow__row {
  display: flex;
  padding-left: 0.5em;
  padding-top: 0.5em;
}

.imagerow--img1,
.imagerow--img2,
.imagerow--img3 {
  max-width: 90%;
  height: auto;
}

.sponsor1,
.sponsor2,
.sponsor3,
.sponsor4,
.sponsor5 {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
  padding-top: 2%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-align: center;
}
p {
  text-align: center;
}
.movement__image,
.summercamp__image {
  margin-left: 10%;
}

.howtohelp {
  text-align: center;
}

.newsletter--email {
  display: flex;
  justify-content: center;
}

.sponsor {
  text-align: center;
}

.aboutpage {
  width: 100%;
}

.aboutpage--container {
  width: 89%;
  margin: auto;
}

h2 {
  padding-top: 2em;
  font-size: 1em;
}

.beCamp__question {
  padding-bottom: 1em;
}

.aboutpage--movement {
  display: flex;
  margin: auto;
  justify-content: center;
}

.aboutpage--summercamp {
  display: flex;
  margin: auto;
  justify-content: center;
  padding-top: 1.5em;
}
.aboutpage h2 {
  text-align: center;
  font-size: 3em;
}

.showcase {
  width: 35%;
  padding-right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 34px;
}
.showcase h3 {
  font-size: 1.4em;
  float: right;
}

.showcase p {
  letter-spacing: 2.53px;
  padding-top: 0.5em;
  color: #363537;
}

.movement__div img {
  max-width: 90%;
}

.summercamp__section {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 34px;
}

.summercamp__section h4 {
  font-size: 1.4em;
  color: #363537;
  padding-bottom: 0.5em;
}

.summercamp__section p {
  letter-spacing: 2.53px;
}

.summercamp__image {
  max-width: 90%;
}

.lightningbackground {
  background-repeat: no-repeat;
  background-image: url("~static/decorator.png");
  background-size: 100%;
  padding-top: 4em;
  padding-bottom: 3em;
}

h5 {
  padding-top: 4em;
  padding-bottom: 0.5em;
  font-size: 2.9em;
  letter-spacing: 1.75px;
}

.lightningbackground p {
  display: block;
  margin: auto;
}

.whyjoin__centerer {
  width: 46%;
  display: block;
  margin: auto;
}

.whyjoin__centerer p {
  letter-spacing: 2.53px;
  line-height: 34px;
}

.whyjoin__centerer span {
  font-weight: bold;
  color: $dark;
}

.thankssponsors {
  font-size: 1.4em;
}

.imagerow li {
  font-size: 1.2em;
}

.imagerow__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-around;
  padding-top: 2em;
  padding-bottom: 1.5em;
  margin: auto;
}

.free1 {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.free2 {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.free3 {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.imagerow__row li {
  padding: 1em;
}

.imagerow__row span {
  padding-top: 1em;
}

.free1 img {
  display: block;
  margin: auto;
}

.free2 img {
  display: block;
  margin: auto;
}

.free3 img {
  display: block;
  margin: auto;
}

.registerButton__box {
  padding: 6px;
  display: block;
  margin: auto;
  padding-bottom: 13em;
}
.registerButton {
  width: 45%;
  font-size: 0.8em;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0px 1px 0px 5px #ff8000;
}
.registerButton__box_inner a {
  color: white;
}

.registerButton__box_inner {
  background-color: #ff750f;
  width: 9.9em;
  padding: 18px;
  font-size: 1.2em;
  text-align: center;
  border-radius: 7px;
}

.newsletter {
  background-repeat: no-repeat;
  background-image: url("~static/decorator.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.newsletter p {
  font-size: 2em;
}
h6 {
  padding-bottom: 0.5em;
  font-size: 2.9em;
  letter-spacing: 1.75px;
}

.sponsor p {
  width: 64%;
  padding-top: 0.5em;
  padding-bottom: 1em;
  letter-spacing: 2.53px;
}

.sponsor--imagerow {
  margin: auto;
  width: 46%;
}

.imagerow--container {
  display: flex;
  flex-flow: row wrap;
}

.imagerow--container li img {
  height: auto;
  padding-top: 1.5em;
}

.howtohelp--box {
  background-color: #ff750e;
  width: 8.2em;
  padding: 11px;
  font-size: 1.4em;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 8px 10px #888888;
  box-shadow: 0px 1px 0px 5px #ff8000;
}

.howtohelp {
  text-decoration: none;
  color: white;
  font-size: 0.7em;
  text-transform: uppercase;
}

.newsletter {
  text-align: center;
  padding-bottom: 14em;
  padding-top: 6em;
}

.newsletter h2 {
  text-align: center;
  font-size: 2.9em;
  padding-top: 4em;
  letter-spacing: 1.47px;
}

.sponsor--imagerow p {
  width: 100%;
}

.supportstatement {
  padding-bottom: 2em;
  font-size: 1.4em;
}

.newsletter p {
  padding: 0.5em;
  padding-bottom: 1.3em;
  color: #c8c8c8;
  letter-spacing: 1.97px;
  font-size: 1.6em;
}

.newsletter--email {
  background-color: black;
  width: 50%;
  /* display: flex; */
  display: block;
  margin: auto;
  height: 41px;
}

.newsletter--email {
  background-color: #eef0f2;
  // width: 50%;
  display: block;
  margin: auto;
  height: 3.2em;
}

.newsletter--email input {
  width: 82%;
  height: 100%;
  float: left;
  display: block;
  margin: auto;
  background-color: #eef0f2;
  border: none;
}

.newsletter--email button {
  background-color: #ff750f;
  color: white;
  height: 69%;
  border: none;
  text-transform: uppercase;
  font-size: 0.5em;
  width: 93%;
  border-radius: 5px;
}

.joinnow__div {
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input:focus,
textarea {
  outline: none !important;
}

input::placeholder {
  padding-left: 2em;
}

input:active {
  padding-left: 2em;
}

@media screen and (min-width: 200px) and (max-width: 574px) {
  .joinnow__div {
    display: none !important;
  }

  .joinnow__div2 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    display: block;
    margin: auto;
    margin-top: 1em;
  }

  .joinnow__div2 button {
    height: 3.2em;
    width: 100%;
    background-color: #ff750f;
    color: white;
    border: none;
    text-transform: uppercase;
    font-size: 0.5em;
    border-radius: 5px;
  }
}

@media screen and (max-width: 680px) {
  h2.beCamp__question {
    font-size: 2em;
  }

  img.movement__image {
    display: none;
  }

  .aboutpage--container {
    width: 100%;
    margin: auto;
  }

  .aboutpage--movement {
    padding-bottom: 2em;
  }

  .aboutpage--movement p {
    font-size: 0.7em;
  }

  .aboutpage--movement:before {
    background-image: url("~static/members1.png");
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    width: 100%;
    content: " ";
    background-image: url(/_nuxt/img/members1.81155df.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.08;
    height: 32%;
  }

  img.summercamp__image {
    display: none !important;
  }

  .aboutpage--summercamp:before {
    background-image: url("~static/members2.png");
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    width: 100%;
    content: "";
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    opacity: 0.08;
    height: 32%;
  }

  .aboutpage--summercamp p {
    font-size: 0.7em;
  }

  .whyjoin__centerer h5 {
    font-size: 1.7em;
  }

  .whyjoin__centerer p {
    font-size: 0.8em;
  }

  .summercamp__section {
    padding-top: 1.6em;
    width: 90%;
  }

  .whyjoin__centerer {
    width: 90%;
  }

  .showcase {
    width: 90%;
    padding-top: 1.5em;
  }

  .sponsor--imagerow {
    width: 90%;
  }

  .sponsor--imagerow h6 {
    font-size: 1.9em;
  }

  .registerButton__box {
    display: none !important;
  }

  .whyjoin {
    padding-top: 4em;
  }

  a.navbar--register {
    letter-spacing: 1px;
  }

  a.navbar--signup {
    letter-spacing: 1px;
  }

  .sponsor {
    padding-top: 6em;
  }

  .imagerow--container {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-flow: column;
  }

  .newsletter h2 {
    font-size: 2.9em;
  }
  .newsletter p {
    font-size: 2em;
  }
}
@media screen and (max-width: 860px) {
  .howtohelp--box {
    display: block;
    margin: auto;
  }

  .footer-primary {
    width: 86%;
  }

  .footer--socialmedia {
    font-size: 0.7em;
    padding-top: 1.2em;
  }

  .aboutpage {
    background-repeat: no-repeat;
    background-image: url("~static/decorator.png");
    background-size: cover;
  }

  .sponsor {
    background-repeat: no-repeat;
    background-image: url("~static/decorator.png");
    background-size: cover;
  }
}
@media screen and (max-width: 1203px) {
  .aboutpage--movement {
    flex-flow: row wrap;
  }

  .showcase {
    width: 78%;
    padding-right: 0;
    order: -1;
  }

  .movement__div {
    order: -2;
  }

  .movement__div img {
    max-width: 100%;
  }

  .aboutpage--summercamp {
    flex-flow: row wrap;
  }

  .summercamp__image {
    max-width: 100%;
  }

  .summercamp__section {
    width: 78%;
  }

  .summercamp__div img {
    padding-top: 2em;
  }
}
@media screen and (max-width: 1521px) {
  .whyjoin__centerer {
    width: 66%;
  }

  .sponsor--imagerow {
    width: 68%;
  }

  .imagerow--container {
    justify-content: space-between;
  }
}

@media screen and (min-width: 803px) {
  .aboutpage--movement {
    display: flex;
    flex-direction: row;
  }
  .movement__image,
  .summercamp__image {
    margin-left: 0;
    margin-right: 0;
  }

  .showcase {
    order: -1;
  }
}
@media screen and (min-width: 1250px) {
  .newsletter--email {
    width: 45%;
    max-width: 660px;
  }
  .newsletter {
    display: flex;
    justify-content: center;
  }
}
</style>
