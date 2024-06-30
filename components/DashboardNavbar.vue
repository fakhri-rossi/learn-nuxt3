<template>
  <div id="container">

    <div>
      <h1 class="h1">
        <NuxtLink class="logo" to="/user/rossi/">
          Dashboard
        </NuxtLink>
      </h1>
    </div>
    
    <div>
      <ul>
        <li>
          <NuxtLink class="nav-item" to="/user/rossi/contact">Contact</NuxtLink>
        </li>
        
        <li>
          <NuxtLink class="nav-item" to="/user/rossi/about">About</NuxtLink>
        </li>
        
        <li>
          <NuxtLink class="nav-item" to="/counter">Counter</NuxtLink>
        </li>
        
        <li>
          <NuxtLink class="nav-item" to="/donat">Donat</NuxtLink>
        </li>
  
        <li>
          <NuxtLink class="nav-item" to="/">Home</NuxtLink>
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  #container{
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  ul{
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-item{
    text-decoration: none;
    padding: 0px 15px;
    color: green;
  }

  .logo{
    text-decoration: none;
    color: green;
    text-decoration-color: green;
    padding: 0px 10px;
  }
</style>