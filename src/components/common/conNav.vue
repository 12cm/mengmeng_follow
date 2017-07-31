<template>
  <nav class="conNav">
    <ul>
      <router-link v-bind:class="{'router-link-exact-active router-link-active':conNavPage==1}" tag="li" to="/page/navLink_a/index"><a href="">花艺培训</a></router-link>
      <router-link v-bind:class="{'router-link-exact-active router-link-active':conNavPage==2}" tag="li" to="/page/navLink_b/index"><a href="">订花</a></router-link>
      <router-link v-bind:class="{'router-link-exact-active router-link-active':conNavPage==3}" tag="li" to="/page/navLink_c/index"><a href="">玫瑰花茶</a></router-link>
      <router-link v-bind:class="{'router-link-exact-active router-link-active':conNavPage==4}" tag="li" to="/page/navLink_d/index"><a href="">花艺师到家</a></router-link>
      <router-link v-bind:class="{'router-link-exact-active router-link-active':conNavPage==5}" tag="li" to="/page/navLink_e/index"><a href="">花+产品</a></router-link>

    </ul>
  </nav>
</template>

<script type="text/javascript">
	export default{
		props: ['conNavPage']
	}
</script>

<style scoped>
.conNav{position: fixed;left: 0;bottom: 0;width: 100%;background-color: #fff;z-index: 999}
.conNav>ul{font-size: 0;}
.conNav>ul>li{display: inline-block;width: 20%;}
.conNav>ul>li>a{font-size: 1.4rem;display: inline-block;width: 100%;text-align: center;padding: 8px 0;}
.conNav>ul>li.router-link-active{background-color: #ccc;}
@media screen and (min-width:768px){
.conNav{width: 750px;left: inherit;}
}
</style>