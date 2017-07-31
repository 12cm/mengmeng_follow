<template>
<div class="shoppingCarWrap">

<div class="shoppingCarMask" @click="hideModel()"></div>

<div class="shoppingCarMsg">
	<div class="productMsg">
	    <a class="closeLink" href="javascript:void(0)" @click="hideModel()"><img src="../../../static/img/close.png"></a>
	    <img :src="follow_art.img" class="img-responsive productImg">
	    <h3 class="ProductName">{{follow_art.title}}</h3>
		<p>售价 <span class="productPri">￥{{follow_art.price}}</span></p>
		<p>已选择：<span>{{nowMsg}}</span></p>
	</div>

	<div class="userAddress">
		<p class="addressTip">配送区域</p>
		<ul class="addressList">
			<li v-for="(item, index) in follow_art.city" @click="radio(index,item)" :class="{active:index === nowindex}">
			{{item.name}}
			</li>
		</ul>
	</div>

	<div class="productNumBox">
		<span class="productNum">数量</span>

        <div class="productChangeNum">
        	<a href="javascript:void(0)" @click="changeMoney(-1)">-</a>
        	<input type="text" v-model="number" @keyup="fixNumber">
        	<a href="javascript:void(0)" @click="changeMoney(1)">+</a>
        </div>

        <span class="productStock">( 库存{{ follow_art.productStock }}件 )</span>
	</div>

	<div class="shoppingOver">
		<a @click="joinCar()" href="javascript:void(0)">加入购物车</a>
		<router-link v-show="toPayShow" class="shoppingAccout" to="/page/toPay/toPay">去结算</router-link>
	</div>

</div>

</div>
</template>

<script>
import {mapMutations} from 'vuex'



export default {
	data(){
      return {
      	follow_art:{},
      	number:1,
      	max: "100",
	    min: "1",
	    nowindex: 0,
	    nowMsg:"北京 (免运费)",
	    toPayShow:false,
	    nofirst:false
      }
    },
    mounted(){
        this.fetchData();
    },
    computed:{
    },
	methods:{
		// 隐藏购物车弹出框
		hideModel(){
	    	this.setModel(false)
	    },

	    ...mapMutations({
           setModel: 'SET_SHOPPINGCAR_STATE'
        }),
        joinCar: function(){
            var followId = this.$route.params.id;
        	var ShoppingCart = localStorage.getItem("ShoppingCart");  
	        if (ShoppingCart == null || ShoppingCart == "") {  
	            //第一次加入商品  
	            var jsonstr = { "productlist": [{"id": this.follow_art.id,"title": this.follow_art.title,"img":this.follow_art.img,"price":this.follow_art.price,"number":this.number,"checked":this.follow_art.checked}] };  
	            localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));  
	        } else {  

	            var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
	            var productlist = jsonstr.productlist; 
	            //新添加的数据
                var result = false;
                
                //查找购物车中是否有该商品 
	            for (var i in productlist) {  
		            if (productlist[i].id == followId) {  
		                productlist[i].number += this.number;
		                result = true;
		            }
		        }

		        if (!result){
		        	//没有该商品就直接加进去 
		        	productlist.push({"id": this.follow_art.id,"title": this.follow_art.title,"img":this.follow_art.img,"price":this.follow_art.price,"number":this.number,"checked":this.follow_art.checked});
		        }
	            
	            //保存购物车  
	            localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));  
	        };
	        this.toPayShow = true;
        },
        // 加载对应数据
	    fetchData(){
	        var _this=this;
	        var followId = this.$route.params.id;
	        this.$http.get('../../../static/data/follow_art.data').then(function(res){
            for(var i in res.data.lists) {
		        if (res.data.lists[i].id == followId) {
		        	_this.follow_art = res.data.lists[i];
		        	// console.log(_this.follow_art)
		        }
		    }    
	        }).catch(function(err){
	          console.log(err);
	        });
	    },

	    // 多选激活 selectedProduct(item)
		// selectedProduct: function(item){
		// 	if (typeof item.checked == "undefined") {
		// 		//Vue.$set(item,"checked",true);   //全局注册checked属性
		// 		this.$set(item,"checked",true);  //局部注册checked属性
		// 	}else{
		// 		item.checked = !item.checked;
		// 	}
		// },

        // 单选激活
	    radio (index,item) {
	      this.nowindex = index;
	      this.nowMsg = item.name
	    },
        
        // 只允许输入数字，且最大为100，最小为1
	    fixNumber () {
	      let fix
	      if (typeof this.number === 'string') {
	        fix = Number(this.number.replace(/\D/g, ''))
	      }
	      else {
	        fix = this.number
	      }
	      if (fix > this.max || fix < this.min) {
	        fix = this.min
	      }
	      this.number = fix
	    },
        
        // 点击加减改变数量，最大为100，最小为1
	    changeMoney: function(way){
	    	if (way>0) {
	    		if (this.number>=100) {
					this.number = 100;
				}else{
					this.number++;
				}
			}else{
				if (this.number<=1) {
					this.number = 1;
				}else{
					this.number--;
				}
				 
			}
		}
		
	}

}
</script>

<style scoped>
.shoppingCarWrap{position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1001;transition: all .5s ease-in-out;}
.shoppingCarMask{position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: #000;opacity: 0.6;}
.shoppingCarMsg{position: fixed;width: 100%;padding: 20px 15px;left: 0;bottom: 0;background-color: #fff;z-index: 1002;}
.productMsg{position: relative;padding-left: 95px;margin-bottom: 30px;}
.productImg{width: 82px;height: 82px;position: absolute;top: 0;left: 0;}
.ProductName{font-size: 1.6rem;color: #333; margin-bottom: 20px;}
.productMsg>p{color: #999;font-size: 1.4rem}
.productMsg>p>.productPri{color: #15a07b;font-size: 18px;font-weight: 400;}
.addressTip{color: #999;font-size: 1.2rem;margin-bottom: 15px;}
.addressList>li{display: inline-block;font-size: 12px;padding: 0 10px;height: 25px;line-height: 25px;color: #555;border: 1px solid #ddd;margin-bottom: 10px;margin-right: 8px;}
.addressList>li.active{border: 1px solid #15a07b;}
.productNumBox{margin: 30px 0;}
.productNum{color: #999;font-size: 1.2rem}
.productChangeNum{display: inline-block;margin-left: 30px;margin-right: 4px;border: 1px solid #ddd;padding: 0 4px 0 4px;}
.productChangeNum>a{display: inline-block;width: 20px;height: 20px;color: #333;line-height: 16px;border: 1px solid #ddd; border-radius: 1000px;text-align: center;}
.productChangeNum>input{font-size: 1.4rem;width: 60px;height: 30px;line-height: 30px;text-align: center;border-width: 0 1px 0;border-style: solid;border-color: #ddd;outline: 0;}
.productStock{color: #999;font-size: 1.2rem}
.shoppingOver{font-size: 0;}
.shoppingOver>a{font-size: 14px; display: inline-block;width: 48%;background-color: #15a07b;color: #fff;text-align: center;padding: 10px 0;border-radius: 5px;}
.shoppingOver>.shoppingAccout{margin-left: 4%;}
.closeLink{position: absolute;right: 0;top: 0;}
.closeLink>img{width: 30px;}
</style>