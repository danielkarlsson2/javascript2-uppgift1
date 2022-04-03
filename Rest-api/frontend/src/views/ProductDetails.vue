<template>

<div v-if="product" class="vh-100 container mt-4">
    <div class="card singleCard ">
        <div class="col-lg-6">        
            <img :src="product.imageUrl" class="img-fluid">        
        </div>

        <div class="col-lg-6 mt-4">
            <div class="d-flex headline">
                <h2 class="head">{{product.title}}</h2>
                <button @click="addProduct({ product, quantity})" class="btn btn-add me-3"><i class="fa-solid fa-cart-plus me-3"></i>Add to cart</button>
            </div>
                <hr>
            <p>{{product.desc}}</p>
            <h3>{{product.price}} SEK</h3>
        </div>

    <!-- <h1>{{product._id}}</h1> -->
    </div>

</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    props: ['id'],
    data() {
        return {            
            quantity: 1 
        }
    },
    methods: {
        ...mapActions(['getOneProduct', 'addProduct']),
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getOneProduct(this.id) 
    }
}
</script>

<style scoped>
.head {
    font-weight: 700;
}
.singleCard{
    border-radius: 10px;
    display: flex;
    flex-direction: row;
}
.btn-add {
    background: rgb(19, 88, 88);
    color: white;
    
}
.btn-add:hover {
    background: rgb(34, 153, 153);
}
.headline {
    justify-content: space-between;
}
h3 {
    color: red;
}

</style>