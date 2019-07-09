<template>
  <div>
    <Header />
    <div class="grabble">
      <div class="Ipt">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" @blur.prevent="handlAdd()" v-model.lazy="comt" />
        <span class="iconfont icon-chacha" @click="handlClean()"></span>
        <button class="but" @click="cancel()">取消</button>
      </div>
      <div class="nav">
        <div class="navList">
          <div
            class="title"
            @click="hanglClick(index)"
            v-for="(item,index) in newsTitle"
            :key="index"
          >
            {{item.tab_name}}
            <span :class="span==index?'span':''"></span>
          </div>
        </div>
        <div class="box">
          <!-- 综合 -->
          <router-link
            to="/car/carNav"
            class="newList"
            v-for="(item,index) in news"
            :key="index"
            v-show="synthesize"
            tag="div"
          >
            <div class="action">
              <h2>{{item.title}}</h2>
              <div class="img">
                <img :src="img[index]" />
              </div>
            </div>
            <div class="source">
              <span>{{item.source}}</span>
              <span>{{item.comment_count}}评论</span>
            </div>
          </router-link>
          <!-- 图集 -->
          <router-link
            to="/car/grabble/atlas"
            v-show="atlasImg"
            class="newList"
            v-for="(itemImg,indexImg) in atlas"
            :key="indexImg"
            tag="div"
            @click.native="handlAtlas(indexImg)"
          >
            <div>
              <h2>{{itemImg.title}}</h2>
              <div class="img01">
                <img :src="itemImg.large_image_url" />
              </div>
            </div>
            <div class="source">
              <span>{{itemImg.source}}</span>
              <span>{{itemImg.comment_count}}评论</span>
            </div>
          </router-link>

          <!-- 找车 -->
          <router-link
            to
            v-show="LookCar"
            class="LookCar"
            tag="div"
            v-for="(itemCar,indexCar) in Car"
            :key="indexCar"
          >
            <div class="LookCarImg">
              <img :src="itemCar.white_pic_url" />
            </div>
            <div class="LookCarNave">
              <span>{{itemCar.brand_name}}-{{itemCar.series_name}}</span>
              <p>{{itemCar.agent_price}}</p>
            </div>
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
  methods: {
    handlAdd() {
      axios({
        method: "get",
        url:
          "/abc/motor/search/api/2/wap/search_content/?format=json&cur_tab=1&offset=0&count=10&motor_source=mweb&headless_mode=1",
        //get:params  post:data
        params: {
          keyword: this.comt
        }
      }).then(data => {
        // console.log(data);
        var msgData = data.data.data;
        this.news = msgData;
        // console.log(this.news);
        var titleData = data.data.tab.tab_list;
        // console.log(titleData);
        this.newsTitle = titleData;

        for (var i = 0; i < msgData.length; i++) {
          if (msgData[i].image_list.length != 0) {
            // console.log(msgData[i].image_list[0].url);
            this.img.push(msgData[i].image_list[0].url);
          } else {
            // console.log(msgData[i].middle_image);
            // console.log(msgData[i].middle_image.url || msgData[i].middle_image);
            this.img.push(
              msgData[i].middle_image.url || msgData[i].middle_image
            );
          }
        }
        // console.log(this.img);
        //title source  comment_count
      });
    },
    handlClean() {
      this.comt = "";
    },
    hanglClick(index) {
      this.span = index;
      if (index == 0) {
        this.synthesize = true;
        this.atlasImg = false;
        this.LookCar = false;
      }
      if (index == 1) {
        this.synthesize = false;
        this.atlasImg = true;
        this.LookCar = false;
        axios({
          method: "get",
          url:
            "/abc/motor/search/api/2/wap/search_content/?format=json&cur_tab=3&offset=0&count=10&motor_source=mweb&headless_mode=1",
          params: {
            keyword: this.comt
          }
        }).then(data => {
          //   console.log(data.data.data);
          this.atlas = data.data.data;
          //title image_list source comment_count
        });
      }
      if (index == 2) {
        this.LookCar = true;
        this.atlasImg = false;
        this.synthesize = false;
        axios({
          method: "get",
          url:
            "/abc/motor/search/api/2/wap/search_content/?format=json&cur_tab=6&offset=0&count=10&motor_source=mweb&headless_mode=1",
          params: {
            keyword: this.comt
          }
        }).then(data => {
          this.Car = data.data.data;
          console.log(this.Car);
        });
      }
    },

    //取消返回
    cancel() {
      this.$router.push("/car");
      this.$observer.$emit("cancel", true);
    },
    // 图集内容详情页
    handlAtlas(index) {
      var that = this;
      this.$observer.$emit("atlas", that.atlas[index].group_id);
    }
  },
  data() {
    return {
      comt: "",
      //综合
      news: [],
      //三个tab按钮 综合 图集 找车
      newsTitle: [],
      span: 0,
      img: [],

      //图集
      atlas: [],
      //找车
      Car: [],

      synthesize: true,
      atlasImg: false,
      LookCar: false
    };
  }
};
</script>

<style lang="scss" scoped>
//综合
.grabble {
  position: absolute;
  left: 0;
  top: 1.4rem;
  width: 100%;
  .Ipt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0.3rem 0.4rem;
    width: 100%;
    box-sizing: border-box;

    i {
      position: absolute;
      left: 6%;
    }
    input {
      width: 90%;
      height: 0.8rem;
      border: 0;
      background: #f8f8f8;
      text-align: center;
      outline: none;
    }
    span {
      position: absolute;
      right: 15%;
      font-size: 0.6rem;
    }
    .but {
      border: 0;
      background: #fff;
      height: 0.8rem;
    }
  }
  .nav {
    width: 100%;
    padding: 0 0.4rem;
    .navList {
      display: flex;
      .title {
        color: #999999;
        font-size: 0.45rem;
        margin-right: 0.4rem;
        .span {
          display: block;
          background: #ffe100;
          height: 0.1rem;
          width: 0.8rem;
          margin-top: 0.1rem;
        }
      }
    }
  }
}

//图集
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
    .img01 {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 0.3rem 0;
      img {
        width: 100%;
        // height: 60%;
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
//找车
.LookCar {
  width: 100%;
  height: 2rem;
  border-bottom: 0.01rem solid #e6e6e6;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  .LookCarNave {
    span {
      display: block;
      font-size: 0.45rem;
      color: #000;
      margin-bottom: 0.1rem;
    }
    p {
      color: #ff5f52;
    }
  }
  .LookCarImg {
    margin-right: 0.3rem;
    img {
      width: 3rem;
    }
  }
}
</style>
