<template>
  <div>
    <keep-alive>
      <Header />
    </keep-alive>

     <div class="cont">
        <ul>
            <li v-for="(item,index) in headList" :key="index">
                <img :src="item.icon_url">
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
    <div class="line"></div>
  
     
    <div class="mian">
        <router-link  class="mian_num" v-for="(items,index) in mainList" :key="index" tag="div" to="/car/Addedservice/AddedserviceDetail" @click.native="sendVal(index)">
           <div :class="items.info.image_list.length==1?'img_ys':''">
            <h2><span>{{items.info.title}}</span></h2>
            <div class="pic_list">
                <img 
                v-for="(itemImgs,index) in items.info.image_list" 
                :key="index"
                :src="itemImgs.url_list[0].url"
                >
            </div>
            </div>
            <div class="bot">
                <span>{{items.info.source}}</span>
                <span>{{items.info.comment_count}}评论</span>
                <!-- <span>7分钟前</span> -->
            </div>
        </router-link>
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
  methods:{
    sendVal(index){
     var id =this.mainList[index].unique_id_str
    //  console.log(id)
      this.$observer.$emit("change",id)
    }
  },
  data(){
return  {
        headList:[],
        mainList:[]

  }},
  created(){
    axios({
      method:"get",
      url:"/abc/motor/serv_page/api/v1/m/service_head?aid=1230&channel=m_web&device_platform=wap&category=motor_car_video&web_id=6709416620550915595&version_code=0&zt=tt_m_car"
    }).then(data=>{
          var list=data.data.data.service_list;
            // console.log(data.data.data.service_list);
            this.headList =list ;
        }),

      axios({
        method:"get",
        url:"/abc/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_service&max_behot_time=0&min_behot_time=0&web_id=6709416620550915595&impression_info=%7B%22page_id%22:%22page_ugc_video%22,%22product_name%22:%22m_station%22,%22zt%22:%22tt_m_car%22%7D&tt_from="
      }).then(data=>{
        var mian=data.data.data;
        

        
     
        // console.log(data.data.data[0].info);
        // console.log(data.data.data[0].share_info);
        this.mainList=mian;
        
      })
  }


};
</script>

<style  scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 2.8rem;
}


 .cont {
   margin-top: 30%;
        /* display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap; */
        overflow: hidden;
        padding: 0.2rem 0;
    }
    
    .cont>ul {
        overflow: hidden;
    }
    
    .cont>ul>li {
        width: 25%;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.08rem 0;
        margin-bottom: 0.2rem;
    }
    
    .cont>ul>li>img {
        width: 1rem;
        height: 1rem;
        display: block;
        margin-bottom: 0.1rem
    }
    
    .cont>ul>li>span {
        font-size: 0.4rem
    }
    
    .line {
        width: 100%;
        height: 0.08rem;
        background: #f4f5f6;
        /* margin-top: 0.02rem; */
    }
    
    .mian {
        width: 94%;
        margin-left: 3%;
        
    }
    
    .mian_num {
        border-bottom: 1px solid #e6e6e6;
        padding: 0.2rem 0;
        overflow: hidden;
    }
    
    .mian_num>h2 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        /*设置成弹性盒子 */
        display: -webkit-box;
        /*显示的个数 */
        -webkit-line-clamp: 2;
        /* 属性规定框的子元素应该被水平或垂直排列。 */
        -webkit-box-orient: vertical;
        font-style: normal !important;
    }
    
    .mian_num h2 span {
        font-size: 0.5rem;
        line-height: 0.65rem;
    }
    
    .pic_list {
      width: 3rem;
        display: flex;
        position: relative;
        margin: 0.2rem 0;
    }
    
    .pic_list>img {
        height: 100%;
        width: 100%;
        flex: 1;
        margin-right: 0.1rem
    }
    
    .bot {
        margin-top: 0.1rem;
            font-size: 0.35rem;
                color: #999;
    }
    .img_ys{
     display: flex;
     justify-content: space-between
    }
    
</style>
