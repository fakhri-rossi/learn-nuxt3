<template>
  <UserNavbar current="home" />
  <div>
    Ini adalah Home
  </div>
</template>

<script  setup>
  const goToAbout = () => {
    navigateTo({
      path: '/about',

    })
  }

  useSeoMeta({
    title: 'Homepage',
    description: 'Rumahhh'
  });
</script>

<style>

</style>