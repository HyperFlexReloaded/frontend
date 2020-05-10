<template>
  <div>
    <app-tag-card :listCard="listCard" @getTitle="getCard"></app-tag-card>
    <a-alert
      message="Vui lòng chọn đúng mệnh giá của thẻ. Nếu chọn mệnh giá lớn hơn hoặc thấp hơn mệnh giá của thẻ sẽ bị mất thẻ."
      type="warning"
      closable
    />
    <div class="info-card">
      <label>
        <span>Tên nhân vật:</span>
        <a-input
          class="button-green"
          placeholder="Điền tên nhân vật của bạn"
          v-model="infoDonate.name_in_game"
        />
      </label>
      <label>
        <span>Mệnh giá thẻ:</span>
        <a-select
          style="width: 100%"
          @change="getPrice"
          v-model="infoDonate.priceCard"
        >
          <a-select-option v-for="i in listPriceCard" :key="i" :value="i"
            >{{ numberWithCommas(i) }} ₫</a-select-option
          >
        </a-select>
      </label>
      <div class="i-card">
        <label>
          <span>Số series:</span>
          <a-input
            class="button-green"
            placeholder="Điền số series của thẻ"
            v-model="infoDonate.series"
          />
        </label>
        <label>
          <span>Mã thẻ:</span>
          <a-input
            class="button-green"
            placeholder="Điền mã thẻ ở sau lớp tráng bạc"
            v-model="infoDonate.id_card"
          />
        </label>
      </div>
      <div class="recaptcha">
        <vue-recaptcha :sitekey="siteKey"></vue-recaptcha>
      </div>
      <a-button type="primary">Donate</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Types } from "types";
import { Vue, Component } from "vue-property-decorator";
import tagCard from "./tagCard.vue";
import Viettel_logo from "@/assets/icon/Viettel_logo.svg";
import Vinaphone_logo from "@/assets/icon/Vinaphone_logo.svg";
import Mobifone_logo from "@/assets/icon/Mobifone_logo.svg";
import Zing_logo from "@/assets/icon/Zing_logo.png";
import Gate_logo from "@/assets/icon/Gate_logo.png";
import VueRecaptcha from "vue-recaptcha";

@Component({
  components: {
    appTagCard: tagCard,
    vueRecaptcha: VueRecaptcha
  }
})
export default class App extends Vue {
  siteKey = "6Le--fMUAAAAALCWuAoRQ7vSIGnsTexPmy8TOL6U";
  listPriceCard: number[] = [];
  infoDonate = {
    typeCard: "",
    name_in_game: null,
    priceCard: "Phải chọn loại thẻ trước!",
    series: null,
    id_card: null
  };

  listCard: Types.ListCard[] = [
    {
      title_card: "Viettel",
      url_image_card: Viettel_logo,
      list_price_card: [
        10000,
        20000,
        30000,
        50000,
        100000,
        200000,
        300000,
        500000,
        1000000
      ]
    },
    {
      title_card: "Vinaphone",
      url_image_card: Vinaphone_logo,
      list_price_card: [
        10000,
        20000,
        30000,
        50000,
        100000,
        200000,
        300000,
        500000
      ]
    },
    {
      title_card: "Mobifone",
      url_image_card: Mobifone_logo,
      list_price_card: [
        10000,
        20000,
        30000,
        50000,
        100000,
        200000,
        300000,
        500000
      ]
    },
    {
      title_card: "Zing",
      url_image_card: Zing_logo,
      list_price_card: [
        10000,
        20000,
        30000,
        50000,
        100000,
        200000,
        300000,
        500000,
        1000000
      ]
    },
    {
      title_card: "Gate",
      url_image_card: Gate_logo,
      list_price_card: [
        10000,
        20000,
        30000,
        50000,
        100000,
        200000,
        300000,
        500000,
        1000000
      ]
    }
  ];

  getCard(data: string) {
    this.infoDonate.typeCard = data;
    const carrd: Types.ListCard[] = this.listCard.filter(x => {
      return x.title_card === data;
    });
    this.listPriceCard = carrd[0].list_price_card;
    this.infoDonate.priceCard = "Chọn mệnh giá của thẻ";
  }

  getPrice(data: string) {
    this.infoDonate.priceCard = data;
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
</script>
