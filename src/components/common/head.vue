<template>
<div>
<!-- 头部 -->
<header class="conHeadWrap">
    <div class="conHead RelativeBox">

      <a class="nav-link-mobile" href="javascript:void(0);" v-on:click="modelNav()">
          <span v-bind:class="{ modelLink01: isActive }"></span>
          <span v-bind:class="{ modelLink02: isActive }"></span>
          <span v-bind:class="{ modelLink03: isActive }"></span>
      </a>

      <div class="headTitle"><router-link to="/page/Home/index"><img src="../../../static/img/logo.png"></router-link></div>
      <div class="headUser">
      <router-link to="/page/Login/login" class="login"><img src="../../../static/img/account.png"></router-link>
      <router-link to="/page/toPay/toPay"><img src="../../../static/img/cart.png"> <span class="productNum">{{ this.follow_art.length }}</span> </router-link>
      </div>
    </div>
</header>
<!-- 头部 -->

<!-- 返回上一页 -->
<div class="navBack">
    <a href="javascript:void(0);" v-on:click="navBack()"><img src="../../../static/img/back.png"></a>
</div>
<!-- 返回上一页 -->

<!-- 弹出导航栏 -->
<div class="wrapper wrapper-mobile_nav" v-bind:class="{ modelActive: isActive }">
    <ul class="mobile-link">
        <li><router-link to="/page/Home/index">首页</router-link></li>
        <li><a href="">花艺培训</a></li>
        <li>
            <a href="javascript:void(0);">订花</a>
            <ul class="mobile-sublink">
                <li><a href="">日常用花</a> </li>
                <li><a href="">爱情用花</a> </li>
                <li><a href="">鲜花盒</a> </li>
                <li><a href="">干花</a> </li>
                <li><a href="">永生花</a> </li>
            </ul>
        </li>
        <li><a href="/page/navLink_c/index">玫瑰花茶</a></li>
        <li><a href="/page/navLink_d/index">花艺师到家</a></li>
        <li><a href="/page/navLink_e/index">花+产品</a></li>
        <li><a href="">关于鹿鸣</a></li>
    </ul>
</div>
<!-- 弹出导航栏 -->
</div>
</template>


<script>
export default {
	data(){
      return {
        isActive:false,
        follow_art:{}
      }
    },
  mounted(){
      this.fetchData();
  },
	methods:{
		modelNav(){
			this.isActive = !this.isActive;
		},
    navBack(){
      //window.history.go(-1);
      this.$router.back();
    },
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
        
      }
	}
}
</script>

<style scoped>
.conHeadWrap{position: fixed;top: 0;left: 0;width: 100%;z-index: 10;background-color: #fff;z-index: 1001}
.nav-link-mobile{position: absolute;top: 20px;left: 15px;height: 21px;}
.nav-link-mobile span {display: block;background: #000;border-radius: 3px;width: 20px;height: 1px;margin-bottom: 5px;transition: all .5s ease-in-out;}
.nav-link-mobile .modelLink01{display: none;}
.nav-link-mobile .modelLink02{transform: rotate(45deg);-webkit-transform: rotate(45deg);margin-bottom: 0;}
.nav-link-mobile .modelLink03{transform: rotate(-45deg);-webkit-transform: rotate(-45deg);margin-bottom: 0;}
.headTitle{text-align: center;padding: 2px 0;}
.headTitle>a{display: inline-block;}
.headTitle img{height: 45px}
.headUser{position: absolute;right: 13px;top: 14px;}
.headUser>a{display: inline-block;position: relative;padding: 2px;}
.headUser>.login{margin-right: 4px;}
.productNum{position: absolute;top: -4px;right: -6px;color: #000;background-color: #f5c542;border-radius: 3px;min-width: 14px;text-align: center;line-height: 12px;}
.headUser img{width: 20px;}
.wrapper-mobile_nav{position: fixed;height: 0;background-color: #fff;z-index: 9;left: 0;top: -100%;width: 100%;transition: all .8s ease;z-index: 1000}
.modelActive{height: 100%;top: 50px;transition: all .8s ease;}
.mobile-link{border-top: 1px solid #f5f5f5}
.mobile-link>li{border-bottom: 1px solid  #f5f5f5;}
.mobile-link>li>a{display: inline-block;width: 100%;padding: 8px 0;text-align: center;font-size: 16px;}
.mobile-sublink{display: none;}
.navBack{position: fixed;top: 80px;left: 15px;z-index: 999}
.navBack>a{display: inline-block;background-color: rgba(0,0,0,.3);}
.navBack img{width: 30px;}

@media screen and (min-width:768px){
	.conHeadWrap{width: 750px;left: inherit;}
}
</style>