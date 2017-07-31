<template>
  <div class="mainBody">
    
    <vtitle>订花</vtitle>

    <vhead v-show="headerShow"></vhead>

    <div>
      <img src="../../../static/img/order_banner.jpg" class="img-responsive">

      <div v-for="items in followList" class="followWrap">
          <h2 class="conTit">{{ items.title }}</h2>
          <p class="conMsg">{{ items.msg }}</p>
          <ul class="followList">
            <li v-for="item in items.list">
              <router-link :to="'/page/article/follow_art/'+item.id">
                <img :src="item.img" class="img-responsive">
                <p class="followListTit">{{ item.title }}</p>
                <p class="followListPri">{{ item.price }}</p>
              </router-link>
            </li>
          </ul>
          <router-link class="moreFollow" to="/page/navLink_a/index">更多花品 >></router-link>
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
        followList:[]
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
        this.$http.get('../../../static/data/follow.data').then(function(res){
            _this.followList=res.data.result;
            console.log(_this.followList)
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.followWrap{position: relative;}
.followList{font-size: 0;padding-bottom: 20px;}
.followList>li{display: inline-block;width: 50%;margin-right: 0;margin-bottom: 20px;padding: 0 15px}
.followListTit{font-size: 14px;font-weight: normal;height: 25px;line-height: 25px;color: #333;text-align: center;}
.followListPri{font-size: 13px;font-weight: 100;color: #15a07b;text-align: center;}
.moreFollow{position: absolute;bottom: 0;right: 15px;color: #15a07b}
</style>