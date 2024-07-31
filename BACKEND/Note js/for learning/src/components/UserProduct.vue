<template>
  <div class="card">
    <div class="card-header">{{user_name}}</div>
    <div class="card-body">
      <p class="card-text"><strong>Name:</strong>{{user.name}}</p>
      <p class="card-text"><strong>Age:</strong>{{user.age}}</p>
      <p class="card-text"><strong>Location:</strong>{{user.location}}</p>
    </div>
    <div class="card-footer text-center">
      <!-- <button class="btn btn-primary">Contact</button> -->
      <slot name="footer">
        <button class="btn btn-primary">Contact</button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
    props: ['user_name','user'],
}
</script>

<style>

</style>