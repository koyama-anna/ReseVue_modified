<template>
  <div class="center">
    <h1 class="header-logo">RESE</h1>
  </div>
  <div class="home flex">
    <div v-for="shop in shops" :key="shop.id">
      <div class="shop-card">
        <div class="shop-photo">
          <img :src="shop.photo" alt="イメージ画像" />
        </div>
        <div class="shop-content">
          <div class="shop-name">{{ shop.name }}</div>
          <div class="tag">
            <div class="shop-area">#{{ shop.area }}</div>
            <div class="shop-genre">#{{ shop.genre }}</div>
          </div>
          <div class="btn">
            <div class="detail-btn">
              <router-link
                :to="{ name: 'theshopinfo', params: { id: shop.id } }"
                >詳しくみる</router-link
              >
            </div>
            <div class="favorite-btn">
              <button
                @click="toggleFavorite"
                type="button"
                value="favorite"
                class="heart"
              >
                <div v-if="shop.isFavorite == true">いいねを解除</div>
                <div v-else>いいねをつける</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
      shops: [
        {
          id: "1",
          photo: "",
          name: "",
          area: "",
          genre: "",
          isfavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavorite() {
      this.shops.map((x) => (x.isFavorite = !x.isFavorite));
    },
    addFavorite() {
      axios.post("http://localhost:8000/api/v1/shop", {
        shop_id: this.user.id,
        user_id: this.shops.id,
      });
    },
    deleteFavorite() {},
  },
};
</script>

<style scoped>
header {
  height: 70px;
  line-height: 70px;
}
.center {
  font-size: 20px;
  font-weight: bold;
  color: #077af2;
}
.shop-card {
  width: 360px;
  border-radius: 10px;
  margin: 30px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}

.shop-photo img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.shp-content {
  padding: 15px 25px;
}
</style>
