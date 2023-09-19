<script setup>
  import { useFavorite } from "../stores/favorite";
  const favoriteStore = useFavorite();

  defineProps({
    movies: { type: Object, required: true },
  });
</script>

<template>
  <div>

    <ul class="relative grid place-items-center 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      <li v-for="movie in movies" class="relative" :key="movie.imdbID">
          <img :src="movie.Poster" :alt="movie.title" class="h-[400px]"/>
          <div class="absolute top-0 h-full w-full group hover:bg-white">
            <div class="absolute hidden group-hover:block w-full ">
              <div class="flex flex-col h-[400px] justify-center items-center">
                <p class="text-center text-[30px] p-2 font-bold">{{ movie.Title }}</p>

                <button class="bg-green hover:bg-strongGreen text-white text-[16px] w-[180px] py-[10px]" @click="favoriteStore.addItem(movie)">Add to favorite</button>

                <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID} }">
                  <button class="bg-blue hover:bg-strongBlue text-white text-[16px] w-[180px] py-[10px] mt-2" >See more</button>
                </NuxtLink>
              </div>
            </div>
          </div>
      </li>
    </ul>

  </div>

</template>

<style scoped></style>
