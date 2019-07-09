<template>
  <div class="cr">
    <keep-alive>
      <Header />
    </keep-alive>

    <div class="box">
      <div class="title">
        <div class="titleTyle">
          <div v-for="(item,index) in carMsg[0].info.brand" :key="index">
            <img :src="item.image_url" />
            {{item.brand_name}}
          </div>
        </div>
        <div class="titleCar">
          <div v-for="(itemImg,indexImg) in carMsg[0].info.series" :key="indexImg">
            <img :src="itemImg.cover_image" alt />
            <span>{{itemImg.series_name}}</span>
          </div>
        </div>
        <div class="history">
          我浏览过：
          <span v-for="(itemHis,indexHis) in carMsg[1].info.data.history" :key="indexHis">战车</span>
        </div>
      </div>
      <div class="carDetailed">
        <div class="carDetailedBt">
          <div class="BT">Car</div>
          <router-link
            class="nav"
            v-for="(itm,idx) in CarList"
            :key="idx"
            :id="carIndex==idx?'active':''"
            @click.native="hanglCar(idx)"
            tag="div"
            to="/car/CarSelection/CarNav"
          >
            <img :src="itm.list[0].img" />
            {{itm.list[0].name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../commot/header.vue";
import axios from "axios";
export default {
  components: {
    Header
  },
  data() {
    return {
      carMsg: [],
      CarList: [],
      carIndex: -1
    };
  },
  methods: {
    hanglCar(index) {
      var that = this;
      this.carIndex = index;
      this.$observer.$emit("handlCar", false);
      this.$observer.$emit("brandId", that.CarList[index].list[0].brand_id);
    }
  },
  created() {
    axios({
      method: "get",
      url: "/abc/motor/brand/m/v1/brand/?device_id=0"
    }).then(data => {
      this.carMsg = data.data.data;
      // console.log(data.data.data);
      // let CarList = [{ index: "A", list: [{ img: "", name: "" ,brand_id:''}] }];
      for (var i = 0; i < this.carMsg.length; i++) {
        if (
          this.carMsg[i].info.pinyin != null &&
          this.carMsg[i].info.image_url != null
        ) {
          // console.log(this.carMsg[i].info.pinyin);
          this.CarList.push({
            index: this.carMsg[i].info.pinyin,
            list: [
              {
                img: this.carMsg[i].info.image_url,
                name: this.carMsg[i].info.brand_name,
                brand_id: this.carMsg[i].info.brand_id
              }
            ]
          });
        }
      }
      // console.log(this.CarList);
    });
  }
};
</script>
<style lang="scss" scoped>
.cr {
  height: 100%;
}
.box {
  width: 100%;
  // height: 100%;
  position: absolute;
  left: 0;
  top: 2.8rem;
  // padding-top: 3rem;
  .title {
    width: 100%;
    .titleTyle {
      display: flex;
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      box-sizing: border-box;
      width: 100%;
      div {
        width: 25%;
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
          Helvetica, Arial, sans-serif;
        color: #666;
        font-size: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 0.7rem;
          height: 0.7rem;
        }
      }
    }
    .titleCar {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      padding: 0 0.5rem;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;

      div {
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
          Helvetica, Arial, sans-serif;
        color: #000;
        font-size: 0.4rem;
        margin-bottom: 0.8rem;
        img {
          width: 90%;
          height: 80%;
          margin-bottom: 0.3rem;
        }
      }
    }
    .history {
      padding: 0.38rem 0.5rem;
      box-sizing: border-box;
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
        Helvetica, Arial, sans-serif;
      color: #c6c6c6;
      font-size: 0.4rem;
      span {
        font-size: 0.35rem;
      }
    }
  }
  .carDetailed {
    width: 100%;
    .carDetailedBt {
      width: 100%;
      .BT {
        height: 0.8rem;
        padding: 0 0.5rem;
        background: #f4f5f6;
        line-height: 0.8rem;
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
          Helvetica, Arial, sans-serif;
        color: #969797;
        font-size: 0.4rem;
      }
      .nav {
        padding: 0.3rem 0.6rem;
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
          Helvetica, Arial, sans-serif;
        font-size: 0.4rem;
        color: #666;
        display: flex;
        align-items: center;

        img {
          width: 0.8rem;
          height: 0.8rem;
          margin-right: 0.5rem;
        }
      }
      #active {
        background: #ccc;
      }
    }
  }
}
</style>
