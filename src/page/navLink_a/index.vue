<template>
  <div class="mainBody">
    
    <vtitle>花艺培训</vtitle>

    <vhead v-show="headerShow"></vhead>

    <div>
      <img src="../../../static/img/slide.jpg" class="img-responsive">
      <h2 class="conTit">{{course.title}}</h2>
      <p class="conMsg">{{course.msg}}</p>
      <ul class="courseListWrap">
        <li v-for="item in course.list" class="courseList">
          <router-link :to="'/page/article/nla_Article/'+item.id">
            <img :src="item.img" class="img-responsive">
            <div class="courseMsgWrap">
              <p class="courseListTitle">{{item.title}}</p>
              <p class="courseListMsg">{{item.detail}}</p>
              <span>￥{{ item.price }} </span>
            </div>
          </router-link>
        </li>
      </ul>
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
        arrList:[],
        course:[]
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
        this.$http.get('../../../static/data/course.data').then(function(res){
            _this.course=res.data.result;
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.courseTit{font-size: 16px;line-height: 25px;height: 32px;margin: 20px auto 0;font-weight: 400;text-align: center;}
.courseMsg{font-size: 12px;color: #999999;line-height: 20px;text-align: center;}
.courseListWrap{padding: 20px;}
.courseList{box-shadow: 0px 0px 8px #ddd;margin-bottom: 30px;border-radius: 5px;}
.courseMsgWrap{position: relative;padding: 20px 10px;}
.courseListTitle{color: #15a07b;font-size: 14px;}
.courseListMsg{color: #999;font-size: 12px;}
.courseMsgWrap>span{position: absolute;right: 10px;top: 20px;color: #15a07b;}
</style>