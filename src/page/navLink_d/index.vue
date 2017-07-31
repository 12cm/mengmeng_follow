<template>
  <div class="mainBody">
    
    <vtitle>花艺师到家</vtitle>

    <vhead v-show="headerShow"></vhead>

    <div>
      <img src="../../../static/img/florist_banner.png" class="img-responsive">

      <div>
          <h2 class="conTit">鹿鸣花艺师 / 到家服务</h2>
          <p class="conMsg">手指一点，花艺师带着鲜花到企业上门做沙龙</p>
          <ul class="userList">
            <li v-for="item in userList.list">
              <img :src="item.img" class="img-responsive">
              <p class="userListNam">{{ item.name }}</p>
              <p class="userListDet">{{ item.detail }}</p>
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
        userList:[]
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
        this.$http.get('../../../static/data/allUser.data').then(function(res){
            _this.userList=res.data.result;
            console.log(_this.userList)
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.userList{font-size: 0;}
.userList>li{display: inline-block;width: 50%;text-align: center;margin-bottom: 20px;}
.userList>li>img{width: 95px;height: 95px;border-radius: 1000px;margin: 0 auto 15px auto}
.userListNam{font-size: 12px;padding-top: 1px;color: #333333;font-weight: 100;}
.userListDet{font-size: 12px;margin: 0;font-weight: 400;color: #999999;margin: 10px 0}
</style>