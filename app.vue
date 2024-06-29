<script setup>
  const showHeader = ref(false);

  const toggleHeader = () => {
    showHeader.value = !showHeader.value; 
  }

</script>

<!-- <template>
  <LazyHeader v-if="showHeader" />
  <div>Ini Contentnya</div>
  
  <Story />
  
  <LazyFooter />
  
  <button @click="toggleHeader">Toggle Header {{ showHeader ? 'off' : 'on' }}</button>
  
  <ClientOnly>
    <Header />
    <Footer />
  </ClientOnly>
</template> -->

<template>
  <NuxtPage />
</template>

<style>
  body {
    font-family: 'Inter', sans-serif;
  }
</style>