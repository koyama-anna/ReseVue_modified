<template>
  <div class="center">
    <h1 class="header-logo">RESE</h1>
  </div>
  <div class="shop-detail">
    <router-link :to="{ name: 'theshopall' }" class="back">戻る</router-link>
    <div class="shop-name">{{ shop.name }}</div>
    <div class="shop-photo"><img src="{{ shop.photo }}" alt="" /></div>
    <div class="shop-area">#{{ shop.area }}</div>
    <div class="shop-genre">#{{ shop.genre }}</div>
    <div class="shop-infomation">{{ shop.infomation }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shop: [],
    };
  },

  async mounted() {
    const item = await axios.get(
      "http://localhost:8000/api/v1/shop/${this.id}"
    );
    const shopData = item.data;
    this.shops = shopData.data;
  },
};
</script>
