<template>
  <div>
    <keep-alive>
      <Header />
    </keep-alive>
    <div class="box">文章</div>
  </div>
</template>
<script>
import Header from "../commot/header.vue";

export default {
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 2.8rem;
}
</style>
