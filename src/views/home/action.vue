<template>
  <div class="contact">
    <a-tooltip v-for="action in ACTIONS" :key="action.key">
      <template slot="title">{{ action.title }}</template>
      <a
        class="bg-dark"
        :href="action.url"
        :target="action.url ? '_blank' : null"
        @click="on_action_click(action.key)"
      >
        <i :class="action.icon" />
      </a>
    </a-tooltip>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  ACTIONS = [
    {
      title: "Fanpage",
      key: "fb",
      icon: "fb",
      url: "https://www.facebook.com/hyperflex.vn"
    },
    {
      title: "Group",
      key: "group",
      icon: "group",
      url: "https://www.facebook.com/groups/hyperflex.vn"
    },
    {
      title: "Discord",
      key: "discord",
      icon: "discord",
      url: "https://discord.gg/SzkjCmU"
    },
    {
      title: "Donate",
      key: "donate",
      icon: "donate"
    }
  ];

  on_action_click(key: string) {
    //TODO: add support modal for donation page
    return key;
  }
}
</script>
