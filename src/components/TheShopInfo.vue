<template>
  <div class="all">
    <div class="center">
      <h1 class="header-logo">Rese</h1>
    </div>
    <div class="shop-detail">
      <div class="title">
        <router-link :to="{ name: 'theshopall' }" class="back">＜</router-link>
        <div class="shop-name">{{ shop.name }}</div>
      </div>
      <div class="shop-photo"><img :src="shop.photo" alt="" /></div>
      <div class="tag">
        <div class="shop-area">#{{ shop.area }}</div>
        <div class="shop-genre">#{{ shop.genre }}</div>
      </div>
      <div class="shop-information">{{ shop.information }}</div>
    </div>
    <div class="reservation">
      <div class="re-title">予約</div>
      <div class="input">
        <form class="re-information">
          <div class="in-date">
            <input v-model="date" type="date" require />
          </div>
          <div class="in-time">
            <select name="time" v-model="time" require>
              <option>9:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
            </select>
          </div>
          <div class="in-number">
            <select name="number" v-model="number" require>
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
              <option value="5">5人</option>
              <option value="6">6人</option>
              <option value="7">7人</option>
              <option value="8">8人</option>
              <option value="9">9人</option>
              <option value="10">10人</option>
            </select>
          </div>
        </form>
      </div>
      <div class="output">
        <table class="out-table">
          <tr class="out-shop">
            <th>Shop</th>
            <td>{{ shop.name }}</td>
          </tr>
          <tr class="out-date">
            <th>Date</th>
            <td>{{ date }}</td>
          </tr>
          <tr class="out-time">
            <th>Time</th>
            <td>{{ time }}</td>
          </tr>
          <tr class="out-number">
            <th>Number</th>
            <td>{{ number }}人</td>
          </tr>
        </table>
      </div>
      <div class="re-btn">
        <button @click="reserve(shop.id, date, time, number)">予約する</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shop: [],
      date: "",
      time: "",
      number: "",
    };
  },

  async mounted() {
    const item = await axios.get(
      `http://localhost:8000/api/v1/shop/${this.$route.params.id}`
    );
    console.log(item);
    const shopData = item.data;
    this.shop = shopData.data;
  },

  methods: {
    async reserve(shopId, reserveDate, reserveTime, reserveNumber) {
      await axios.post("http://localhost:8000/api/v1/reservation", {
        shop_id: shopId,
        date: "reserveDate",
        time: "reserveTime",
        number: reserveNumber,
      });
      console.log(reserveDate);
    },
  },
};
</script>

<style>
.all {
  background-color: #ebebeb;
}

.shop-detail {
  width: 45%;
}

.header-logo {
  height: 70px;
  line-height: 70px;
  color: #006cd9;
}

.title {
  display: flex;
}

.back {
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 5px 5px 2px #ccc;
  font-weight: bold;
  background-color: white;
  color: black;
  text-decoration: none;
  padding: 5px 5px;
}

.shop-name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 10px;
}

img {
  width: 100%;
  margin: 20px 0;
}

.tag {
  display: flex;
  font-size: 14px;
}

.shop-information {
  font-size: 14px;
  line-height: 150%;
  margin: 20px 0;
}
</style>
