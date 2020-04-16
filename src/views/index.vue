<template>
  <main>
    <a-carousel effect="fade" dotPosition="left" autoplay>
      <div
        class="imgaa"
        v-for="(item, index) of list_all_image"
        :key="index"
        :style="{ backgroundImage: `url('${item.url}')` }"
      ></div>
    </a-carousel>
    <div class="content">
      <p>Hyper Flex</p>
    </div>
  </main>
</template>

<script>
import F1 from "@/assets/image/bg-1.jpg";
import F2 from "@/assets/image/bg-2.jpg";
import F3 from "@/assets/image/bg-3.jpg";
import F4 from "@/assets/image/bg-4.jpg";
import F5 from "@/assets/image/bg-5.jpg";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  list_all_image = [
    { url: F1 },
    { url: F2 },
    { url: F3 },
    { url: F4 },
    { url: F5 }
  ];
}
</script>

<style lang="less">
.ant-carousel {
  position: fixed;
  top: -1px;
  left: -1px;
  z-index: -1;
  div {
    ul {
      display: none !important;
    }
  }
}

.imgaa {
  width: 100vw !important;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
  // filter: blur(5px);
}

.content {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
  p {
    font-family: "Alegreya SC", serif;
    font-size: 10em;
    font-size: 3.5em;
    font-weight: 500;
  }
}
</style>
