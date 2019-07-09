<template>
<div class="wrapper" ref="wrapper">
<slot></slot>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
name: "BScroll",
mounted() {
const options = {
scrollY: true,
scrollX: false,
mouseWheel: true,
click: true,
taps: true
};
this.scroll = new BScroll(this.$refs.wrapper, options);
}
};
</script>
<style lang="scss">
.wrapper {
height: 100%;
}
</style>
