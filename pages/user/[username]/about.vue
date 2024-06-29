<template>
  <div>
      <h1>About</h1>
      <p>About {{ $route.params.username }}</p>
      <p>{{ username }}</p>
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const username = route.params.username
</script>

<style>

</style>