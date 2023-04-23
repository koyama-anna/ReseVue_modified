<template>
  <div class="center">
    <h1 class="header-logo">RESE</h1>
  </div>
  <div class="shop-detail">
    <router-link :to="{ name: '/' }" class="back">戻る</router-link>
    <div class="shop-name">{{ shop.name }}</div>
    <div class="shop-photo"><img src="{{ shop.photo }}" alt="" /></div>
    <div class="shop-area">#{{ shop.area }}</div>
    <div class="shop-genre">#{{ shop.genre }}</div>
    <div class="shop-infomation">{{ shop.infomation }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: [
        {
          photo: "aaa",
          name: "bbb",
          area: "ccc",
          genre: "ddd",
          information: "ddd",
        },
      ],
    };
  },
};
</script>
