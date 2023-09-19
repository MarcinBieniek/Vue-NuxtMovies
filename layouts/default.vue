<script setup>

  import { useUser } from '~/stores/user';
  const user = useUser();

</script>

<template>
  <div class="container mx-auto">
    <nav class="h-[150px] flex justify-between place-items-center">
      <NuxtLink to="/" class="flex justify-between place-items-center gap-5">
        <img src="../assets/icons/camera2.svg" class="h-[55px]"/>
        <h1 class="text-[24px]"><span class="text-blue">your</span>Movie</h1>
      </NuxtLink>
      <div class="flex justify-between place-items-center gap-5">
        <NuxtLink
          to="/"
          class="hover:text-blue transition delay-150 text-[20px]"
        >Search
        </NuxtLink>
        <NuxtLink
          to="/favorite"
          class="hover:text-blue transition delay-150 text-[20px]"
        >Favorite
        </NuxtLink>
        <NuxtLink v-if="!user.isLoggedIn" to="/login" class="hover:text-blue transition delay-150 text-[20px]">Login</NuxtLink>
        <NuxtLink v-else to="/" @click.prevent="user.isLoggedIn = false" class="hover:text-blue transition delay-150 text-[20px]">Logout</NuxtLink>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>