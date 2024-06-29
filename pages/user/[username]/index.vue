<template>
  <div>
    <UserNavbar :username="$route.params.username" />
    <h1>Dashboard</h1>
    
    <ul>
      <li>
        Username: {{ $route.params.username }}
      </li>
    </ul>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>