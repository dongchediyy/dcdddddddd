<template>
  <div class="box">
    <div class="nav" v-for="(item,index) in name" :key="index">
      <span>{{item.evaluate}}</span>
      <p>{{item.goodsDes}}</p>
      <h2>作者：{{item.goodsName}}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: []
    };
  },
  created() {
    axios({
      method: "get",
      url: "/goods/getgoods"
    }).then(data => {
      this.name = data.data.data;
      console.log(this.name);
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
  .nav {
    padding: 0.5rem 0.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica,
      Arial, sans-serif;

    span {
      font-size: 0.5rem;
      line-height: 0.66rem;
    }
    p {
      font-size: 0.3rem;
      line-height: 0.5rem;
      color: #666;
    }
    h2 {
      margin-top: 0.3rem;
      color: #ff5f52;
    }
  }
}
</style>
