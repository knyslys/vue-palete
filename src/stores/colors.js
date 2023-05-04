import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useColor = defineStore("colors", () => {
  const colors = ref([
    {
      id: "c1",
      value: "#000",
      locked: false,
    },
    {
      id: "c2",
      value: "#000",
      locked: false,
    },
    {
      id: "c3",
      value: "#000",
      locked: false,
    },
    {
      id: "c4",
      value: "#000",
      locked: false,
    },
    {
      id: "c5",
      value: "#000",
      locked: false,
    },
  ]);

  const setLock = (index) => {
    // colors[index].locked = true;
    console.log(colors.value[4].value);
    colors.value[index].locked = !colors.value[index].locked;
  };
  return { colors, setLock };
});
