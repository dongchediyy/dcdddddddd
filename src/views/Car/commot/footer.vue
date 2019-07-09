<template>
  <div class="box" v-if="clean">
    <h3 @click="hanglClean()">X</h3>
    <img src="../img/khd.png" alt />
    <h2>看车选车买车就上懂车帝</h2>
    <button>打开App</button>
  </div>
</template>
<script>
export default {
  methods: {
    hanglClean() {
      this.clean = false;
    }
  },
  data() {
    return {
      clean: true
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  position: fixed;
  width: 100%;
  height: 1.3rem;
  background: #333;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    color: #fff;
    font-size: 0.4rem;
    font-weight: normal;
    margin-left: 0.3rem;
  }
  img {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.3rem;
  }
  h2 {
    color: #fff;
    margin-right: 0.6rem;
  }
  button {
    border: 0;
    width: 2rem;
    height: 0.6rem;
    background: #ffe100;
    border-radius: 0.1rem;
  }
}
</style>
