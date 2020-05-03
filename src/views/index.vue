<template>
  <main>
    <a-carousel effect="fade" dotPosition="left" autoplay>
      <div
        class="imgaa"
        v-for="(image, index) of IMAGE"
        :key="index"
        :style="{ backgroundImage: `url('${image}')` }"
      />
    </a-carousel>
    <div class="content">
      <div>
        <img src="@/assets/image/HyperFlex-2.png" alt class="logo" />
        <div class="inforSV">
          <p class="ip" style="text-transform: uppercase;">
            SERVER IP »
            <a-tooltip
              @click="copy_ip_address()"
              @mouseleave="after_mouse_leave()"
            >
              <template slot="title">{{ copy_state }}</template>
              {{ ip_address }}
            </a-tooltip>
          </p>
          <p class="info">
            Hiện đang có
            <span>0</span> người đang trực tuyến.
          </p>
        </div>
        <div class="contact">
          <a-tooltip>
            <template slot="title">Fanpage</template>
            <a href="https://www.facebook.com/hyperflex.vn" target="_blank">
              <i class="fb" />
            </a>
          </a-tooltip>
          <a-tooltip>
            <template slot="title">Group</template>
            <a
              href="https://www.facebook.com/groups/hyperflex.vn"
              target="_blank"
            >
              <i class="group" />
            </a>
          </a-tooltip>
          <a-tooltip>
            <template slot="title">Discord</template>
            <a href="https://discord.gg/SzkjCmU" target="_blank">
              <i class="discord" />
            </a>
          </a-tooltip>
          <a-tooltip>
            <template slot="title">Donate</template>
            <a>
              <i class="donate" />
            </a>
          </a-tooltip>
        </div>
      </div>
      <div class="copyright">
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
  inc = 0;
  IMAGE = [F1, F2, F3, F4, F5];
  $refs!: {
    titleCopy: Element | Element[] | Vue | Vue[];
  };
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
    setTimeout(() => {
      this.copy_state = "Ấn Để Copy.";
    }, 300);
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

.imgaa {
  width: 100vw !important;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
}

.content {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  padding: 5px 10px 5px 15px;
  border-radius: 0 10px 0 0;
  & > p {
    color: white;
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 1.2px;
    word-spacing: 2.2px;
  }
}

.inforSV {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  & > .info > span {
    cursor: default;
  }
  & > p {
    font-size: 17px;
    font-weight: 100;
    cursor: default;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 15px;
    border-radius: 6px;
    margin: 0;
    color: white;
    letter-spacing: 0.8px;
    & > span {
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
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 9px;
    margin: 0 15px;
    &:hover {
      & > i {
        filter: invert(93%) sepia(73%) saturate(6249%) hue-rotate(314deg)
          brightness(103%) contrast(91%);
      }
    }
    & > i {
      display: block;
      width: 100%;
      height: 100%;
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(39deg)
        brightness(109%) contrast(90%);
      background-position: center;
      background-repeat: no-repeat;
      background-size: inherit;
    }
    & > i.fb {
      background-image: url("~@/assets/icon/facebook-f.svg");
    }
    & > i.group {
      background-image: url("~@/assets/icon/user-friends.svg");
    }
    & > i.discord {
      background-image: url("~@/assets/icon/discord.svg");
    }
    & > i.donate {
      background-image: url("~@/assets/icon/donate.svg");
    }
  }
}

.logo {
  width: 700px;
}
</style>
