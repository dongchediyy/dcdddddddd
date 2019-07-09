<template>
  <div>
    <keep-alive>
      <Header />
    </keep-alive>
    <div class="box">
      <router-link to class="nav" tag="div" v-for="(item,index) in nav" :key="index">
        <div class="title">
          <img :src="item.info.user_info.avatar_url" />
          <span>{{item.info.user_info.name}}</span>
        </div>
        <div class="text">
          <span class="textBt">#{{item.info.repost_info.community_info.motor_name}}#</span>
          <span class="textNav">{{item.info.content}}</span>
        </div>
        <div class="textImg">
          <div v-for="(itemImg,indexImg) in item.info.image_list" :key="indexImg" class="img">
            <img :src="itemImg.url" />
          </div>
        </div>
        <div class="comt">
          <div class="zan">
            <i class="iconfont icon-zan"></i>
            {{item.info.digg_count}}
          </div>
          <div class="pinglun">
            <i class="iconfont icon-weibiaoti527"></i>
            {{item.info.comment_count}}
          </div>
        </div>
      </router-link>
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
      nav: []
    };
  },
  created() {
    axios({
      method: "get",
      url:
        "/abc/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_cmg&max_behot_time=0&min_behot_time=0&web_id=6708524983855220238&impression_info=%7B%22page_id%22:%22page_cmg_list%22,%22product_name%22:%22m_station%22,%22zt%22:%22tt_m_car%22%7D&tt_from="
    }).then(data => {
      this.nav = data.data.data;
      // console.log(this.nav);
    });
  },
  methods: {
    // hanglNav() {
    //   console.log(1);
    // }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  position: absolute;
  left: 0;
  top: 2.8rem;
  .nav {
    width: 100%;
    padding: 0.36rem 0.4rem 0 0.4rem;
    box-sizing: border-box;
    border-bottom: 4px solid #ccc;
    .title {
      width: 100%;
      display: flex;
      img {
        border-radius: 2rem;
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.2rem;
      }
      span {
        font-size: 0.4rem;
        color: #666;
        font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
          Arial, sans-serif;
        font-weight: 600;
        align-self: center;
      }
    }
    .text {
      width: 100%;
      .textBt {
        font-size: 0.4rem;
        font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
          Arial, sans-serif;
        color: #406599;
        margin-right: 0.2rem;
      }
      .textNav {
        font-size: 0.4rem;
        font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
          Arial, sans-serif;
        line-height: 0.6rem;
      }
    }
    .textImg {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0.3rem 0;
      .img {
        width: 32.6%;
        img {
          width: 100%;
        }
        .active {
          transform: scale(3); /*图片需要放大3倍*/
          position: absolute; /*是相对于前面的容器定位的，此处要放大的图片，不能使用position：relative；以及float，否则会导致z-index无效*/
          z-index: 100;
        }
      }
    }
    .comt {
      display: flex;
      width: 100%;
      height: 1rem;
      border-top: 1px solid #ccc;
      box-sizing: border-box;
      align-items: center;
      .zan {
        width: 50%;
        text-align: center;
      }
      .pinglun {
        width: 50%;
        text-align: center;
      }
    }
  }
}
</style>
