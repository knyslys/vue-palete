<template>
  <section class="section-intro bg-slate-300 p-8">
    <div class="container mx-auto flex gap-4 justify-evenly">
      <!-- c1 -->
      <div class="flex flex-col text-center gap-y-4">
        <div
          class="h-40"
          :style="{ backgroundColor: colorStore.colors[0].value }"
        ></div>
        <p>
          Use this color as the background for your dark-on-light designs, or
          the text color of an inverted design.
        </p>
      </div>
      <!-- c2 -->
      <div class="flex flex-col text-center gap-y-4">
        <div
          class="h-40"
          :style="{ backgroundColor: colorStore.colors[1].value }"
        ></div>
        <p>
          Accent colors can be used to bring attention to design elements by
          contrasting with the rest of the palette.
        </p>
      </div>
      <!-- c3 -->
      <div class="flex flex-col text-center gap-y-4">
        <div
          class="h-40"
          :style="{ backgroundColor: colorStore.colors[2].value }"
        ></div>
        <p>
          This color should be eye-catching but not harsh. It can be liberally
          applied to your layout as its main identity.
        </p>
      </div>
      <!-- c4 -->
      <div class="flex flex-col text-center gap-y-4">
        <div
          class="h-40"
          :style="{ backgroundColor: colorStore.colors[3].value }"
        ></div>
        <p>
          Another accent color to consider. Not all colors have to be used -
          sometimes a simple color scheme works best.
        </p>
      </div>
      <!-- c5 -->
      <div class="flex flex-col text-center gap-y-4">
        <div
          class="h-40"
          :style="{ backgroundColor: colorStore.colors[4].value }"
        ></div>
        <p>
          Use as the text color for dark-on-light designs, or as the background
          for inverted designs.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useColor } from "../stores/colors.js";
const colorStore = useColor();
</script>

<style scoped></style>
