import Vue from 'vue'
import Router from 'vue-router'
 //使用了webpack代码分割功能，这样会安需加载组件页面
const homeIndex   = (resolve) => {import('@/page/Home/index.vue').then((module) => {resolve(module)})}
const login       = (resolve) => {import('@/page/Login/login.vue').then((module) => {resolve(module)})}
const register    = (resolve) => {import('@/page/Login/register.vue').then((module) => {resolve(module)})}
const forgetPass  = (resolve) => {import('@/page/Login/forgetPass.vue').then((module) => {resolve(module)})}
const navLinkA    = (resolve) => {import('@/page/navLink_a/index.vue').then((module) => {resolve(module)})}
const navLinkB    = (resolve) => {import('@/page/navLink_b/index.vue').then((module) => {resolve(module)})}
const navLinkC    = (resolve) => {import('@/page/navLink_c/index.vue').then((module) => {resolve(module)})}
const navLinkD    = (resolve) => {import('@/page/navLink_d/index.vue').then((module) => {resolve(module)})}
const navLinkE    = (resolve) => {import('@/page/navLink_e/index.vue').then((module) => {resolve(module)})}
const nla_Article = (resolve) => {import('@/page/article/nla_Article.vue').then((module) => {resolve(module)})}
const follow_art  = (resolve) => {import('@/page/article/follow_art.vue').then((module) => {resolve(module)})}
const toPay       = (resolve) => {import('@/page/toPay/toPay.vue').then((module) => {resolve(module)})}

Vue.use(Router)

export default new Router({
  mode: 'history', //切换路径模式，变成history模式
  //base: '/mengmeng_follow/dist/',
  base: '/12cm/mengmeng_follow/tree/master/dist/',
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    { path: '/page/Login/login', component: login },             //登录
    { path: '/page/Login/register', component: register },       //注册
    { path: '/page/Login/forgetPass', component: forgetPass },   //忘记密码
    { path: '/page/Home/index', component: homeIndex },          //首页
    { path: '/page/navLink_a/index', component: navLinkA },      //花艺培训
    { path: '/page/navLink_b/index', component: navLinkB },      //订花
    { path: '/page/navLink_c/index', component: navLinkC },      //玫瑰花茶
    { path: '/page/navLink_d/index', component: navLinkD },      //花艺师到家
    { path: '/page/navLink_e/index', component: navLinkE },      //花+产品
    { path: '/page/article/nla_Article/:id', component: nla_Article },   //花艺培训详情页
    { path: '/page/article/follow_art/:id', component: follow_art },   //订花详情页
    { path: '/page/toPay/toPay', component: toPay },             //购物车页面
    { path: '/', redirect: '/page/Home/index' },
    { path: '*', redirect: '/page/Home/index' }
  ]
})
