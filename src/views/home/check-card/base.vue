<template>
  <div class="info-card">
    <a-alert
      message="Mã UUID sẽ được cấp ngay sau khi bạn Donate thành công."
      type="warning"
      closable
    />
    <label style="margin: 0 15px">
      <span>Mã UUID:</span>
      <a-input class="button-green" placeholder="Điền mã UUID" v-model="uuid" />
    </label>
    <div class="recaptcha">
      <vue-recaptcha :sitekey="siteKey"></vue-recaptcha>
    </div>
    <a-button type="primary" style="margin: 15px 15px 0">Kiểm tra thẻ</a-button>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import VueRecaptcha from "vue-recaptcha";

@Component({
  components: {
    vueRecaptcha: VueRecaptcha
  }
})
export default class App extends Vue {
  siteKey = "6Le--fMUAAAAALCWuAoRQ7vSIGnsTexPmy8TOL6U";
  uuid = "";
}
</script>
