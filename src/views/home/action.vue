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
    <a-modal
      v-model="visibleModal"
      title="Ủng Hộ Server HyperFlex"
      :footer="null"
    >
      <a-tooltip>
        <template slot="title">Kiểm tra thẻ cào</template>
        <i class="check-card" @click="visible_check_card()" />
      </a-tooltip>
      <app-donate></app-donate>
    </a-modal>
    <a-modal
      v-model="visibleCheckCard"
      title="Kiểm tra thẻ cào"
      :footer="null"
      @cancel="close_check_card"
    >
      <app-check-card></app-check-card>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import donate from "./donate/base.vue";
import CheckCard from "./check-card/base.vue";

@Component({
  components: {
    appDonate: donate,
    appCheckCard: CheckCard
  }
})
export default class App extends Vue {
  visibleModal = false;
  visibleCheckCard = false;
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
    if (key != "donate") {
      return;
    }
    this.visibleModal = true;
  }

  visible_check_card() {
    this.visibleModal = false;
    this.visibleCheckCard = true;
  }

  close_check_card() {
    this.visibleCheckCard = false;
    this.visibleModal = true;
  }
}
</script>
