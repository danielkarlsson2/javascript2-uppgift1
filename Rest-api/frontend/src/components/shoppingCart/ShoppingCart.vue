<template>
<ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item"/>
  <div v-if="shoppingCart.length < 1">
      <div class="d-flex justify-content-center align-items-center p-1">
          Cart is empty
      </div>
      <div class="dropdown-divider"></div>
  </div>
  <hr>
<div class="d-flex justify-content-between align-items-center p-2">
    <div class="ms-2">
        Total: <span>{{shoppingCartTotal}}</span> SEK
    </div>
    <button class="btn color m-2">Shop</button>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct.vue'
export default {
  components: { ShoppingCartProduct },
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    }

}
</script>

<style scoped>
    .color:hover {
        color: white;
        background: rgb(32, 143, 143);
    }
span {
    font-weight: bold;
}
</style>