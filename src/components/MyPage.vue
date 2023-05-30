<template>
  <div class="all">
    <div class="center">
      <h1 class="header-logo">Rese</h1>
    </div>
    <div class="reservation">
      <div class="reserve">予約状況</div>
      <div
        v-for="(reservation, index) in reservations"
        :key="reservation.id"
        class="reserve-card"
      >
        <div class="reserve-no">
          <div class="reserve-ttl">
            <div class="reserve-name">予約{{ index + 1 }}</div>
            <div class="cancel-btn" @click="deleteReserve(reservation.id)">
              ×
            </div>
          </div>
          <div class="reserve-list">
            <table class="list-table">
              <tr class="list-shop">
                <th>Shop</th>
                <td>{{ shopName(reservation.shop_id) }}</td>
              </tr>
              <tr class="list-date">
                <th>Date</th>
                <td>{{ reservation.date }}</td>
              </tr>
              <tr class="list-time">
                <th>Time</th>
                <td>{{ reservation.time }}</td>
              </tr>
              <tr class="list-number">
                <th>Number</th>
                <td>{{ reservation.number }}人</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="mypage">
        <div class="login-name">{{ user.name }}さん</div>
        <div class="favorite-card">
          <div class="favorite-tytle">お気に入り店舗</div>
          <div class="favorite-shop">
            <div v-for="shop in shops" :key="shop.id">
              <div class="shop-card">
                <div v-if="isFavorite(shop.id) == true">
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
                          class="link"
                          >詳しくみる</router-link
                        >
                      </div>
                      <div class="favorite-btn">
                        <button
                          @click="deleteFavorite(shop.id)"
                          type="button"
                          value="favorite"
                          class="heart-1"
                        >
                          &hearts;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="unfavorite"></div>
                </div>
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
      user: [],
      shops: [],
      favorites: [],
      reservations: [],
    };
  },
  methods: {
    async deleteFavorite(shopId) {
      const favorite = this.favorites.filter((x) => x.shop_id == shopId);
      await axios.delete(
        `http://localhost:8000/api/v1/favorite/${favorite[0].id}`
      );
      const newFavorite = await axios.get(
        "http://localhost:8000/api/v1/favorite"
      );
      const favoriteData = newFavorite.data;
      this.favorites = favoriteData.data;
    },
    isFavorite(shopId) {
      const favorite = this.favorites.filter((x) => x.shop_id == shopId);
      return favorite.length != 0;
    },
    shopName(shopId) {
      const shop = this.shops.filter((x) => x.id == shopId);
      return shop[0].name;
    },
    async deleteReserve(reserveId) {
      await axios.delete(
        `http://localhost:8000/api/v1/reservation/${reserveId}`
      );
      const newReservation = await axios.get(
        "http://localhost:8000/api/v1/reservation"
      );
      const reservationData = newReservation.data;
      this.reservations = reservationData.data;
      console.log(reserveId);
    },
  },
  async mounted() {
    const item = await axios.get("http://localhost:8000/api/v1/shop");
    const shopData = item.data;
    this.shops = shopData.data;
    const favorite = await axios.get("http://localhost:8000/api/v1/favorite");
    const favoriteData = favorite.data;
    this.favorites = favoriteData.data;
    const reservation = await axios.get(
      "http://localhost:8000/api/v1/reservation"
    );
    const reservationData = reservation.data;
    this.reservations = reservationData.data;
    const loginUser = await axios.get("http://localhost:8000/api/v1/user");
    const userData = loginUser.data;
    this.user = userData.data;
  },
};
</script>
<style scoped>
.all {
  background-color: #ebebeb;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
}

.header-logo {
  height: 70px;
  line-height: 70px;
}
.center {
  font-size: 20px;
  font-weight: bold;
  color: #077af2;
}

.reserve-card {
  width: 300px;
  border-radius: 5px;
  margin: 15px 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  background-color: #077af2;
  color: white;
  padding: 15px 15px;
}

.reserve-ttl {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
}

.cancel-btn {
  font-size: 17px;
  font-weight: bold;
  border-radius: 50%;
  border: solid 2px;
  border-color: white;
  padding: 3px 3px 5px 3px;
}

.unfavorite {
  display: none;
}

.shop-card {
  width: 260px;
  border-radius: 5px;
  margin: 15px 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}

.shop-photo img {
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.shop-content {
  padding: 15px 25px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.shop-name {
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
}

.tag {
  display: flex;
}

.detail-btn {
  background-color: #006cd9;
  width: 60px;
  padding: 8px 12px;
  border-radius: 5px;
  margin: 15px 0;
}

.link {
  text-decoration: none;
  color: white;
}
.heart-1 {
  color: red;
  font-size: 24px;
  border: none;
  background: transparent;
  transform: scaleX(1.5);
  margin: 15px 0;
}

.heart-2 {
  color: #ebebeb;
  font-size: 24px;
  border: none;
  background: transparent;
  transform: scaleX(1.5);
  margin: 15px 0;
}

.btn {
  display: flex;
  justify-content: space-between;
}
</style>
