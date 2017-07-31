<template>
  <div class="mainBody">
    
    <vtitle>玫瑰花茶</vtitle>

    <vhead v-show="headerShow"></vhead>

    <div>
      <img src="../../../static/img/tea_banner.jpg" class="img-responsive">

      <div>
          <h2 class="conTit mb20">{{ productList.title }}</h2>
          <ul class="productList">
            <li v-for="item in productList.list">
              <img :src="item.img" class="img-responsive">
              <p class="productListTit txtOver">{{ item.title }}</p>
              <p class="productListPri txtOver">{{ item.price }}</p>
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
        productList:[]
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
        this.$http.get('../../../static/data/product.data').then(function(res){
            _this.productList=res.data.result;
            console.log(_this.followList)
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.productList{font-size: 0;}
.productList>li{display: inline-block;width: 50%;margin-right: 0;margin-bottom: 20px;padding: 0 15px}
.productListTit{font-size: 14px;font-weight: normal;text-align: center;margin: 15px 0 10px 0;}
.productListPri{font-size: 13px;font-weight: 100;color: #15a07b;text-align: center;}
</style>