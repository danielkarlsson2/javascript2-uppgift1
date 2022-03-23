<template>
<div class="home">

  <Navbar />
  <navbar-mini />
<img id="img-1">
  <div class="container mt-4">
    <router-view/>

  </div>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import NavbarMini from './components/NavbarMini.vue'
export default {
  components: {
    Navbar,
    NavbarMini
  }
}
</script>

<style>
body {
  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(241, 240, 240);
    /* background: black; */
    /* background-image: url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'); */
    /* object-fit: cover; */
  
}  
#img-1 {
  object-fit: cover;
  position: absolute;
  width: 1200px;
  /* height: 100vh; */
}
.home{
  position: relative;
}


</style>
