<script setup>
import userId from '../teams/[teamSlug]/users/[userId].vue';

  const route = useRoute();
  const message = computed(() => {
    `I'm on a team ${route.params.teamSlug} and my id is ${route.params.userId}`
  })
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>