<template>
  <div id="app">
    <keep-alive>
      <Header></Header>
    </keep-alive>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <keep-alive>
      <Title v-if="xianshi" />
    </keep-alive>
    <keep-alive>
      <TableList></TableList>
    </keep-alive>
    <keep-alive>
      <Footer></Footer>
    </keep-alive>
  </div>
</template>

<script>
import Header from "./views/Car/commot/header.vue";
import Title from "./views/Car/table1/table1.vue";
import TableList from "./views/Car/tableList/index.vue";
import Footer from "./views/Car/commot/footer.vue";
export default {
  name: "app",
  components: {
    Title,
    TableList,
    Footer,
    Header
  },
  data() {
    return {
      xianshi: true
    };
  },
  created() {
    this.$observer.$on("xianshi", msg => {
      this.xianshi = msg;
    });
    this.$observer.$on("cancel", data => {
      this.xianshi = data;
    });
    this.$observer.$on("handlCar", msgCar => {
      this.xianshi = msgCar;
    });
    this.$observer.$on("carNav", msgcarNav => {
      this.xianshi = msgcarNav;
    });
  }
};
</script>

<style lang="less">
body,
html {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
