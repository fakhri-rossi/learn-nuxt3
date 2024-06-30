<template>
  <div>
    <ul>
      <li>
        Username: {{ $route.params.username }}
      </li>
    </ul>

  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'dashboard'
  })
</script>

<style>

</style>