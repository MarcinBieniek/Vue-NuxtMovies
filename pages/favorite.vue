<script setup>
  import { useFavorite } from "../stores/favorite";
  const  favoriteStore = useFavorite();
</script>

<template>

  <h1 class="text-[24px] mb-[10px]">Your favourite movies</h1>

  <p v-if="favoriteStore.items.length === 0" class="text-[24px] mb-[10px]">List is empty, search for favorite movies!</p>
  <p v-else class="text-[24px] mb-[10px]">Number of favorite movies: {{ favoriteStore.items.length }}</p>

  <ul class="relative grid place-items-center 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <li v-for="(movie, index) in favoriteStore.items" :key="index" class="relative" >
          <img :src="movie.Poster" :alt="movie.title" class="h-[400px]"/>
          <div class="absolute top-0 h-full w-full group hover:bg-white">
            <div class="absolute hidden group-hover:block w-full ">
              <div class="flex flex-col h-[400px] justify-center items-center">
                <p class="text-center text-[30px] p-2 font-bold">{{ movie.Title }}</p>
                <button class="bg-red hover:bg-lightRed text-white text-[16px] w-[180px] py-[10px]" @click="favoriteStore.deleteItem(movie.imdbID)">Delete</button>
                <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID} }">
                  <button class="bg-blue hover:bg-strongBlue text-white text-[16px] w-[180px] py-[10px] mt-2" >See more</button>
                </NuxtLink>
              </div>
            </div>
          </div>
      </li>
    </ul>

</template>