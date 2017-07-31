<template>
  <div class="LRWrap">
    
    <vtitle>登 录</vtitle>

    <div class="LRinn">
         <form>
           <div class="LRinnBox LRline">
             <span>账号</span>
             <input type="text" placeholder="手机/用户名/邮箱">
           </div>
           <div class="LRinnBox">
             <span>密码</span>
             <input type="text" placeholder="请输入密码">
           </div>
         </form>

         <div class="LRLinkWrap">
             <a href="javascript:void(0)" class="loginLink">登录</a>
           </div>

         <div class="LRmore">
           <router-link class="forgetpass" to="/page/Login/forgetPass">忘记密码？</router-link>
           <router-link class="reg" to="/page/Login/register">立即注册</router-link>
         </div>
    </div>



  </div>
</template>

<script type="text/javascript">


import vtitle from '../../components/common/title.vue'

export default {
  data(){
      return {
        arrList:[],
        course:[]
      }
    },
  watch:{
    
  },
  components:{
    vtitle
  },
    mounted(){
      //获取数据
      // this.fetchData();
    },
    methods:{
      fetchData(){
        var _this=this;
        // this.$http.get('../../src/data/index.data').then(function(res){
        //     _this.arrList=res.data;
        // }).catch(function(err){
        //   console.log(err);
        // });
      }
    }
}
</script>

<style scoped>
.LRWrap{padding-top: 46px;padding-bottom: 40px;}
.LRinn>form{border-top: 1px solid #d5d5d5;border-bottom: 1px solid #d5d5d5;padding: 0 15px;background-color: #f5f5f5}
.LRline{border-bottom: 1px solid #d5d5d5;}
.LRinnBox{position: relative;padding-left: 50px;}
.LRinnBox>span{position: absolute;left: 15px;top: 0;display: inline-block;line-height: 43px;height: 43px;font-size: 14px;color: #333;vertical-align: bottom;white-space: nowrap;}
.LRinnBox>input{border: 0;display: inline-block;width: 100%;outline: 0;line-height: 42px;font-size: 14px;color: #333;border-radius: 0;height: 43px;padding: 0 0 0 15px;background-color: #f5f5f5}
.LRLinkWrap{margin: 20px 15px 15px}
.loginLink{display: inline-block;width: 100%;color: #fff;background-color: #15a07b;border-color: #15a07b;font-size: 16px;padding: 12px 29px 13px;border-radius: 3px;text-align: center;outline: 0;}
.LRmore{padding: 0 15px;position: relative;}
.forgetpass{color: #15a07b;}
.reg{color: #15a07b;position: absolute;right: 15px;top: 0;}
</style>