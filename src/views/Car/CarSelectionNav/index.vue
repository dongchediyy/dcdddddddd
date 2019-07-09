<template>
  <div class="box">
    <div class="sell">
      <div class="sale" @click="sale()">
        在售
        <span class="span1" v-show="span==0"></span>
      </div>
      <div class="Nosale" @click="Nosale()">
        未售/停售
        <span class="span2" v-show="span==1"></span>
      </div>
    </div>
    <div class="Carbt">{{carSale[0].info.sub_brand_name}}</div>
    <router-link to class="LookCar" tag="div" v-for="(itemCar,indexCar) in carSale" :key="indexCar">
      <div class="LookCarImg">
        <img :src="itemCar.info.image_url" />
      </div>
      <div class="LookCarNave">
        <span>{{itemCar.info.series_name}}</span>
        <p>{{itemCar.info.dealer_price}}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      brandId: "",
      //以售卖
      carSale: [],
      //未售卖
      carNosale: [],
      //第三个属性保存变换之前在售卖的数据
      carShop: [],
      span: 0
    };
  },
  methods: {
    sale() {
      this.span = 0;
      this.carSale = this.carShop;
    },
    Nosale() {
      this.span = 1;
      this.carShop = this.carSale;
      this.carSale = this.carNosale;
    }
  },
  created() {
    var that = this;
    this.$observer.$on("brandId", msg => {
      that.brandId = msg;
      axios({
        method: "get",
        url:
          "/abc/motor/brand/m/v4/series/?device_id=0&city_name=%E6%B7%B1%E5%9C%B3",
        params: {
          brand_id: that.brandId
        }
      }).then(data => {
        //在售
        // console.log(data.data.data);
        that.carSale = [];
        var Cartrue = data.data.data.online_list;
        for (var i = 0; i < Cartrue.length; i++) {
          if (Cartrue[i].info.image_url != null) {
            that.carSale.push(Cartrue[i]);
          }
        }
        //未售
        that.carNosale = [];
        var CarFalse = data.data.data.excluded_online_list;
        for (var j = 0; j < CarFalse.length; j++) {
          if (CarFalse[j].info.image_url != null) {
            that.carNosale.push(CarFalse[j]);
          }
        }
        console.log(that.carSale);
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 1.4rem;
  .sell {
    width: 100%;
    height: 1rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      position: relative;
      font-size: 0.4rem;
      color: #000;
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
        Helvetica, Arial, sans-serif;
      margin: 0.3rem;
      .span1 {
        position: absolute;
        width: 0.8rem;
        top: 0.64rem;
        height: 2px;
        background: #ffe100;
      }
      .span2 {
        position: absolute;
        width: 0.8rem;
        top: 0.64rem;
        left: 0.4rem;
        height: 2px;
        background: #ffe100;
      }
    }
  }
  .Carbt {
    width: 100%;
    height: 0.8rem;
    background: #f4f5f6;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    font-size: 0.38rem;
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Helvetica,
      Arial, sans-serif;
    color: #666;
  }

  .LookCar {
    width: 100%;
    height: 2rem;
    border-bottom: 0.01rem solid #e6e6e6;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    .LookCarNave {
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
        Helvetica, Arial, sans-serif;

      span {
        display: block;
        font-size: 0.45rem;
        color: #000;
        margin-bottom: 0.3rem;
      }
      p {
        color: #ff9100;
        font-size: 0.4rem;
      }
    }
    .LookCarImg {
      margin-right: 0.3rem;
      img {
        width: 3rem;
      }
    }
  }
}
</style>
