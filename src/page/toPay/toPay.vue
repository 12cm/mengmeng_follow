<template>
<div class="toPayWrap">

<div class="toPayBox">
	<div class="toPayOper">
		<a href="javascript:void(0)" class="allSelect" :class="{'checked':checkAllFlag}" @click="checkAll()"><span></span> 全选</a>
		<a href="javascript:void(0)" @click="deleteAll()">删除</a>
	</div>
		
	<ul class="toPayList">
		<li v-for="(item,index) in follow_art">
			<a class="singleSelect" v-bind:class="{'checked':item.checked}" @click="selectedProduct(item,index)" href="javascript:void(0)"><span></span></a>
			<div class="toPayMsg">
				<div class="toPayMsgInn">
					<img :src="item.img">
					<p class="toPayName">{{ item.title }}</p>
				</div>
				<a class="addressed txtOver" href="javascript:void(0)">配送区域：南山区 <img src="../../../static/img/more.png"></a>
			</div>
			<span class="toPayPri">{{ item.price }}</span>
			<a class="toPayDel" @click="deleteProduct(item,index)" href="javascript:void(0)">删除</a>
			<div class="productChangeNum">
	        	<a href="javascript:void(0)" @click="changeMoney(-1,index)">-</a>
	        	<input type="text" v-model="item.number" @keyup="fixNumber(index)">
	        	<a href="javascript:void(0)" @click="changeMoney(1,index)">+</a>
	        </div>
		</li>
	</ul>
	<p v-show="!follow_art.length" class="nullProduct">大人，您的购物车快要饿死了哦！</p>
	<div class="sureToPay">
	    <div class="sureToPayInn">
		    <div class="sureToPayMsg">
		    	<p class="allCount">合计：<span>￥{{totalMoney}}</span></p>
		    	<p>(不含运费)</p>
		    </div>
			<a href="javascript:void(0)" class="shoppingAccout">确认结算</a>
		</div>
	</div>

</div>

</div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
	data(){
      return {
      	follow_art:{},
      	number:"1",
      	max: "100",
	    min: "1",
	    nowIndex: 0,
	    totalMoney: 0,
	    checkAllFlag:false
      }
    },
    mounted(){
        this.fetchData();
    },
    computed: {
	    ...mapGetters([
	      'selledProduct'
	    ])
	},
	methods:{

        // 加载对应数据
	    fetchData(){
	        var _this=this;
	    	var ShoppingCart = localStorage.getItem("ShoppingCart");
	    	if (ShoppingCart == null || ShoppingCart == "") {
               return
	    	}else{
               var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
		       var productlist = jsonstr.productlist; 
		       _this.follow_art = "";
		       _this.follow_art = productlist;
	    	}
	    	
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
	    // radio (index) {
	    //   this.nowIndex = index
	    // },
        
        // 只允许输入数字，且最大为100，最小为1
	    fixNumber (index) {
	      let fix
	      if (typeof this.follow_art[index].number === 'string') {
	        fix = Number(this.follow_art[index].number.replace(/\D/g, ''))
	      }
	      else {
	        fix = this.follow_art[index].number
	      }
	      if (fix > this.max || fix < this.min) {
	        fix = this.min
	      }
	      this.follow_art[index].number = fix;
	      this.calcTotalPrice();
	    },
        
        // 点击加减改变数量，最大为100，最小为1
	    changeMoney: function(way,index){
	    	if (way>0) {
	    		if (this.follow_art[index].number>=100) {
					this.follow_art[index].number = 100;
				}else{
					this.follow_art[index].number++;
					this.calcTotalPrice();
				}
			}else{
				if (this.follow_art[index].number<=1) {
					this.follow_art[index].number = 1;
				}else{
					this.follow_art[index].number--;
					this.calcTotalPrice();
				}
			}
		},
		calcTotalPrice: function(){
            var _this = this;
			_this.totalMoney = 0;
			this.follow_art.forEach(function(item,index){
				if (item.checked) {
					_this.totalMoney += parseInt(_this.follow_art[index].price * _this.follow_art[index].number);
				}
			});
        },
		deleteProduct: function(item,index){
			//var index = this.follow_art.indexOf(item);
            var ShoppingCart = localStorage.getItem("ShoppingCart");  
	        var jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));  
	        var productlist = jsonstr.productlist;  
	        var list = []; 
	        for (var i in productlist) {  
	            if (i == index) {  
	                this.follow_art.splice(index,1);  
	            } else {  
	                list.push(productlist[i]);  
	            }  
	        }  
	        jsonstr.productlist = list;
	        localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));
	        this.calcTotalPrice();
		},
		deleteAll: function(){
            var _this = this;
	        var list = { "productlist": [] }; 
            for (var i in _this.follow_art) {  
	            if (_this.follow_art[i].checked) {  
	                delete _this.follow_art[i]
	            } else {  
	                list.productlist.push(_this.follow_art[i]);  
	            }  
	        };  
            _this.follow_art = list.productlist;
	        localStorage.setItem("ShoppingCart", "'" + JSON.stringify(list));
	        _this.calcTotalPrice();
		},
		checkAll: function(){
			var _this = this;
			if (_this.checkAllFlag) {
				_this.checkAllFlag = false;
				_this.follow_art.forEach(function(item,index){
					item.checked = false
				});
			}else{
				_this.checkAllFlag = true;
				_this.follow_art.forEach(function(item,index){
					item.checked = true
				});
			}
			this.calcTotalPrice();
		},
		selectedProduct: function(item,index){
            var _this = this;
			_this.follow_art[index].checked = !_this.follow_art[index].checked;
			this.calcTotalPrice();
		}

	}

}
</script>

