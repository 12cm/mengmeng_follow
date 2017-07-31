<template>
	<div class="tabWrap">
		<ul class="tabLink">
			<li v-bind:class="{'active':tabsMethod==1}" @click="tabsMethod=1">tabs1</li>
			<li v-bind:class="{'active':tabsMethod==2}" @click="tabsMethod=2">tabs2</li>
			<li v-bind:class="{'active':tabsMethod==3}" @click="tabsMethod=3">tabs3</li>
		</ul>
		<ul class="tabBox">
			<li v-bind:class="{'active':tabsMethod==1}">
				<div v-for="(item,index) in arrList1">
				    <router-link :to="'/article/' + item.id">
				    <p>{{item.title}}</p>
				    <p>{{item.detail}}</p>
				    </router-link>
				</div>
			</li>
			<li v-bind:class="{'active':tabsMethod==2}">
				<div v-for="(item,index) in arrList2">
				    <router-link :to="'/article/' + item.id">
				    <p>{{item.title}}</p>
				    <p>{{item.detail}}</p>
				    </router-link>
				 </div>
			</li>
			<li v-bind:class="{'active':tabsMethod==3}">
				<div v-for="(item,index) in arrList3">
				    <p>{{item.title}}</p>
				    <p v-html="item.content"></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
  data(){
      return {
        arrList1:[],
        arrList2:[],
        arrList3:[],
        tabsMethod:1
      }
    },
    mounted(){
      //获取数据
      this.fetchData();
    },
    methods:{
      fetchData(){
        var _this=this;
        this.$http.get('../../src/data/index.data').then(function(res){
            _this.arrList1=res.data;
        }).catch(function(err){
          console.log(err);
        });
        this.$http.get('../../src/data/follow.data').then(function(res){
            _this.arrList2=res.data;
        }).catch(function(err){
          console.log(err);
        });
        this.$http.get('../../src/data/article.data').then(function(res){
            _this.arrList3=res.data;
        }).catch(function(err){
          console.log(err);
        });
      }
    }
}
</script>

<style scoped>
.tabLink{font-size: 0;}
.tabLink>li{font-size: 14px;display: inline-block;width: 33.33%;background-color: #f5f5f5;text-align: center;padding: 6px}
.tabLink>li.active{background-color: #ccc;}
.tabBox>li{display: none;}
.tabBox>li.active{display: block}
</style>