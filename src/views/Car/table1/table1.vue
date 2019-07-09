<template>
  <div class="table1">
    <router-link
      v-for="(item,index) in name"
      :key="index"
      :to="item.path"
      tag="div"
      @click.native="handSpan(index)"
    >
      {{item.name}}
      <span v-show="spanIndex==index"></span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "table1",
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
        //   path: "/car/Smallvideo"
        // },
        {
          name: "排行榜",
          path: "/car/Rankinglist"
        },
        {
          name: "服务",
          path: "/car/Addedservice"
        },
        {
          name: "文章",
          path: "/car/Essay"
        }
        // {
        //   name: "视频",
        //   path: "/car/Video"
        // }
      ],
      spanIndex: 0
    };
  },
  methods: {
    handSpan(index) {
      this.spanIndex = index;
      // this.$observer.$emit("add", index);
      // console.log(this.spanIndex);
    }
  },
  created() {
    this.$observer.$on("tableIndex", data => {
      this.spanIndex = data;
    });
    this.$observer.$on("span", msg => {
      this.spanIndex = msg;
    });
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
.table1 {
  position: fixed;
  left: 0;
  top: 1.4rem;
  height: 1.4rem;
  width: 100%;
  background: #333333;
  display: flex;
  overflow-x: auto;

  div {
    width: 17%;
    height: 100%;
    flex: 0 0 auto;
    text-align: center;
    align-self: center;
    font-size: 0.45rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    span {
      position: absolute;
      top: 1.1rem;
      display: block;
      width: 0.9rem;
      height: 0.1rem;
      align-self: center;
      background: #ffe100;
    }
  }
}
</style>
