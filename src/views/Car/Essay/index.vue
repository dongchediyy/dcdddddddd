<template>
  <div>
    <keep-alive>
      <Header />
    </keep-alive>

    <div class="box">
      <router-link
        to="/car/carNav"
        class="newList"
        v-for="(item,index) in news"
        :key="index"
        @click.native="hanglCarNav()"
      >
        <div :class="item.info.image_list.length==1?'action':''">
          <h2>{{item.info.title}}</h2>
          <div class="img">
            <!-- <img :src="item.info.image_list[0].url_list[0].url" alt />
          <img :src="item.info.image_list[1].url_list[1].url" alt />
            <img :src="item.info.image_list[2].url_list[2].url" alt />-->
            <!-- <img :src="item.info.image_list.length==1?item.info.image_list[0].url_list[0].url:''" alt />
          <img :src="item.info.image_list[1].url_list[1].url" alt />
            <img :src="item.info.image_list[2].url_list[2].url" alt />-->
            <img
              v-for="(itemImg,indexImg) in item.info.image_list"
              :key="indexImg"
              :src="itemImg.url_list[0].url"
            />
          </div>
        </div>
        <div class="source">
          <span>{{item.info.repost_info.name}}</span>
          <span>{{item.info.comment_count}}评论</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import Header from "../commot/header.vue";
import axios from "axios";
export default {
  data() {
    return {
      news: []
    };
  },
  methods: {
    hanglCarNav() {
      this.$observer.$emit("carNav", false);
    }
  },

  components: {
    Header
  },
  created() {
    axios({
      method: "get",
      url:
        "/abc/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car&max_behot_time=0&min_behot_time=0&web_id=6708524983855220238&impression_info=%7B%22page_id%22:%22page_category%22,%22sub_tab%22:%22motor_car%22,%22product_name%22:%22m_station%22,%22zt%22:%22tt_m_car%22%7D&tt_from="
    }).then(date => {
      var newData = date.data.data;
      // console.log(newData);
      // console.log(date.data.data[0].info.title);
      // console.log(date.data.data[0].info.image_list[0].url_list[0].url);
      // console.log(date.data.data[0].info.comment_count);
      // console.log(date.data.data[0].info.repost_info.name);
      this.news = newData;
      // console.log(this.news);
      //评论 comment_count  作者media_info  repost_info
      // this.news.push(newData);
      // console.log(this.news);
    });
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 2.8rem;
  .newList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.02rem solid #ccc;
    width: 100%;
    min-height: 3.3rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
    h2 {
      font-size: 0.55rem;
      margin-top: 0.5rem;
      font-weight: normal;
      line-height: 0.7rem;
      font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
        Arial, sans-serif;
    }
    .img {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 0.3rem 0;
      img {
        width: 33%;
        height: 1.8rem;
      }
    }
  }
  .source {
    display: flex;
    margin-bottom: 0.4rem;
    span {
      color: #999;
      margin-right: 0.2rem;
    }
  }
  .action {
    display: flex;
    justify-content: space-between;
    .img {
      img {
        width: 100%;
        height: 2.5rem;
      }
    }
  }
}
</style>
