<template>
    <div class="card">
    <div class="card-header">{{product_detail}}</div>
    <div class="card-body">
      <p class="card-text"><strong>Product Name:</strong>{{product.name}}</p>
      <p class="card-text"><strong>Price:</strong>{{product.price}}</p>
      <p class="card-text"><strong>Description:</strong>{{product.description}}</p>
    </div>
    <div class="card-footer text-center">
      <button class="btn btn-success">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['product_detail','product']
}
</script>

<style>

</style>