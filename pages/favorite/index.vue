<script setup>
  import { useFavorite } from "../../stores/favorite";
  const  favoriteStore = useFavorite();
</script>

<template>
    <div v-for="(movie, index) in favoriteStore.items" :key="index">
      <p>{{ movie.Title }}</p>

    {{ console.log(movie) }}
    </div>
</template>