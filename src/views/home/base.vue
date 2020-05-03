<template>
  <div>
    <app-background />
    <div class="content">
      <div>
        <img src="@/assets/image/HyperFlex-2.png" alt class="logo" />
        <app-server-infor />
        <app-action />
      </div>
    </div>
    <app-copy-right />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import copyright from "./copyright.vue";
import background from "./background.vue";
import server_infor from "./server-info.vue";
import action from "./action.vue";

@Component({
  components: {
    appCopyRight: copyright,
    appBackground: background,
    appServerInfor: server_infor,
    appAction: action
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
@import "~@/assets/css/views/home";
</style>
