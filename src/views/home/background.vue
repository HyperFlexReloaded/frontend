<template>
  <a-carousel effect="fade" dotPosition="left" autoplay>
    <img
      class="background"
      v-for="(image, index) of IMAGES"
      :key="index"
      :src="image"
    />
  </a-carousel>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import F1 from "@/assets/image/bg-1.jpg";
import F2 from "@/assets/image/bg-2.jpg";
import F3 from "@/assets/image/bg-3.jpg";
import F4 from "@/assets/image/bg-4.jpg";
import F5 from "@/assets/image/bg-5.jpg";

@Component
export default class App extends Vue {
  IMAGES = [F1, F2, F3, F4, F5];
}
</script>
