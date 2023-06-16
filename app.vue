<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - My movie site` : 'My movie site'
    }
  })
</script>

<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://www.pzpn.pl">PZPN</NuxtLink>
    </nav>
    <NuxtPage/>
  </div>
</template>
