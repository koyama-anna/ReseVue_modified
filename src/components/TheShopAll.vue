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
              <div v-if="isFavorite(shop.id) == true">
                <button
                  @click="deleteFavorite(shop.id)"
                  type="button"
                  value="favorite"
                  class="heart"
                >
                  いいねを解除
                </button>
              </div>
              <div v-else>
                <button
                  @click="toggleFavorite(shop.id)"
                  type="button"
                  value="favorite"
                  class="heart"
                >
                  いいねをつける
                </button>
              </div>
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
      shops: [],
      favorites: [],
    };
  },
  methods: {
    async toggleFavorite(shopId) {
      await axios.post("http://localhost:8000/api/v1/favorite", {
        shop_id: shopId,
      });
      console.log(shopId);
      this.$router.push({ name: "theshopall" });
    },
    async deleteFavorite(shopId) {
      await axios.delete("http://localhost:8000/api/v1/favorite", {
        shop_id: shopId,
      });
      console.log(shopId);
      this.$router.push({ name: "theshopall" });
    },
    isFavorite(shopId) {
      const favorite = this.favorites.filter((x) => x.shop_id == shopId);
      return favorite.length != 0;
    },
  },
  async mounted() {
    const item = await axios.get("http://localhost:8000/api/v1/shop");
    const shopData = item.data;
    this.shops = shopData.data;
    const favorite = await axios.get("http://localhost:8000/api/v1/favorite");
    const favoriteData = favorite.data;
    this.favorites = favoriteData.data;
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
