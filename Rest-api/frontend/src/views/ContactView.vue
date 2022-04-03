<template>
  <div class="vh-100 container">
    <div class="contact d-flex justify-content-between">
        <div class="left mt-5">
            <h3>Please contact us:</h3>
              <br>
            <p><strong>Phone:</strong></p>
                <p>0123 45 67 89</p>
              <br>
              <p><strong>Adress:</strong></p>
              <p>742 Evergreen Terrace <br>Springfield</p>
        </div>

        <div class="right mt-5 picture">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Music_Store_at_night.jpg" alt="" class="img-store rounded img-fluid">
        </div>
    </div>
  </div>

</template>

<script>
export default {

}

</script>

<style scoped>

  .img-store {
    max-height: 500px;
  }

 @media (max-width: 800px) {
    .contact {
      flex-direction: column;
    
    }
  
  }
</style>