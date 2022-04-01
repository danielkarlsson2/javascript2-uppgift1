<template>
  <footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-2 pb-0">
    <!-- Section: Social media -->
    <section class="mb-2">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1 fb" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1 tw" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1 gm" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1 ins" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1 lin" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1 gh" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MusicStore Online</a>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>
export default {
  name: 'FooterComponent'

}
</script>

<style>
.fb:hover {
  background-color: rgb(0, 47, 255);
  transform: scale(1.1);
}
.tw:hover {
  background-color: rgb(13, 85, 227);
  transform: scale(1.1);
}
.gm:hover {
  background-color: rgb(227, 59, 13);
  transform: scale(1.1);
}
.ins:hover {
  background-color: rgb(134, 53, 234);
  transform: scale(1.1);
}
.lin:hover {
  background-color: rgb(20, 69, 229);
  transform: scale(1.1);
}
.gh:hover {
  background-color: rgb(55, 55, 56);
  transform: scale(1.1);
}
</style>