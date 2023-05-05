<template>
  <section class="section-selector min-h-screen flex items-center">
    <div
      class="color-selector container max-w-md mx-auto flex justify-center relative flex-wrap"
    >
      <div
        class="flex flex-col justify-center items-center gap-2 color-wrapper"
      >
        <color-picker
          v-model:pureColor="colorStore.colors[0].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
          format="hex"
        />
        <lock-color
          :locked="colorStore.colors[0].locked"
          @click="colorStore.setLock(0)"
        ></lock-color>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-2 color-wrapper"
      >
        <color-picker
          v-model:pureColor="colorStore.colors[1].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
          format="hex"
        />
        <lock-color
          :locked="colorStore.colors[1].locked"
          @click="colorStore.setLock(1)"
        ></lock-color>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-2 color-wrapper"
      >
        <color-picker
          v-model:pureColor="colorStore.colors[2].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
          format="hex"
        />
        <lock-color
          :locked="colorStore.colors[2].locked"
          @click="colorStore.setLock(2)"
        ></lock-color>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-2 color-wrapper"
      >
        <color-picker
          v-model:pureColor="colorStore.colors[3].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
          format="hex"
        />
        <lock-color
          :locked="colorStore.colors[3].locked"
          @click="colorStore.setLock(3)"
        ></lock-color>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-2 color-wrapper"
      >
        <color-picker
          v-model:pureColor="colorStore.colors[4].value"
          shape="circle"
          :disableAlpha="true"
          :disableHistory="true"
          format="hex"
        />
        <lock-color
          :locked="colorStore.colors[4].locked"
          @click="colorStore.setLock(4)"
        ></lock-color>
      </div>
      <button
        class="rounded bg-cyan-400 p-3 font-bold hover:bg-cyan-500 hover:text-slate-800 hover:rounded-full duration-1000 transition-all shadow-md hover:shadow-lg"
        @click="sendRequest"
      >
        Generate
      </button>
      <img src="/images/fetching.gif" alt="loading" v-if="fetching" />
    </div>
  </section>
</template>

<script setup>
import { useColor } from "../stores/colors";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import LockColor from "./LockColor.vue";
import rgbHex from "rgb-hex";
import hexRgb from "hex-rgb";

const colorStore = useColor();
const fetching = ref(undefined);
const convertToHex = (rgb) => {
  return rgbHex(rgb[0], rgb[1], rgb[2]);
};

const convertToRgb = (hex) => {
  const colors = hexRgb(hex);
  return [colors.red, colors.green, colors.blue];
};

const sendRequest = async () => {
  fetching.value = true;
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

  try {
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
  } catch (e) {
    console.log(e);
  } finally {
    fetching.value = false;
  }
};
sendRequest();

const test = (e) => {
  // console.log(convertToRgb(e));
  console.log(e);
};
</script>

<style scoped>
img {
  position: absolute;
  top: -33%;

  right: -15%;
  width: clamp(2.5rem, 5rem, 7.5rem);
}
.icon {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-100%);
  font-size: 1.6rem;
  background-color: #fff;
  border: 1px solid #000;
  padding: 0.2rem;
  border-radius: 500%;
  cursor: pointer;
  color: #000;
}

.color-wrapper {
  position: relative;
}

.current-color {
  transform: scale(2) !important;
}
</style>
