<script setup>

  const route = useRoute()

  const { data } = await useFetch(
    `https://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
    { pick: ["Plot", "Title", "Error", "Poster", "Year"],
      key: `/movies/${route.params.id}`,
    }
  );

  if (data.value.Error === "Incorrect IMDb ID.") {
    showError({ statusCode: 404, statusMessage: "Page Not Found"})
  }

  useHead({
    title: data.value.Title,
    meta: [
      { name: "description", content: data.value.Plot },
      { property: "og:description", content: data.value.Plot },
      { property: "og:image", content: data.value.Poster },
      { name: "twitter:card", content: `summary_large_image` },
    ],
  });

</script>

<template>
  <div>

  </div>
  <div class="flex bg-white">
    <img :src="data.Poster" alt="Movie Poster" />
    <div class="p-10">
      <h1 class="text-[28px] font-bold">{{ data.Title }}</h1>
      <p class="my-5">{{ data.Plot }}</p>
      <p>Air date: {{ data.Year }}</p>
    </div>
  </div>
</template>