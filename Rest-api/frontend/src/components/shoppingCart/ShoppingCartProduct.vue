<template>
  <div class="d-flex justify-content-between align-items-center p-2">
      <div class="align-items-center d-flex justify-content-between">
          <div class="img-container">
              <img :src="item.product.imageUrl" class="img-fluid">
          </div>    
          <div class="ms-3 me-4 cart-title">
              <div class="fw-bold">{{item.product.title}}</div>  
              <div> {{item.quantity}} x {{item.product.price }}</div>
          </div>
      </div>
      <div class="btn-group-sm">
        <button class="btn color" @click="subtractProduct({product: item.product, quantity})" >-</button>
        
        <button class="btn color" @click="addProduct({ product: item.product, quantity})">+</button>
      </div>
      <button @click="deleteProduct(item.product)" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item', 'id'],
   data() {
        return {            
            quantity: 1 
        }
    },
  methods: {
    ...mapActions(['addProduct', 'subtractProduct', 'deleteProduct']),
  
  },
  
  
}
</script>

<style scoped>
.img-container {
  width: 80px;
}
.cart-title {
  max-width: 110px;
}

</style>