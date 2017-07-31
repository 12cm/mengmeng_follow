<template>
  <transition name="slide-down">
    <!-- <keep-alive><router-view></router-view></keep-alive> -->
    <router-view></router-view>
  </transition>
</template>


<style>
  /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}

/*公共样式 开始*/
*{font-size: 62.5%;font-family: '微软雅黑';margin: 0;padding:0;box-sizing: border-box}
body{-webkit-overflow-scrolling: touch;}/*弹性滚动*/
input,button,select{-webkit-appearance: none;}/*修复iPhone的safari浏览器上submit按钮圆角bug*/
button[disabled], html input[disabled]{background-color: #ccc;color: #555}
a{border:none;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;outline:none;color: #555;text-decoration: none;}
a:focus, a:hover{text-decoration: none;cursor: pointer;outline: 0px;color: #555}
.txtOver{overflow: hidden;white-space: nowrap; text-overflow: ellipsis;}
.txtsOver{overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;}
.conOpacity{filter:alpha(opacity=0);filter: "alpha(opacity=0)";-moz-opacity:0;-khtml-opacity:0;-webkit-opacity: 0;opacity: 0;}
.rotate45{transform: rotate(45deg);-ms-transform: rotate(45deg);-moz-transform: rotate(45deg);-webkit-transform: rotate(45deg);-o-transform: rotate(45deg);}
.RelativeBox{position: relative;}
ul{list-style: none;padding-left: 0}
.img-responsive{display: block;height: auto;max-width: 100%;}
/*公共样式 结束*/


/*项目自定义样式开始*/
.slide-down-enter-active,
.slide-down-leave-active{
  transition: .4s all ease;
  opacity: 0.3;
  transform: translate3d(0,10em,0);
}
.slide-down-enter,
.slide-down-leave{
  opacity: 1;
  transform: translate3d(0,10em,0);
}

.mb20{margin-bottom: 20px;}
.mainBody{padding: 50px 0 35px 0}
.conTit{font-size: 16px;line-height: 25px;height: 32px;margin-top: 20px;color: #333;font-weight: 400;text-align: center;}
.conMsg{font-size: 12px;color: #999999;line-height: 20px;text-align: center;margin-bottom: 20px;}

@media screen and (min-width:768px){
  .pc{margin:0 auto;width:750px;background-color: #ccc} /* pc全屏时，只在中间显示内容,适用于webapp开发的时候*/
}
</style>