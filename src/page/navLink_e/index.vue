<template>
  <div class="mainBody">
    
    <vtitle>花+产品</vtitle>

    <vhead v-show="headerShow"></vhead>

    <div>
      <img src="../../../static/img/sideline_banner.jpg" class="img-responsive">

      <div>
          <h2 class="conTit">与你分享花心思的产品</h2>
          <p class="conMsg">    鹿鸣“带着鲜花去逛街”  花+产品</p>
          <ul class="fpList">
            <li v-for="item in fpList.list">
              <img :src="item.img" class="img-responsive">
              <p class="fpListNam txtOver">{{ item.name }}</p>
              <p class="fpListDet">{{ item.price }}</p>
            </li>
          </ul>

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

import {mapGetters,matpActions} from 'vuex'

export default {
  data(){
      return {
        fpList:[]
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
    },
    methods:{
      fetchData(){
        var _this=this;
        this.$http.get('../../../static/data/fp.data').then(function(res){
            _this.fpList=res.data.result;
            console.log(_this.fpList)
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.fpList{font-size: 0;}
.fpList>li{display: inline-block;width: 50%;text-align: center;margin-bottom: 20px;padding: 0 15px;}
.fpList>li>img{margin: 0 auto 15px auto}
.fpListNam{font-size: 14px;color: #333333;font-weight: normal;height: 25px;line-height: 25px;text-align: center;}
.fpListDet{font-size: 13px;margin: 0;font-weight: 100;color: #15a07b;text-align: center;}
</style>