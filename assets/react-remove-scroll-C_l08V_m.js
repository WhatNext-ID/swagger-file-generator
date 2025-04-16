import{b as z,a as B,c as O}from"./tslib-CwyXKlH1.js";import{r as a}from"./react-17z4AUzU.js";import{z as j,f as p,R as K}from"./react-remove-scroll-bar-sfMnTtUh.js";import{c as Q,e as q}from"./use-sidecar-CTJIIk_o.js";import{u as G}from"./use-callback-ref-zlxG5bph.js";import{s as J}from"./react-style-singleton-DKCxcFMH.js";var V=Q(),Y=function(){},X=a.forwardRef(function(e,t){var c=a.useRef(null),l=a.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),d=l[0],u=l[1],v=e.forwardProps,o=e.children,m=e.className,g=e.removeScrollBar,w=e.enabled,C=e.shards,y=e.sideCar,b=e.noIsolation,R=e.inert,r=e.allowPinchZoom,n=e.as,s=n===void 0?"div":n,h=e.gapMode,f=z(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=y,i=G([c,t]),E=B(B({},f),d);return a.createElement(a.Fragment,null,w&&a.createElement(S,{sideCar:V,removeScrollBar:g,shards:C,noIsolation:b,inert:R,setCallbacks:u,allowPinchZoom:!!r,lockRef:c,gapMode:h}),v?a.cloneElement(a.Children.only(o),B(B({},E),{ref:i})):a.createElement(s,B({},E,{className:m,ref:i}),o))});X.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};X.classNames={fullWidth:p,zeroRight:j};var D=!1;if(typeof window<"u")try{var N=Object.defineProperty({},"passive",{get:function(){return D=!0,!0}});window.addEventListener("test",N,N),window.removeEventListener("test",N,N)}catch{D=!1}var k=D?{passive:!1}:!1,U=function(e){return e.tagName==="TEXTAREA"},Z=function(e,t){if(!(e instanceof Element))return!1;var c=window.getComputedStyle(e);return c[t]!=="hidden"&&!(c.overflowY===c.overflowX&&!U(e)&&c[t]==="visible")},_=function(e){return Z(e,"overflowY")},$=function(e){return Z(e,"overflowX")},I=function(e,t){var c=t.ownerDocument,l=t;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var d=F(e,l);if(d){var u=x(e,l),v=u[1],o=u[2];if(v>o)return!0}l=l.parentNode}while(l&&l!==c.body);return!1},ee=function(e){var t=e.scrollTop,c=e.scrollHeight,l=e.clientHeight;return[t,c,l]},re=function(e){var t=e.scrollLeft,c=e.scrollWidth,l=e.clientWidth;return[t,c,l]},F=function(e,t){return e==="v"?_(t):$(t)},x=function(e,t){return e==="v"?ee(t):re(t)},te=function(e,t){return e==="h"&&t==="rtl"?-1:1},ae=function(e,t,c,l,d){var u=te(e,window.getComputedStyle(t).direction),v=u*l,o=c.target,m=t.contains(o),g=!1,w=v>0,C=0,y=0;do{var b=x(e,o),R=b[0],r=b[1],n=b[2],s=r-n-u*R;(R||s)&&F(e,o)&&(C+=s,y+=R),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!m&&o!==document.body||m&&(t.contains(o)||t===o));return(w&&Math.abs(C)<1||!w&&Math.abs(y)<1)&&(g=!0),g},T=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},A=function(e){return[e.deltaX,e.deltaY]},H=function(e){return e&&"current"in e?e.current:e},ne=function(e,t){return e[0]===t[0]&&e[1]===t[1]},le=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},oe=0,P=[];function ce(e){var t=a.useRef([]),c=a.useRef([0,0]),l=a.useRef(),d=a.useState(oe++)[0],u=a.useState(J)[0],v=a.useRef(e);a.useEffect(function(){v.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(d));var r=O([e.lockRef.current],(e.shards||[]).map(H),!0).filter(Boolean);return r.forEach(function(n){return n.classList.add("allow-interactivity-".concat(d))}),function(){document.body.classList.remove("block-interactivity-".concat(d)),r.forEach(function(n){return n.classList.remove("allow-interactivity-".concat(d))})}}},[e.inert,e.lockRef.current,e.shards]);var o=a.useCallback(function(r,n){if("touches"in r&&r.touches.length===2||r.type==="wheel"&&r.ctrlKey)return!v.current.allowPinchZoom;var s=T(r),h=c.current,f="deltaX"in r?r.deltaX:h[0]-s[0],S="deltaY"in r?r.deltaY:h[1]-s[1],i,E=r.target,M=Math.abs(f)>Math.abs(S)?"h":"v";if("touches"in r&&M==="h"&&E.type==="range")return!1;var L=I(M,E);if(!L)return!0;if(L?i=M:(i=M==="v"?"h":"v",L=I(M,E)),!L)return!1;if(!l.current&&"changedTouches"in r&&(f||S)&&(l.current=i),!i)return!0;var W=l.current||i;return ae(W,n,r,W==="h"?f:S)},[]),m=a.useCallback(function(r){var n=r;if(!(!P.length||P[P.length-1]!==u)){var s="deltaY"in n?A(n):T(n),h=t.current.filter(function(i){return i.name===n.type&&(i.target===n.target||n.target===i.shadowParent)&&ne(i.delta,s)})[0];if(h&&h.should){n.cancelable&&n.preventDefault();return}if(!h){var f=(v.current.shards||[]).map(H).filter(Boolean).filter(function(i){return i.contains(n.target)}),S=f.length>0?o(n,f[0]):!v.current.noIsolation;S&&n.cancelable&&n.preventDefault()}}},[]),g=a.useCallback(function(r,n,s,h){var f={name:r,delta:n,target:s,should:h,shadowParent:ie(s)};t.current.push(f),setTimeout(function(){t.current=t.current.filter(function(S){return S!==f})},1)},[]),w=a.useCallback(function(r){c.current=T(r),l.current=void 0},[]),C=a.useCallback(function(r){g(r.type,A(r),r.target,o(r,e.lockRef.current))},[]),y=a.useCallback(function(r){g(r.type,T(r),r.target,o(r,e.lockRef.current))},[]);a.useEffect(function(){return P.push(u),e.setCallbacks({onScrollCapture:C,onWheelCapture:C,onTouchMoveCapture:y}),document.addEventListener("wheel",m,k),document.addEventListener("touchmove",m,k),document.addEventListener("touchstart",w,k),function(){P=P.filter(function(r){return r!==u}),document.removeEventListener("wheel",m,k),document.removeEventListener("touchmove",m,k),document.removeEventListener("touchstart",w,k)}},[]);var b=e.removeScrollBar,R=e.inert;return a.createElement(a.Fragment,null,R?a.createElement(u,{styles:le(d)}):null,b?a.createElement(K,{gapMode:e.gapMode}):null)}function ie(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const ue=q(V,ce);var se=a.forwardRef(function(e,t){return a.createElement(X,B({},e,{ref:t,sideCar:ue}))});se.classNames=X.classNames;export{se as R};
