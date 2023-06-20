<script setup>

  const isLoggedIn = userIsLoggedIn()

  definePageMeta({
    layout: "plain"
  })

  function login(){
    isLoggedIn.value = true
    useRouter().push("/")
  }

  console.log(isLoggedIn)

</script>

<template>
  <form @submit.prevent="login">
    <h1>Login</h1>
    <label>
      Username
      <input type="text" />
    </label>
    <label>
      Password
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>