<style scoped>
.nullProduct{text-align: center;color: #555}
.toPayOper{background-color: #f5f5f5;border-bottom: 1px solid #ddd;padding: 10px 15px;margin-bottom: 15px;}
.toPayOper>a{position: relative;padding: 5px;font-size: 1.4rem}
.toPayOper>.allSelect{padding-left: 30px;margin-right: 10px}
.allSelect>span{display: inline-block;width: 18px;height: 18px;background-image: url(../../../static/img/select.png);background-size: 18px;position: absolute;left: 0;top: 6px;}
.allSelect.checked>span{background-image: url(../../../static/img/selected.png);}
.toPayList{padding-bottom: 140px;}
.toPayList>li{position: relative;padding: 10px 150px 10px 50px;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;box-shadow: 5px 5px 20px 4px #f5f5f5;margin-bottom: 20px;}
.singleSelect{display: inline-block;position: absolute;left: 10px;top: 29px; padding: 5px;}
.singleSelect>span{display: inline-block;width: 18px;height: 18px;background-image: url(../../../static/img/select.png);background-size: 18px;}
.singleSelect.checked>span{background-image: url(../../../static/img/selected.png);}
.toPayMsgInn{position: relative;padding-left: 80px;padding-bottom: 54px;margin-bottom: 10px;}
.toPayMsgInn>img{width: 70px;height: 70px;position: absolute;left: 0;top: 0;}
.toPayMsgInn>p{color: #777;}
.toPayPri{position: absolute;right: 15px;top: 10px;color: #333;font-weight: 700;}
.toPayDel{position: absolute;right: 10px;top: 40px;padding: 5px;}
.addressed{display: inline-block;font-size: 1.2rem;position: relative;padding: 0 22px 0 5px;border: 1px solid #ddd;border-radius: 3px;width: 100%;height: 32px;line-height: 32px;color: #999}
.addressed>img{width: 20px;position: absolute;right: 0;top: 6px;}
.productChangeNum{position: absolute;right: 15px;bottom: 13px;display: inline-block;margin-left: 30px;border: 1px solid #ddd;padding: 0 4px 0 4px;border-radius: 3px;}
.productChangeNum>a{display: inline-block;width: 20px;height: 20px;color: #333;line-height: 16px;border: 1px solid #ddd; border-radius: 1000px;text-align: center;}
.productChangeNum>input{font-size: 1.4rem;width: 60px;height: 30px;line-height: 30px;text-align: center;border-width: 0 1px 0;border-style: solid;border-color: #ddd;outline: 0;}
.sureToPay{position: fixed;left: 0;bottom: 0;width: 100%;padding: 4px 0 10px 0;border-top: 1px solid #ddd;z-index: 1;background-color: #fff;}
.sureToPayInn{position: relative;padding: 10px 160px 10px 10px;}
.shoppingAccout{position: absolute;right: 15px;top: 10px;display: inline-block;color: #fff;font-size: 16px;text-align: center;border-radius: 3px;padding: 12px 29px 13px;background-color: #f44;}
.sureToPayMsg{text-align: right;}
.sureToPayMsg>p{color: #989898;font-size: 1.2rem;}
.sureToPayMsg>.allCount{margin-bottom: 4px;color: #333}
.sureToPayMsg>.allCount>span{font-size: 1.4rem;color: #f71;font-weight: 700;display: inline-block;margin-left: 4px;}
</style>