<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-black p-3">
  <!-- Container wrapper -->
  <div class="container-fluid d-flex">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse leftside" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link to="/">
        <!-- <a class="navbar-brand mt-2 mt-lg-0" href="#"><i class="fa-solid fa-music m-3"></i> -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#"><img src="https://media.kidozi.com/unsafe/600x600/img.kidozi.com/design/600/600/0a0909/45997/baaf5926892046a38f0ed7d359eafcca.png.jpg" alt="" class="ms-4 me-5 logo">
            MusicStore Online       
        </a>
      </router-link>

      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center rightside">
        <div class="dropdown ">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow "
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart"></i>
                <span v-if="cartCount" class="badge rounded-pill badge-notification bg-danger">{{cartCount}}</span>
              </a>
              <div @click="$event.stopPropagation()"
                class="dropdown-menu dropdown-menu-lg-end dropdown-menu-right  cartWindow"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <ShoppingCart />
              </div>
            </div>
   

    <!-- <div class="d-flex align-items-center m-3"> -->
      <!-- Icon -->
      <!-- <div class="dropdown">
          <a class="text-reset me-3" href="#">
            <i class="fas fa-shopping-cart"></i>
          
          </a>
          <Shopping-cart />       

      </div> -->

      
      <!-- Avatar -->
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-lg-end dropdown-menu-right"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>

     </div>
    <!-- Right elements -->
  <!-- </div> -->
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from './shoppingCart/ShoppingCart.vue'

export default {
  components: {
    ShoppingCart
    },
    name: 'NavbarComponent',
    computed: {
      ...mapGetters(['cartCount'])
    }
}
</script>

<style scoped>
.nav-link:hover {
    /* background: rgb(206, 214, 221); */
    text-decoration: underline;
}
.navbar{
  color: white;
}
.fa-shopping-cart,
.rounded-circle {
  transform: scale(1.3);
  margin-left: 1rem;
}

.cartWindow {
  min-width: 400px;
}
.container-fluid {
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
}
.logo {
  /* transform: scale(.5); */
  max-height: 80px;
  
}

@media only screen and (max-width: 600px){
  .kundvagn {
    align-items: center;
    
    max-width: 300px;
  }
}
</style>