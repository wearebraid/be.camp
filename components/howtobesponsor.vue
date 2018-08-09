<template>
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
</template>

<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  .newsletter{
    text-align: center;
    padding-bottom: 14em;
    padding-top: 6em;
  }
  .newsletter h2{
    text-align: center;
    font-size: 2.9em;
    padding-top: 4em;
    letter-spacing: 1.47px;
  }

  .newsletter p{
    padding: 0.5em;
    padding-bottom: 1.3em;
    color: #C8C8C8;
    letter-spacing: 1.97px;
    font-size: 1.6em;
  }

  .newsletter--email{
      background-color: black;
      width: 50%;
      /* display: flex; */
      display: block;
      margin: auto;
      height: 41px;
  }

  .newsletter--email{
    background-color: #EEF0F2;
    display: block;
    margin: auto;
    height: 3.2em;
    border-radius: 9px;
  }

  .newsletter--email input{
    width: 82%;
    height: 100%;
    float: left;
    display: block;
    margin: auto;
    background-color: #EEF0F2;
    border: none;
    padding-left: 4em;
  }

  .newsletter--email input::placeholder{
   color: green;
   margin-left: 1em;
  }


  .newsletter--email button{
    background-color: #FF750F;
    color: white;
    height: 69%;
    border: none;
    text-transform: uppercase;
    font-size: 0.5em;
    width: 93%;
    border-radius: 5px;
  }

  .joinnow__div{
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 200px) and (max-width: 574px){
      .joinnow__div{
        display: none !important;
        }

      .joinnow__div2{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        display: block;
        margin: auto;
      }

      .joinnow__div2 button{
          height: 3.2em;
          width: 100%;
          background-color: #FF750F;
          color: white;
          border: none;
          text-transform: uppercase;
          font-size: 0.5em;
          border-radius: 5px;
      }
    }
  }

  input:focus, textarea {
      outline: none !important;
  }

  input::placeholder{
    padding-left: 2em;
  }

  input:active{
    padding-left:2em;
  }

</style>
