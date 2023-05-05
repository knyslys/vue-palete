<template>
  <Icon :icon="getIcon" class="icon" />
  <!-- <Icon icon="material-symbols:lock-open-outline" class="test" /> -->
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";
const props = defineProps({
  locked: {
    type: Boolean,
  },
});

const getIcon = computed(() => {
  return props.locked === true
    ? "material-symbols:lock-sharp"
    : "material-symbols:lock-open-sharp";
});
</script>

<style scoped>
/* .icon {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-100%);
  font-size: 1.6rem;
  background-color: red;
  padding: 0.2rem;
  border-radius: 500%;
} */
</style>
