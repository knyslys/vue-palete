<template>
  <section class="section-selector min-h-screen flex items-center">
    <div class="color-selector container max-w-md mx-auto flex justify-center">
      <div class="flex flex-col justify-center items-center gap-2">
        <color-picker
          v-model:pureColor="colorStore.colors[0].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
        />
        <Icon icon="material-symbols:lock-sharp" class="icon" />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <color-picker
          v-model:pureColor="colorStore.colors[1].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
        />
        <Icon icon="material-symbols:lock-sharp" class="icon" />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <color-picker
          v-model:pureColor="colorStore.colors[2].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
        />
        <Icon icon="material-symbols:lock-sharp" class="icon" />
      </div>
      <div class="flex flex-col justify-center items-center gap-2">
        <color-picker
          v-model:pureColor="colorStore.colors[3].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
        />
        <Icon icon="material-symbols:lock-sharp" class="icon" />
      </div>
      <color-picker
        v-model:pureColor="colorStore.colors[4].value"
        shape="circle"
        :disableAlpha="true"
        :disableHistory="true"
      />
    </div>
  </section>
</template>

<script setup>
import { useColor } from "../stores/colors";
import { Icon } from "@iconify/vue";
import rgbHex from "rgb-hex";
import hexRgb from "hex-rgb";

const colorStore = useColor();

const convertToHex = (rgb) => {
  return rgbHex(rgb[0], rgb[1], rgb[2]);
};

const convertToRgb = (hex) => {
  const colors = hexRgb(hex);
  return [colors.red, colors.green, colors.blue];
};

const sendRequest = async () => {
  const c1 =
    colorStore.colors[0].locked === false
      ? "N"
      : convertToRgb(colorStore.colors[0].value);
  const c2 =
    colorStore.colors[1].locked === false
      ? "N"
      : convertToRgb(colorStore.colors[1].value);
  const c3 =
    colorStore.colors[2].locked === false
      ? "N"
      : convertToRgb(colorStore.colors[2].value);
  const c4 =
    colorStore.colors[3].locked === false
      ? "N"
      : convertToRgb(colorStore.colors[3].value);
  const c5 =
    colorStore.colors[4].locked === false
      ? "N"
      : convertToRgb(colorStore.colors[4].value);

  const request = await fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({
      model: "default",
      input: [c1, c2, c3, c4, c5],
    }),
  });
  const response = await request.json();
  colorStore.colors[0].value = "#" + convertToHex(response.result[0]);
  colorStore.colors[1].value = "#" + convertToHex(response.result[1]);
  colorStore.colors[2].value = "#" + convertToHex(response.result[2]);
  colorStore.colors[3].value = "#" + convertToHex(response.result[3]);
  colorStore.colors[4].value = "#" + convertToHex(response.result[4]);
};
sendRequest();
</script>

<style scoped></style>
