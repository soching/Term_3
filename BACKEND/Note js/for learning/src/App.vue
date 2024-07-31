<template>
<div class="container">
  <!-- Product Details -->
  <div class="row">
    <div class="col-md-4" v-for="product in products" :key="product.id"> 
      <ProductDetailsCardVue product_detail="Product Detail" :product="product"/>
      </div>
  </div>

  <!-- Users Prducts -->
  <div class="row">
    <div class="col-md-4" v-for="user in users" :key="user.id">
      <UserProductVue user_name="User Profile" :user="user"/>
    </div>
  </div>
 
</div>
</template>

<script>
import ProductDetailsCardVue from './components/ProductDetail.vue';
import UserProductVue from './components/UserProduct.vue';
export default {
  components: {
    ProductDetailsCardVue,
    UserProductVue
  },
  data(){
    return {
      products:[
        {
          "id":1,
          "name": "apples",
          "price": 10,
          "description": "this is the fruits"
        },
        {
          "id":2,
          "name": "banana",
          "price": 10,
          "description": "this is the fruits"
        },
        {
          "id":3,
          "name": "papaya",
          "price": 10,
          "description": "this is the fruits"
        },
      ],
      users:[
        {
          'id':1,
          "name": "Ching",
          "age": 18,
          "location": "Oddarmeanchey"
        },
        {
          'id':2,
          "name": "Reach",
          "age": 19,
          "location": "Phnom Penh"
        },
        {
          'id':3,
          "name": "Korng",
          "age": 20,
          "location": "Kompongcham"
        },
      ]
    }
  }
};
</script>

<style>
</style>