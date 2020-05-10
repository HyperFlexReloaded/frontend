<template>
  <div class="modal-tag">
    <div v-for="(i, index) in listCard" :key="i.title_card">
      <a-tooltip>
        <template slot="title">{{ i.title_card }}</template>
        <div>
          <div class="tag">
            <div
              class="tag-card"
              v-bind:style="{
                backgroundImage: 'url(' + i.url_image_card + ')'
              }"
              @click="clicked(index, i.title_card)"
            ></div>
          </div>
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { Types } from "types";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Prop() listCard!: Types.ListCard[];

  clicked(index: number, key?: string) {
    if (document.getElementsByClassName("tag active")[0]) {
      document
        .getElementsByClassName("tag active")[0]
        .classList.remove("active");
    }
    document.getElementsByClassName("tag")[index].classList.add("active");
    this.$emit("getTitle", key);
  }
}
</script>
