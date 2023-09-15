<script setup>

  const query = ref("batman")
  const movies = ref([])
  import { useFavorite } from "../stores/favorite";
  const favoriteStore = useFavorite();

  console.log('favorite is', favoriteStore.items)

  async function search(){
    const {Search} = await $fetch(`https://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`)
    movies.value = Search
  }

  search()

</script>

<template>

  <div>
    <form style="padding-top: 10px" @submit.prevent="search">
      <input placeholder="Type movie name" v-model="query"/>
      <button>Search</button>
    </form>

    Favourite movies:
    <div v-for="(movie, index) in favoriteStore.items" :key="index">
      <p>{{ movie.Title }}</p>

    {{ console.log(movie) }}
    </div>

    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID} }">
          <img :src="movie.Poster" :alt="movie.title" />
        </NuxtLink>
        <button @click="favoriteStore.addItem(movie)">Add to favourite</button>
      </li>
    </ul>

  </div>

</template>

<style scoped></style>
