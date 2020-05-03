<template>
  <main>
    <a-carousel effect="fade" dotPosition="left" autoplay>
      <img
        class="background"
        v-for="(image, index) of IMAGES"
        :key="index"
        :src="image"
      />
    </a-carousel>
    <div class="content">
      <div>
        <img src="@/assets/image/HyperFlex-2.png" alt class="logo" />
        <div class="server-info">
          <p class="bg-dark server-info-ip">
            SERVER IP »
            <a-tooltip
              @click="copy_ip_address()"
              @mouseleave="after_mouse_leave()"
            >
              <template slot="title">{{ copy_state }}</template>
              {{ ip_address }}
            </a-tooltip>
          </p>
          <p class="bg-dark server-info-status">
            Hiện đang có
            <span>0</span> người đang trực tuyến.
          </p>
        </div>
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
      </div>
      <div class="bg-dark copyright">
        <p>© 2020 hyperflex.vn - Server Minecraft Việt Nam</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import F1 from "@/assets/image/bg-1.jpg";
import F2 from "@/assets/image/bg-2.jpg";
import F3 from "@/assets/image/bg-3.jpg";
import F4 from "@/assets/image/bg-4.jpg";
import F5 from "@/assets/image/bg-5.jpg";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  ip_address = "play.hyperflex.vn";
  IMAGES = [F1, F2, F3, F4, F5];
  $refs!: {
    titleCopy: Element | Element[] | Vue | Vue[];
  };
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
  copy_state = "Ấn Để Copy.";

  copy_text(text: string) {
    const inEL = document.createElement("input");
    inEL.value = text;
    document.body.appendChild(inEL);
    inEL.select();
    document.execCommand("copy");
    inEL.remove();
  }

  copy_ip_address() {
    this.copy_text(this.ip_address);
    this.copy_state = "Đã Copy!";
  }

  after_mouse_leave() {
    setTimeout(() => (this.copy_state = "Ấn Để Copy."), 300);
  }

  on_action_click(key: string) {
    //TODO: add support modal for donation page
    return;
  }
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

.bg-dark {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  border-radius: 6px;
}

.background {
  height: 100vh;
  filter: brightness(0.5);
  opacity: 0.75;
}

.content {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 700px;
  }
}

.server-info {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  &-ip {
    text-transform: uppercase;
  }
  &-status span {
    cursor: default;
  }
  p {
    font-size: 17px;
    font-weight: 100;
    cursor: default;
    margin: 0;
    color: white;
    letter-spacing: 0.8px;
    span {
      color: #f4c75d;
      font-weight: 500;
      cursor: pointer;
    }
  }
}

.contact {
  margin: 20px 0;
  text-align: center;
  a {
    display: inline-block;
    border-radius: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 9px;
    margin: 0 15px;
    &:hover i {
      filter: invert(93%) sepia(73%) saturate(6249%) hue-rotate(314deg)
        brightness(103%) contrast(91%);
    }
    i {
      display: block;
      width: 100%;
      height: 100%;
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(39deg)
        brightness(109%) contrast(90%);
      background-position: center;
      background-repeat: no-repeat;
      background-size: inherit;
      &.fb {
        background-image: url("~@/assets/icon/facebook-f.svg");
      }
      &.group {
        background-image: url("~@/assets/icon/user-friends.svg");
      }
      &.discord {
        background-image: url("~@/assets/icon/discord.svg");
      }
      &.donate {
        background-image: url("~@/assets/icon/donate.svg");
      }
    }
  }
}

.copyright {
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  border-radius: 0px 12px 0px 0px;
  p {
    color: white;
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 1.2px;
    word-spacing: 2.2px;
  }
}
</style>
