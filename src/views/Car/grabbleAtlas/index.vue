<template>
  <div class="atlas">
    <div class="head">
      <h2>{{title}}</h2>
      <span>{{source}}</span>
    </div>
    <div class="nav" v-for="(item,index) in nav" :key="index">
      <img :src="'http://p9.pstatp.com/large/'+item.image_uri" />
      <span>{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ground_id: "",
      nav: [],
      title: "",
      source: ""
    };
  },
  created() {
    var that = this;
    this.$observer.$on("atlas", msg => {
      that.ground_id = msg;
      //   console.log(that.ground_id);
      axios({
        method: "get",
        url: "/abc/motor/m/article/detail",
        params: {
          group_id: that.ground_id
        }
      }).then(data => {
        console.log(data);
        that.nav = data.data.data.gallery_info.image_list;
        that.title = data.data.data.title;
        that.source = data.data.data.source;
        console.log(that.nav);
      });
    });
  }
};
</script>

<style lang="scss">
.atlas {
  position: absolute;
  left: 0;
  top: 1.9rem;
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
  .head {
    h2 {
      font-size: 0.6rem;
      font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
        Arial, sans-serif;
      font-weight: normal;
      margin-bottom: 0.38rem;
      line-height: 0.77rem;
    }
    p,
    span {
      display: inline-block;
      font-size: 0.4rem;
    }
    p {
      color: #c6c6c6;
    }
  }
  .nav {
    margin-top: 0.4rem;
    margin-bottom: 0.9rem;
    span {
      font-size: 0.5rem;
      font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
        Arial, sans-serif;
      line-height: 0.77rem;
    }
    img {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
