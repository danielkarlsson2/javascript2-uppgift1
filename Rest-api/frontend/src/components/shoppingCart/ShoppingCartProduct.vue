<template>
  <div class="d-flex justify-content-between align-items-center p-2">
      <div class="align-items-center d-flex justify-content-between">
          <div class="img-container">
              <img :src="item.product.imageUrl" class="img-fluid">
          </div>    
          <div class="ms-3">
              <div class="fw-bold">{{item.product.title}}</div>  
              <div> {{item.quantity}} x {{item.product.price }}</div>
          </div>
      </div>
      <div class="btn-group-sm">
        <button class="btn color">-</button>
        <button class="btn color">+</button>
      </div>
      <button @click="deleteProduct({product, quantity})" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions(['deleteProduct'])
  }
}
</script>

<style scoped>
.img-container {
  width: 90px;
}

</style>