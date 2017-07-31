<template>
<div class="mainBody">
  <vtitle></vtitle>
  <vhead v-show="headerShow"></vhead>
  <div>

     <img :src="follow_art.img" class="img-responsive">
				    
				    
     <p class="follow_art_Tit">{{follow_art.title}}</p>
     <p class="follow_art_msg" v-html="follow_art.titleMsg"></p>
     <p class="follow_art_pri">售价 <span>￥{{follow_art.price}}</span></p>

     <div class="follow_art_linkW"><a class="follow_art_link" @click="showModel()" href="javascript:void(0);">加入购物车</a></div>

     
     <div class="tabContent">

	     <div class="tabWrap">
			<ul class="tabLink">
				<li v-bind:class="{'active':tabsMethod==1}" @click="tabsMethod=1">商品详情</li>
				<li v-bind:class="{'active':tabsMethod==2}" @click="tabsMethod=2">商品评价</li>
				<li v-bind:class="{'active':tabsMethod==3}" @click="tabsMethod=3">更多推荐</li>
			</ul>
			<ul class="tabBox">
				<li v-bind:class="{'active':tabsMethod==1}">
					<div>
					    <p class="follow_art_titleTip">{{follow_art.titleTip}}</p>
					    <p class="follow_art_contentTitle">{{follow_art.contentTitle}}</p>
					    <p class="follow_art_contentMsg">{{follow_art.contentMsg}}</p>
					</div>
				</li>
				<li v-bind:class="{'active':tabsMethod==2}">
					<div>
					    2
					</div>
				</li>
				<li v-bind:class="{'active':tabsMethod==3}">
					<div>
					    3
					</div>
				</li>
			</ul>
		</div>

	</div>
  </div>

  <shoppingCar v-show="shoppingCarModel"></shoppingCar>

  <conNav conNavPage="2"></conNav>
</div>
</template>

<script>
import vhead from '@/components/common/head.vue'
import vtitle from '@/components/common/title.vue'
import conNav from '@/components/common/conNav.vue'
import shoppingCar from '@/components/common/shopping_car.vue'
import {mapGetters,mapMutations} from 'vuex'


export default{
	mounted(){
		this.fetchData();
	},
	data(){
		return {
			follow_art:{},
			arrList1:[],
	        arrList2:[],
	        arrList3:[],
	        tabsMethod:1
		}
	},
	computed:mapGetters([
	    'headerShow',
	    'shoppingCarModel'
	]),
	components:{
	    vhead,
	    vtitle,
	    conNav,
	    shoppingCar
	},
	watch:{

	},
	methods:{
		fetchData(){
	        var _this=this;
	        var followId = this.$route.params.id;
	        this.$http.get('../../../static/data/follow_art.data').then(function(res){
            for(var i in res.data.lists) {
		        if (res.data.lists[i].id == followId) {
		        	_this.follow_art = res.data.lists[i];
		        }
		    }    
	        }).catch(function(err){
	          console.log(err);
	        });
	    },
	    showModel(){
	    	this.setModel(true)
	    },
	    ...mapMutations({
           setModel: 'SET_SHOPPINGCAR_STATE'
        })
	}
}
</script>

<style scoped>
.tabLink{font-size: 0;}
.tabLink>li{color: #333333;font-size: 13px;height: 38px;line-height: 38px;display: inline-block;width: 33.33%;background-color: #eee;text-align: center;border-top: 2px solid #eee;}
.tabLink>li.active{background: #fff;border-top: 2px solid #15a07b;}
.tabBox>li{display: none;}
.tabBox>li.active{display: block}
.follow_art_Tit{max-height: 32px;font-size: 16px;font-weight: 400;text-align: center;line-height: 1.5;margin-bottom: 0;text-overflow: ellipsis;-webkit-line-clamp: 2;-webkit-box-orient: vertical;margin: 15px 0 5px;}
.follow_art_msg{font-size: 12px;text-align: center;margin-top: 0;color: #999;line-height: 20px;}
.follow_art_pri{text-align: center;color: #555;font-size: 12px;font-weight: 100;margin: 15px 0;}
.follow_art_pri>span{font-size: 20px;color: #15a07b;font-weight: 100;line-height: 30px;}
.follow_art_linkW{padding: 0 15px;margin-bottom: 20px;}
.follow_art_link{display: inline-block;width: 100%;height: 45px;line-height: 42px;margin: 15px 0 0 0;font-size: 16px;background-color: #15a07b;color: #fff;text-align: center;border-radius: 5px;}
.tabContent{padding: 0 15px;}
.follow_art_titleTip{font-size: 22px;color: #808080;margin: 40px 0 30px 0;}
.follow_art_contentTitle{font-size: 18px;color: #808080;line-height: 36px;margin-bottom: 15px;}
.follow_art_contentMsg{font-size: 18px;color: #808080;line-height: 36px;}
</style>