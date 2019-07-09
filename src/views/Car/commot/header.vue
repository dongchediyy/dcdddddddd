<template>
  <div class="header">
    <div class="back iconfont icon-sdf" v-if="icon" @click="handlBack()"></div>
    <div class="log">
      <img src="../img/carLog.jpg" alt />
    </div>
    <h2 class="ss" v-if="sousuo">搜索</h2>
    <div class="ipt" v-if="Ipt" @click="handlIpt()">
      <i class="iconfont icon-fdj"></i>
      <input type="text" placeholder="搜你所想" />
    </div>
    <div class="client">
      <img src="../img/khd.png" alt />
      <span>
        打开
        <br />客户端
      </span>
      <i class="delimiter"></i>
    </div>
    <div class="menu" @click="handlclick()">
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reveal: true,
      hide: true,
      sousuo: false,
      icon: false,
      Ipt: true
    };
  },
  methods: {
    handlclick() {
      this.$observer.$emit("conceal", this.reveal);
      this.hide = !this.reveal;
      this.reveal = !this.reveal;
    },
    handlIpt() {
      (this.sousuo = true), (this.icon = true), (this.Ipt = false);
      // console.log(this.sousuo, this.icon, this.Ipt);
    },
    handlBack() {
      (this.sousuo = false), (this.icon = false), (this.Ipt = true);
      this.$router.push("/car");
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
.header {
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.4rem;
  display: flex;
  align-items: center;
  background: #333333;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  .back {
    color: #fff;
    margin-left: 0.3rem;
  }
  .log {
    width: 2.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      //   height: 100%;
    }
  }
  .ss {
    color: #fff;
    margin-right: 1.8rem;
  }
  .ipt {
    align-self: center;
    position: relative;
    input {
      width: 4rem;
      height: 0.69rem;
      border: 0;
      border-radius: 0.1rem;
      background: #5c5c5c;
      color: #fff;
    }
    i {
      position: absolute;
      left: 0.2rem;
      top: 0.15rem;
      color: #fff;
    }
  }
  input::-webkit-input-placeholder {
    text-align: center;
  }
  .client {
    display: flex;
    width: 2.3rem;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.7rem;
      height: 0.7rem;
    }
    span {
      color: #fff;
    }
    i {
      height: 0.8rem;
      width: 0.02rem;
      background: #fff;
    }
  }
  .menu {
    height: 100%;
    width: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .top {
      display: block;
      width: 0.4rem;
      height: 0.06rem;
      background: #fff;
      margin-bottom: 0.15rem;
    }
    .mid {
      display: block;
      width: 0.4rem;
      height: 0.04rem;
      background: #ffe100;
      margin-bottom: 0.15rem;
    }
    .bottom {
      display: block;
      width: 0.4rem;
      height: 0.06rem;
      background: #fff;
    }
  }
}
</style>
