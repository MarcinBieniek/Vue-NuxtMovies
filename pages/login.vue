<script setup>

  import { useUser } from '~/stores/user';
  const user = useUser()

  definePageMeta({
    layout: "plain"
  })

</script>

<template>
  <div class="flex h-screen justify-center">
    <form class="flex flex-col justify-center" @submit.prevent="user.login">
      <h1 class="text-[30px] font-bold flex justify-center mb-5">Login</h1>
      <label class="text-[22px] flex justify-center mb-5 items-center">
        <p class="mr-5">Username</p>
        <input class="p-[10px]" type="text" />
      </label>
      <label class="text-[22px] flex justify-center mb-5 items-center">
        <p class="mr-5">Password</p>
        <input class="p-[10px]" type="password" />
      </label>
      <button class="bg-blue hover:bg-strongBlue text-white text-[16px] py-[10px] mt-2">Submit</button>
    </form>
  </div>
</template>