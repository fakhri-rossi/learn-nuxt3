<template>
  <div class="nav-container">
    <NuxtLink @click="onClick('home')" :class="{active: isHome}" class="nav-item" to="/">
      Home
    </NuxtLink>

    <NuxtLink @click="onClick('about')" :class="{active: isAbout}" class="nav-item" to="/about">
      About
    </NuxtLink>

    <NuxtLink @click="onClick('contact')" :class="{active: isContact}" class="nav-item" to="/contact">
      Contact
    </NuxtLink>
  </div>
</template>

<script setup>
  let path = useRoute().path;
  let isHome = ref(path === '/');
  let isAbout = ref(path === '/about');
  let isContact = ref(path === '/contact');

  const onClick = (destination) => {
    isHome.value = false;
    isAbout.value = false;
    isContact.value = false;

    if(destination === 'home'){
      isHome.value = true;
      
    } else if(destination === 'about'){
      isAbout.value = true;

    } else if(destination === 'contact'){
      isContact.value = true;

    }
  }

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