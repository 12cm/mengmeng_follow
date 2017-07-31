<template>
<div class="mainBody">
  <vtitle>{{articleData.title}}</vtitle>
  <vhead v-show="headerShow"></vhead>
  <!-- <vnav vnavPage="1"></vnav> -->
  <div>

      <img :src="articleData.img" class="img-responsive">
      

      <div class="nla_Article_head">
      	<p class="nla_Article_tit">{{articleData.title}}</p>
      	<p class="nla_Article_time">{{articleData.titleMsg}}</p>
      	<span class="nla_Article_money">￥{{articleData.price}}</span>
      </div>

      <div class="nla_Article_con">
      	<p>{{articleData.titleTip}}</p>
      	<p>{{articleData.wechat}}</p>
      	<a class="nla_Article_report" href="">立即报名</a>
      </div>


      <div class="nla_Article_msg">
      	<h2 class="nla_Article_msgTit">{{articleData.contentTitle}}</h2>
      	<p class="nla_Article_msgTip">{{articleData.contentMsg}}</p>
      	<p class="nla_Article_msgWc">{{articleData.contentWc}}</p>
      </div>

      <div class="nla_Article_img">
	      <img :src="articleData.img01" class="img-responsive">
	      <img :src="articleData.img02" class="img-responsive">
	      <img :src="articleData.img03" class="img-responsive">
	      <img :src="articleData.img04" class="img-responsive">
	      <img :src="articleData.img05" class="img-responsive">
	      <img :src="articleData.img06" class="img-responsive">
	      <img :src="articleData.img07" class="img-responsive">
	      <img :src="articleData.img08" class="img-responsive">
	      <img :src="articleData.img09" class="img-responsive">
      </div>


  </div>
  <conNav conNavPage="1"></conNav>
</div>
</template>

<script>
import vhead from '@/components/common/head.vue'
import vtitle from '@/components/common/title.vue'
import conNav from '@/components/common/conNav.vue'
// import vnav from '../../components/nav.vue'
import {mapGetters} from 'vuex'

export default{
	mounted(){
		this.fetchData(this.$route.params.id);
		// console.log(this.$route.params.id)
	},
	data(){
		return {
			articleData:{}
		}
	},
	computed:mapGetters([
	    'headerShow'
	]),
	components:{
	    vhead,
	    vtitle,
	    conNav
	    // vnav
	},
	watch:{
		// $route(to,from){
		// 	//console.log(to);
		// 	var reg=/article\/\d+/;
		// 	if(reg.test(to.path)){
		// 		var articleId=this.$route.params.id || 0;
		// 		this.fetchData(articleId);
		// 	};
		// 	if(to.path=='/userInfo'){
		//         this.$store.dispatch('hideHeader')
		//     }else{
		//         this.$store.dispatch('showHeader')
		//     }
		// }
	},
	methods:{
		fetchData(id){
	        var _this=this;
	        this.$http.get('../../../static/data/nla_Article.data').then(function(res){
	            _this.articleData=res.data[id];
	            // console.log(_this.articleData)
	        }).catch(function(err){
	          console.log(err);
	        });
	    }


	}
}
</script>

<style scoped>
.nla_Article_head{font-size: 16px;line-height: 28px;position: relative;padding: 10px 35px;}
.nla_Article_tit{font-size: 16px;line-height: 28px;}
.nla_Article_time{font-size: 12px;color: #999;}
.nla_Article_money{position: absolute;right: 35px;top: 8px;color: #15a07b;font-size: 18px;font-weight: 500;}
.nla_Article_con{padding: 0 20px 10px 20px;position: relative;}
.nla_Article_con>p{font-size: 12px;color: #808080;margin: 2px 0;}
.nla_Article_msg{padding: 10px 20px;}
.nla_Article_msgTit{font-size: 26px;color: #008080;margin: 15px 0;}
.nla_Article_msgTip{font-size: 18px;line-height: 31.5px;color: #333}
.nla_Article_report{display: inline-block;background-color: #15a07b;color: #fff;position: absolute;right: 20px;bottom: 10px;border-radius: 5px;height: 32px;line-height: 32px;font-size: 14px;padding: 0 10px;}
.nla_Article_msgWc{font-size: 20px;color: #008080;line-height: 44px;}
.nla_Article_img{padding: 10px 20px;}
.nla_Article_img>img{margin: 8px 0;}
</style>