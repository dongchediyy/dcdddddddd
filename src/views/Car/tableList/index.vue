<template>
  <div class="call" v-show="reveal">
    <div class="box">
      <div class="back_sy" @click="handLBack()">
        <img src="../img/syBack.jpg" alt />
        <h2>回到首页</h2>
      </div>
      <div class="list">
        <router-link
          v-for="(item,index) in name"
          :key="index"
          :to="item.path"
          tag="p"
          class="p"
          @click.native="handlList(index)"
        >{{item.name}}</router-link>
      </div>
    </div>
    <div class="mengban"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: [
        {
          name: "首页",
          path: "/car"
        },
        {
          name: "选车",
          path: "/car/CarSelection"
        },
        {
          name: "车友圈",
          path: "/car/Myring"
        },
        // {
        //   name: "小视频",
        //   path: "/Smallvideo"
        // },
        {
          name: "排行榜",
          path: "/Rankinglist"
        },
        {
          name: "服务",
          path: "/Addedservice"
        },
        {
          name: "文章",
          path: "/car/Essay"
        }
        // {
        //   name: "视频",
        //   path: "/Video"
        // },
        // {
        //   name: "新车",
        //   path: "/shouye"
        // },
        // {
        //   name: "SUV",
        //   path: "/CarSelection"
        // },
        // {
        //   name: "导购",
        //   path: "/Myring"
        // },
        // {
        //   name: "提车作业",
        //   path: "/Smallvideo"
        // },
        // {
        //   name: "用车",
        //   path: "/Rankinglist"
        // },
        // {
        //   name: "自驾游",
        //   path: "/Addedservice"
        // },
        // {
        //   name: "新能源",
        //   path: "/Essay"
        // },
        // {
        //   name: "试驾评测",
        //   path: "/Essay"
        // }
      ],
      reveal: false
    };
  },
  created() {
    this.$observer.$on("conceal", data => {
      this.reveal = data;
    });
  },
  methods: {
    handlList(index) {
      this.reveal = false;
      this.$observer.$emit("tableIndex", index);
    },
    handLBack() {
      this.$router.push("/car");
      this.reveal = false;
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  height: 100%;
}
.box {
  position: fixed;
  top: 1.8rem;
  left: 0.8rem;
  width: 9rem;
  min-height: 3rem;
  background: #fff;
  z-index: 9;

  .back_sy {
    width: 100%;
    height: 1.35rem;
    background: #f4f5f6;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.2rem;
    }
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    p {
      width: 33%;
      height: 1.2rem;
      background: #fff;
      border-right: 0.01rem solid #ccc;
      border-bottom: 0.01rem solid #ccc;
      text-align: center;
      line-height: 1.2rem;
      color: #000;
      font-size: 0.4rem;
    }
  }
}
.call {
  width: 100%;
  height: 100%;
  .mengban {
    width: 100%;
    height: 100%;
    background: #333;
    opacity: 0.6;
    position: absolute;
    left: 0;
    top: 0;
    // z-index: 999;
  }
}
</style>
