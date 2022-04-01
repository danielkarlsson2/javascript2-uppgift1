<template>
  
  <nav class="navbar navbar-expand-lg navbar-dark navbarMini">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      <!-- Left links -->
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Guitars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Keyboards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Drums</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Studio</a>
        </li>
        <!-- Navbar dropdown -->
        <!-- <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a> -->
          <!-- Dropdown menu -->
          <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul> -->
        <!-- </li> -->
        
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
</template>

<script>
export default {

}
</script>

<style>
.navbarMini{
    background: rgb(19, 88, 88);
    color: white;
}
</style>