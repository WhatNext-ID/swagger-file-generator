import{g as F}from"./@babel-By6k5wci.js";import{b as C}from"./react-Be7qkUx2.js";var _={exports:{}},q={},w={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function L(){if(O)return R;O=1;var u=C();function S(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var p=typeof Object.is=="function"?Object.is:S,d=u.useState,h=u.useEffect,m=u.useLayoutEffect,x=u.useDebugValue;function y(e,r){var n=r(),i=d({inst:{value:n,getSnapshot:r}}),t=i[0].inst,s=i[1];return m(function(){t.value=n,t.getSnapshot=r,l(t)&&s({inst:t})},[e,n,r]),h(function(){return l(t)&&s({inst:t}),e(function(){l(t)&&s({inst:t})})},[e]),x(n),n}function l(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!p(e,n)}catch{return!0}}function o(e,r){return r()}var c=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?o:y;return R.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:c,R}var D;function M(){return D||(D=1,w.exports=L()),w.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k;function z(){if(k)return q;k=1;var u=C(),S=M();function p(o,c){return o===c&&(o!==0||1/o===1/c)||o!==o&&c!==c}var d=typeof Object.is=="function"?Object.is:p,h=S.useSyncExternalStore,m=u.useRef,x=u.useEffect,y=u.useMemo,l=u.useDebugValue;return q.useSyncExternalStoreWithSelector=function(o,c,e,r,n){var i=m(null);if(i.current===null){var t={hasValue:!1,value:null};i.current=t}else t=i.current;i=y(function(){function j(f){if(!V){if(V=!0,E=f,f=r(f),n!==void 0&&t.hasValue){var a=t.value;if(n(a,f))return v=a}return v=f}if(a=v,d(E,f))return a;var g=r(f);return n!==void 0&&n(a,g)?a:(E=f,v=g)}var V=!1,E,v,W=e===void 0?null:e;return[function(){return j(c())},W===null?void 0:function(){return j(W())}]},[c,e,r,n]);var s=h(o,i[0],i[1]);return x(function(){t.hasValue=!0,t.value=s},[s]),l(s),s},q}var U;function A(){return U||(U=1,_.exports=z()),_.exports}var B=A();const I=F(B);export{I as u};
