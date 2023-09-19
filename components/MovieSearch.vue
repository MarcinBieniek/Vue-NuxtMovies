<script setup>

  const query = ref("friends")
  const movies = ref([])

  import { useFavorite } from "../stores/favorite";
  const favoriteStore = useFavorite();

  async function search(){
    const {Search} = await $fetch(`https://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`)
    movies.value = Search
  }

  search()

</script>

<template>
  <div>

    <form class="flex justify-center  mb-[50px] " @submit.prevent="search">
      <div>
        <input class="p-3 text-blue border-gray border-[1px] md:w-[400px] sm:w-[350px]" placeholder="Type movie name" v-model="query"/>
        <button class="h-full">
          <img src="../assets/icons/search.svg" class="h-[25px] ml-2" />
        </button>
      </div>
    </form>

    <MovieList :movies="movies"/>

  </div>

</template>

<style scoped></style>
