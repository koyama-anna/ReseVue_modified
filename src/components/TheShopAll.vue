<template>
  <div class="home flex">
    <div v-for="shop in shops" :key="shop.id">
      <div class="shop-card">
        <div class="shop-photo"><img src="{{ shop.photo }}" alt="" /></div>
        <div class="shop-content">
          <div class="shop-name">{{ shop.name }}</div>
          <div class="tag">
            <div class="shop-area">#{{ shop.area }}</div>
            <div class="shop-genre">#{{ shop.genre }}</div>
          </div>
          <div class="btn">
            <div class="detail-btn">
              <button type="submit" value="detail">詳しくみる</button>
            </div>
            <div class="favorite-btn">
              <button type="button" value="favorite"></button>
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
      photo: "",
      name: "",
      area: "",
      genre: "",
    };
  },
  async mounted() {
    const item = await axios.get("http://localhost:8000/api/v1/shop");
    const shopData = item.data;
    this.photo = shopData.photo;
    this.name = shopData.name;
    this.area = shopData.area;
    this.genre = shopData.genre;
  },
};
</script>

<style scoped>
body {
  background: #eee;
}
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card {
  width: 27%;
  margin: 30px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
  cursor: pointer;
}
.card-link a:hover {
  color: #0090aa;
}
</style>
