<template>
  <div>
    Ini Kontak {{ $route.params.username }}
  </div>
</template>

<script lang="ts" setup>
    definePageMeta({
    layout: 'dashboard'
  })
</script>

<style>

</style>