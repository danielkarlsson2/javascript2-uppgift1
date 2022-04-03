<template>
<div class="home">

  <Navbar />

      <div class="">         
        <router-view/>
      </div>

  <Footer class="mt-4 footer fixed-bottom"/>
</div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(241, 240, 240);
    position: relative;
  
}  

.color {
  background: rgb(19, 88, 88);
  color: white;
}
.welcome {
  z-index: 25;
}



</style>
