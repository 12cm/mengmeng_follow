<template>
  <div class="mainBody">
    
    <vtitle>首页</vtitle>

    <vhead v-show="headerShow"></vhead>

    <div style="background: #f7f7f8;">

      <!-- swiper模块 -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id"><img :src="slide" class="img-responsive"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- swiper模块 -->

     <div class="modelWrap">
         <div class="index-title">
            <h4 class="slide-title">❀花艺培训</h4>
            <div class="slide-tip">--花艺师梦想实现地</div>
         </div>

         <div class="modelBox">
           <router-link to="/page/navLink_a/index">
             <img src="../../../static/img/wrapper-blog_1.jpg" class="img-responsive">
             <div class="modelInn">
               <p class="modelTip01">鹿鸣最新花艺培训课程</p>
               <p class="modelTip02">开课时间：2016年3月7日-3月15日</p>
             </div>
           </router-link>
         </div>
     </div>

     <div class="modelWrap">
         <div class="index-title">
            <h4 class="slide-title">❈订花</h4>
            <div class="slide-tip">--让爱绽放</div>
         </div>

         <div class="modelBox">
           <router-link to="/page/navLink_b/index">
             <img src="../../../static/img/wrapper-blog_2.jpg" class="img-responsive">
             <div class="modelInn">
               <p class="modelTip01">鹿鸣创意花品  欢迎预订</p>
               <p class="modelTip02">定制您的专属花束</p>
               <span class="modelTip03">298元起订</span>
             </div>
           </router-link>
         </div>
     </div>

     <div class="modelWrap">
         <div class="index-title">
            <h4 class="slide-title">❁玫瑰花茶</h4>
            <div class="slide-tip">--让时光再慢一点</div>
         </div>

         <div class="modelBox">
           <router-link to="/page/navLink_c/index">
             <img src="../../../static/img/wrapper-blog_3.jpg" class="img-responsive">
             <div class="modelInn">
               <p class="modelTip01">鹿鸣冷藏型玫瑰花茶 欢迎选购</p>
               <p class="modelTip02">花艺和茗茶的完美结合</p>
               <span class="modelTip03">168元起订</span>
             </div>
           </router-link>
         </div>
     </div>

     <div class="modelWrap">
         <div class="index-title">
            <h4 class="slide-title">花艺师到家</h4>
            <div class="slide-tip">--共度有花的美好时光</div>
         </div>

         <div class="modelBox">
           <router-link to="/page/navLink_d/index">
           <img src="../../../static/img/s (14).jpg" class="img-responsive">
           </router-link>
           <div class="modelInn">

             <!-- swiper模块 -->
             <div class="swiper-container swiper-userImg">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide"> 
                        <router-link to="/" v-for="item in user.list_1" :key="item.id" class="userLink">
                             <img :src="item.img" class="userImg">
                             <p class="userName">{{ item.name }}</p>
                             <p class="userTip">{{ item.detail }}</p>
                        </router-link>  
                      </div>
                      <div class="swiper-slide"> 
                        <router-link to="/" v-for="item in user.list_2" :key="item.id" class="userLink">
                             <img :src="item.img" class="userImg">
                             <p class="userName">{{ item.name }}</p>
                             <p class="userTip">{{ item.detail }}</p>
                        </router-link>  
                      </div>
                      <div class="swiper-slide"> 
                        <router-link to="/" v-for="item in user.list_3" :key="item.id" class="userLink">
                             <img :src="item.img" class="userImg">
                             <p class="userName">{{ item.name }}</p>
                             <p class="userTip">{{ item.detail }}</p>
                        </router-link>  
                      </div>
                      <div class="swiper-slide"> 
                        <router-link to="/" v-for="item in user.list_4" :key="item.id" class="userLink">
                             <img :src="item.img" class="userImg">
                             <p class="userName">{{ item.name }}</p>
                             <p class="userTip">{{ item.detail }}</p>
                        </router-link>  
                      </div>
                  </div>
                  <!-- 如果需要分页器 -->
                  <div class="swiper-pagination userImg-pagination"></div>
              </div>
              <!-- swiper模块 -->

           </div>
         </div>
     </div>


    <div class="modelWrap">
         <div class="index-title">
            <h4 class="slide-title">联系我们</h4>
            <div class="slide-tip">--以花为媒 结缘鹿鸣</div>
         </div>

         <div class="modelBox contactUs">
            <p class="contactUsMsg">深圳市鹿鸣商业发展有限公司的下属鹿鸣花坊--作为深圳第一个设计师品牌花店。资深设计师+资深花艺师的深度合作，带来全新的花艺体系。</p>
            <p class="contactUsTip">如果你想咨询我们的课程或者了解我们的商务合作，请与我们联系：</p>
            <p>客服电话：400-837-1977</p>
            <p>服务咨询时间：早上9点至下午6点 （节假日除外）</p>
            <div class="contactUsCode">
                <p>报名咨询请扫描下方二维码</p>
                <img src="../../../static/img/wc.jpg" alt="二维码">
            </div>
         </div>
     </div>

    </div>

    <vfooter></vfooter>

    <conNav></conNav>

  </div>
