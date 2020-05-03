<template>
  <div class="server-info">
    <p class="bg-dark server-info-ip">
      SERVER IP »
      <a-tooltip @click="copy_ip_address()" @mouseleave="after_mouse_leave()">
        <template slot="title">{{ copy_state }}</template>
        {{ ip_address }}
      </a-tooltip>
    </p>
    <p class="bg-dark server-info-status">
      Hiện đang có
      <span>{{ numberOfOnline }}</span> người đang trực tuyến.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  ip_address = "play.hyperflex.vn";
  copy_state = "Ấn Để Copy.";
  numberOfOnline = 0;

  copy_text(text: string) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  copy_ip_address() {
    this.copy_text(this.ip_address);
    this.copy_state = "Đã Copy!";
  }

  after_mouse_leave() {
    setTimeout(() => (this.copy_state = "Ấn Để Copy."), 300);
  }
}
</script>
