<template>
  <div class="nav-container">
    <NuxtLink :class="{active: isHome}" class="nav-item" to="/">Home</NuxtLink>
    <NuxtLink :class="{active: isAbout}" class="nav-item" to="/about">About</NuxtLink>
    <NuxtLink :class="{active: isContact}" class="nav-item" to="/contact">Contact</NuxtLink>
  </div>
</template>

<script setup>
  const props = defineProps(['current']);
  let isHome = ref(false);
  let isAbout = ref(false);
  let isContact = ref(false);

  onMounted(() => {
    if(props.current === 'home'){
      isHome.value = true;
      
    } else if(props.current === 'about'){
      isAbout.value = true;

    } else if(props.current === 'contact'){
      isContact.value = true;

    }
  })

</script>

<style>
  .nav-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  }

  .nav-item {
    text-decoration: none;
    color: green;
    padding: 5px 10px;
    border-radius: 8px;
  }
    
  .active{
    background-color: green;
    color: white;
  }

</style>