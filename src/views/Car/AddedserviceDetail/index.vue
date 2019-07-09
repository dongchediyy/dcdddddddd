<template>
  <div class="mian1_z">
    <div class="title_z">
        <p class="title">{{title}}</p>
        <p class="bot">
            <span>{{source}}</span>
            <span>04-22</span>
            <span>10.22</span>
        </p>
    </div>
    <div class="cont" v-html="cont">

    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cont: [],
      id: "",
      cont:"",
      title:"",
        source:""
    };
  },
  created() {
    var that = this;
    this.$observer.$on("change", mes => {
      // console.log(that);
      that.id = mes;
         axios({
              method: "get",
              url: "/abc/motor/m/article/detail",
              params: {
                      group_id: that.id
                      }
      }).then(data => {
        //     console.log(data);
        // console.log(data.data.data.content);
        that.title=data.data.data.title;
        that.source=data.data.data.source;
        that.cont=data.data.data.content;
      });
    });
    console.log(that.id);
  }
};
</script>
<style>
.mian1_z {
  margin-top: 30%;
  width: 94%;
  margin-left: 3%;
}
.title_z{
    
}
.title{
    font-size: 0.7rem;
    line-height: 0.8rem;
}
.bot{
margin-top: 0.25rem;
}
.bot span{
    font-size: 0.4rem;
    color: #999;
}
.bot span:nth-child(1){
    color: #333 !important;
    font-size: 0.4rem
}
.cont{
    overflow: hidden;
    font-size: 0.55rem;
    
}
.cont p{
    line-height:1rem;
    
}
.cont h1{
    font-weight: normal;
  line-height:1rem;
     font-size: 0.55rem;
}
.pgc-img{
    margin-top: 2%;
}
.pgc-img img{
    width: 100%;
    display:block;
}
</style>
