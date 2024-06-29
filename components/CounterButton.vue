<template>
  <div>
    <button @click="num=num+1"> {{ num }} </button>
  </div>
</template>

<script setup>
  const num = ref(0)
</script>

<style>
</style>