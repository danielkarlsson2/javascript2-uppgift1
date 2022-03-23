<template>
  <div class="col">

          <router-link :to="{ name: 'productDetails', params: { id: product._id}}">
              <div class="card h-100">
                  <img :src="product.imageUrl" class="card-img-top"/>

                  <div class="card-body">
                      <h4 class="card-title">{{product.title}}</h4>
                      <p class="card-text">{{product.desc}}</p>
                  </div>

              </div>
          </router-link>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.card:hover {
  border: 1px solid rgba(51, 51, 51, 0.397);
}
.card:hover h4 {
  text-decoration: underline;  
}
.card {
  color: black;
}
</style>