<template>
<div class="card singleCard ">
    <div class="col-lg-6">        
        <img :src="product.imageUrl" class="img-fluid">        
    </div>
    <div class="col-lg-6 mt-4">
        <h2 class="head">{{product.title}}</h2>
        <hr>
        <p>{{product.desc}}</p>
    </div>
  <!-- <h1>{{product._id}}</h1> -->
</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    props: ['id'],
    methods: {
        ...mapActions(['getOneProduct'])
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
    border: 1px solid rgba(0, 0, 0, 0.116);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
}

</style>