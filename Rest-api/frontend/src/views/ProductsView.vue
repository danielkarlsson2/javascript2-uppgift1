<template>
  <div>
      <h1 class="text-center">Products</h1>
      <ProductGroup class="mt-2"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductGroup from '../components/products/ProductGroup.vue'

export default {
  components: { ProductGroup },
  methods: {
    ...mapActions(['getAllProducts'])
  },
  created() {
    this.getAllProducts()
  }
  
}
</script>

<style>

</style>