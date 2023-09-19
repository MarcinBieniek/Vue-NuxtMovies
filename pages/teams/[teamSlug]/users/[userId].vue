<script setup>
 const route = useRoute()
 const message = computed(() => `this is my team name ${route.params.teamSlug} and this is my id ${route.params.userId}`)
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>