</template>

<script type="text/javascript">

import vhead from '@/components/common/head.vue'
import conNav from '@/components/common/conNav.vue'
import vtitle from '@/components/common/title.vue'
import vfooter from '@/components/common/footer.vue'

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import {mapGetters,matpActions} from 'vuex'

export default {
  data(){
      return {
        // arrList:[],
        user:[],
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true,
        },
        swiperSlides: [
        "../../static/img/slide/index_mobile_slide_1.jpg", 
        "../../static/img/slide/index_mobile_slide_2.jpg", 
        "../../static/img/slide/index_mobile_slide_3.jpg", 
        "../../static/img/slide/index_mobile_slide_4.jpg", 
        "../../static/img/slide/index_mobile_slide_5.jpg"
        ]
      }
    },
  computed:mapGetters([
    'headerShow'
  ]),
  watch:{
    $route(to,from){     //监听路由变化
      if(to.path=='/userInfo'){
        this.$store.dispatch('hideHeader')
      }else{
        this.$store.dispatch('showHeader')
      }
    }
  },
  components:{
    vhead,
    conNav,
    vtitle,
    vfooter
  },
    mounted(){
      //获取数据
      this.fetchData();
      // this.fnSlider();
      // this.userSlider();
    },
    methods:{
      fetchData(){
        var _this=this;

        this.$http.get('.../../../.../../../.../../../static/data/user.data').then(function(res){
            _this.user=res.data.result;
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.index-title{text-align: center;margin: 40px 0;}
.slide-title{font-size: 28px;color: #333;text-align: center;margin: 0;font-weight: 100;height: 50px;line-height: 50px;}
.slide-tip{white-space: nowrap;width: 160px;height: 48px;line-height: 51px;margin: 0 auto;font-size: 14px;color: #555;text-align: center;background-image: url(.../../../.../../../.../../../static/img/titBg.png);background-repeat: no-repeat;background-size: 100%;margin-top: -26px;text-align: left;padding: 0 0 0 15px;}
.modelWrap{padding: 0 15px;}
.modelInn{padding: 15px 10px;color: #AFAFAF;background-color: #fff;box-shadow: 0px 1px 10px #eee;position: relative;}
.modelTip01{font-size: 15px;color: #333;line-height: 24px;}
.modelTip02{font-size: 10px;color: #AFAFAF;}
.modelTip03{font-size: 14px; position: absolute;right: 15px;top: 16px;color: #7AD6A4}
.swiper-userImg{padding-bottom: 50px;}
.userImg{width: 95px;height: 95px;border-radius: 1000px;}
.userLink{display: inline-block;width: 50%;text-align: center;padding: 10px 0;}
.userName{font-size: 12px;color: #333;}
.userTip{font-size: 12px;color: #999;}
.contactUs>p{font-size: 12px;color: #555;line-height: 20px;margin: 12px 0;}
.contactUs>.contactUsMsg{font-size: 14px;color: #555}
.contactUs>.contactUsTip{font-size: 14px;color: #333;font-weight: bold;}
.contactUsCode{text-align: center;}
.contactUsCode>p{font-size: 14px;font-weight: bold;color: #333;margin: 15px 0;}
.contactUsCode>img{width: 165px;height: 165px;margin-bottom: 15px;}
</style>