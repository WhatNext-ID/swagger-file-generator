import{g as I}from"./@babel-CF5p2xTa.js";var y={exports:{}},C=y.exports,z;function K(){return z||(z=1,function(b){(function(w,m){b.exports?b.exports=m():function h(){document&&document.body?w.zenscroll=m():setTimeout(h,9)}()})(C,function(){var w=function(t){return t&&"getComputedStyle"in window&&window.getComputedStyle(t)["scroll-behavior"]==="smooth"};if(typeof window>"u"||!("document"in window))return{};var m=function(t,e,i){e=e||999,!i&&i!==0&&(i=9);var r,f=function(o){r=o},g=function(){clearTimeout(r),f(0)},v=function(o){return Math.max(0,t.getTopOf(o)-i)},u=function(o,n,l){if(g(),n===0||n&&n<0||w(t.body))t.toY(o),l&&l();else{var a=t.getY(),p=Math.max(0,o)-a,d=new Date().getTime();n=n||Math.min(Math.abs(p),e),function T(){f(setTimeout(function(){var c=Math.min(1,(new Date().getTime()-d)/n),M=Math.max(0,Math.floor(a+p*(c<.5?2*c*c:c*(4-c*2)-1)));t.toY(M),c<1&&t.getHeight()+M<t.body.scrollHeight?T():(setTimeout(g,99),l&&l())},9))}()}},Y=function(o,n,l){u(v(o),n,l)},O=function(o,n,l){var a=o.getBoundingClientRect().height,p=t.getTopOf(o)+a,d=t.getHeight(),T=t.getY(),c=T+d;v(o)<T||a+i>d?Y(o,n,l):p+i>c?u(p-d+i,n,l):l&&l()},R=function(o,n,l,a){u(Math.max(0,t.getTopOf(o)-t.getHeight()/2+(l||o.getBoundingClientRect().height/2)),n,a)},S=function(o,n){return(o===0||o)&&(e=o),(n===0||n)&&(i=n),{defaultDuration:e,edgeOffset:i}};return{setup:S,to:Y,toY:u,intoView:O,center:R,stop:g,moving:function(){return!!r},getY:t.getY,getTopOf:t.getTopOf}},h=document.documentElement,H=function(){return window.scrollY||h.scrollTop},s=m({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:H,getHeight:function(){return window.innerHeight||h.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+H()-h.offsetTop}});if(s.createScroller=function(t,e,i){return m({body:t,toY:function(r){t.scrollTop=r},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||h.clientHeight)},getTopOf:function(r){return r.offsetTop}},e,i)},"addEventListener"in window&&!window.noZensmooth&&!w(document.body)){var E="history"in window&&"pushState"in history,x=E&&"scrollRestoration"in history;x&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){x&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&s.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=s.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var i=Math.max(0,s.getTopOf(e)-t),r=s.getY()-i;0<=r&&r<9&&window.scrollTo(0,i)}}},9)},!1);var B=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&e.tagName!=="A";)e=e.parentNode;if(!(!e||t.which!==1||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(x){var i=history.state&&typeof history.state=="object"?history.state:{};i.zenscrollY=s.getY();try{history.replaceState(i,"")}catch{}}var r=e.getAttribute("href")||"";if(r.indexOf("#")===0&&!B.test(e.className)){var f=0,g=document.getElementById(r.substring(1));if(r!=="#"){if(!g)return;f=s.getTopOf(g)}t.preventDefault();var v=function(){window.location=r},u=s.setup().edgeOffset;u&&(f=Math.max(0,f-u),E&&(v=function(){history.pushState({},"",r)})),s.toY(f,null,v)}}},!1)}return s})}(y)),y.exports}var L=K();const Z=I(L);export{Z as z};
