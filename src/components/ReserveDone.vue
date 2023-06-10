<template>
  <div class="all">
    <div class="header">
      <div class="header-menu">
        <div class="hamburger-menu">
          <label for="menu-btn-check" class="menu-btn" @click="menu"
            ><span></span
          ></label>
        </div>
        <div class="center">
          <h1 class="header-logo">Rese</h1>
        </div>
      </div>
    </div>

    <div class="thanks-card">
      <div class="card">
        <div class="thanks">ご予約ありがとうございます</div>
        <div class="back">
          <button @click="$router.go(-1)" class="back-btn">戻る</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    menu() {
      this.$router.push("/menu");
    },
  },
};
</script>
<style scoped>
.header-logo {
  position: fixed;
  height: 70px;
  line-height: 70px;
  margin-left: 70px;
  margin-top: 5px;
}
.center {
  font-size: 20px;
  font-weight: bold;
  color: #077af2;
}

.header {
  display: flex;
  justify-content: space-between;
}

.menu-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  z-index: 90;
  background-color: #077af2;
  margin: 10px 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
  content: "";
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background-color: #ffffff;
  position: absolute;
}
.menu-btn span:before {
  bottom: 8px;
}
.menu-btn span:after {
  top: 8px;
}

.all {
  background-color: #ebebeb;
}
.thanks-card {
  display: flex;
  justify-content: center;
}
.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  margin-top: 200px;
  margin-bottom: 250px;
}

.thanks {
  font-size: 18px;
  margin-top: 60px;
  margin-bottom: 40px;
}

.back {
  background-color: #006cd9;
  width: 50px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 15px auto;
  margin-top: 15px;
  margin-bottom: 60px;
}

.back-btn {
  border: none;
  background: transparent;
  color: white;
  font-size: 14px;
}
</style>
