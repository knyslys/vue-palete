<script setup>
import { RouterLink, RouterView } from "vue-router";
import Selector from "./components/Selector.vue";
import Introduction from "./components/Introduction.vue";
import Website from "./components/Website.vue";
</script>

<template>
  <!-- <RouterView /> -->
  <!-- <div
    class="container mx-auto px-5 text-center bg-[#50d71e] hover:bg-[#000] hover:text-[#fff] transition-all duration-1000"
  >
    Hello
  </div> -->
  <selector></selector>
  <introduction></introduction>
  <website></website>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap");
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
}
</style>
