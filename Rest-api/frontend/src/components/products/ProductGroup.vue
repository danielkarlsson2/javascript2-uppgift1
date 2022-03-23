<template>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        <Product-card v-for="product in products" :key="product._id" :product="product" />
       
  
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>