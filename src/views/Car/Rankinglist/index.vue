<template>
  <div>
    <keep-alive>
      <Header />
    </keep-alive>
    <div class="header_z">
      <div class="nav_z">
        <div class="nav">
          <!-- <router-link class="active" to="/car/Rankinglist/rank_list/one" tag="div">轿车</router-link>
                <router-link to:='/car/Rankinglist/rank_list/two'  tag="div">SUV</router-link >
          <router-link to="/car/Rankinglist/rank_list/three"  tag="div">MVP</router-link >-->
          <div @click="onechange()" class="one ys">轿车</div>
          <div @click="twochange()" class="two">SUV</div>
          <div @click="threechange()" class="three">SUV</div>
        </div>
      </div>
      <BScroll>
      <template>
      <div class="mian_z">
        <div class="mian">
          <ul>
            <li v-for="(item,index) in car_list" :key="index">
              <div class="left">
                <!-- <img src="" alt="" srcset=""> -->
                <span>{{item.rank}}</span>
              </div>
              <img class="middle" :src="item.image" alt srcset />
              <div class="right">
                <p>{{item.series_name}}</p>
                <span>{{item.max_price}}</span>
                <span>-{{item.min_price}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      </template>
      </BScroll>
    </div>
  </div>
</template>
<script>
import Header from "../commot/header.vue";
import axios from "axios";
import BScorll from "better-scroll";
export default {
  components: {
    Header
    // One,
    //   Two,
    //  Three
  },
  data() {
    return {
      car_list: [],
      ys: 1
    };
  },
  mounted() {

  
  },
  created() {
    axios({
      method: "get",
      url: "/abc/motor/car_show/v1/get_rank/?rank_type=100&offset=0&limit=15"
    }).then(data => {
      // var list=data.data.data.service_list;
      var list = data.data.data;
      // console.log(data.data.data);
      // console.log(data.data.data[0].max_price);
      this.car_list = list;
    });
  },

  methods: {
    onechange() {
      axios({
        method: "get",
        url: "/abc/motor/car_show/v1/get_rank/?rank_type=100&offset=0&limit=15"
      }).then(data => {
        // var list=data.data.data.service_list;
        var list = data.data.data;
        // console.log(data.data.data);
        // console.log(data.data.data[0].max_price);
        this.car_list = list;
        document.querySelector(".one").classList.add("ys");
        document.querySelector(".two").classList.remove("ys");
        document.querySelector(".three").classList.remove("ys");
      });
    },
    twochange() {
      axios({
        method: "get",
        url: "/abc/motor/car_show/v1/get_rank/?rank_type=200&offset=0&limit=15"
      }).then(data => {
        // var list=data.data.data.service_list;
        var list = data.data.data;
        // console.log(data.data.data);
        // console.log(data.data.data[0].max_price);
        this.car_list = list;
      }),
        document.querySelector(".two").classList.add("ys");
      document.querySelector(".one").classList.remove("ys");
      document.querySelector(".three").classList.remove("ys");
    },

    threechange() {
      axios({
        method: "get",
        url: "/abc/motor/car_show/v1/get_rank/?rank_type=300&offset=0&limit=15"
      }).then(data => {
        var list = data.data.data;
        this.car_list = list;
        document.querySelector(".three").classList.add("ys");
        document.querySelector(".one").classList.remove("ys");
        document.querySelector(".two").classList.remove("ys");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header_z {
  position: absolute;
  top: 15.6%;
  left: 0;
  width: 100%;
  height: 100%;
}
.nav_z {
  border-bottom: 1px solid #e8e8e8;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 999;
}

.nav {
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
  margin-bottom: 1%;
  background: #fff;
  z-index: 999999;
}

.nav > div {
  font-size: 0.5rem;
  padding: 0 0.2rem 0 0.3rem;
}

.nav > div > .active {
  color: #000;
}

.style_h {
  width: 100%;
  overflow: hidden;
}
.mian_z {
  margin-top: 10%;
  z-index: -12;
}
.mian > ul {
  overflow: hidden;
}
.mian > ul > li {
  overflow: hidden;
  min-height: 2.4rem;
}
.left {
  float: left;
  min-width: 1rem;
  line-height: 2.2rem;
  text-align: center;
}
.left span {
  font-weight: 700;
  font-size: 0.5rem;
}
.middle {
  display: block;
  float: left;
  width: 3.75rem;
  height: 2.5rem;
  padding: 0 0.2rem;
}
.right {
  float: left;
  margin-top: 0.66rem;
}
.right p {
  font-size: 0.45rem;
  margin-bottom: 0.2rem;
}
.right span {
  color: #ff5f00;
  font-size: 0.4rem;
}
.nav > div {
  position: relative;
}
.ys {
  color: #000;
}
.ys::after {
  content: "";
  content: "";
  width: 01rem;
  height: 0.1rem;
  background: #ffe100;
  position: absolute;
  left: 17%;
  bottom: -30%;
}
</style>
