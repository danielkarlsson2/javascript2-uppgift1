<template>
  <div class="homeview">

      <div id="carouselExampleIndicators" class="carousel slide vh-100" data-mdb-ride="carousel">
            <div class="carousel-indicators">
              <button type="button"
                data-mdb-target="#carouselExampleIndicators"
                data-mdb-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1">
                    </button><button type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-mdb-target="#carouselExampleIndicators"
                      data-mdb-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
            </div>
            <div class="carousel-inner carousel">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt="Guitar"/>
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt="DJ"/>
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" class="d-block w-100" alt="Studio"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
      </div>
</div>
     
      
       
</template>

<script>

export default {
  
}
</script>

<style>

 @media (max-width: 800px) {
    .homeview {
      height: 100vh;
    }
  
  }

</style>
