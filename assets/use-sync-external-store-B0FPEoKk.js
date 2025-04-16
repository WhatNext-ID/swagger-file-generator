import{g as C}from"./@babel-DhV5f2z5.js";import{b as M}from"./react-17z4AUzU.js";var j={exports:{}},w={},_={exports:{}},x={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q;function L(){if(q)return x;q=1;var n=M();function h(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var E=typeof Object.is=="function"?Object.is:h,y=n.useState,p=n.useEffect,b=n.useLayoutEffect,R=n.useDebugValue;function V(e,r){var u=r(),i=y({inst:{value:u,getSnapshot:r}}),t=i[0].inst,s=i[1];return b(function(){t.value=u,t.getSnapshot=r,c(t)&&s({inst:t})},[e,u,r]),p(function(){return c(t)&&s({inst:t}),e(function(){c(t)&&s({inst:t})})},[e]),R(u),u}function c(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!E(e,u)}catch{return!0}}function o(e,r){return r()}var f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?o:V;return x.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:f,x}var U;function k(){return U||(U=1,_.exports=L()),_.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $;function F(){if($)return w;$=1;var n=M(),h=k();function E(o,f){return o===f&&(o!==0||1/o===1/f)||o!==o&&f!==f}var y=typeof Object.is=="function"?Object.is:E,p=h.useSyncExternalStore,b=n.useRef,R=n.useEffect,V=n.useMemo,c=n.useDebugValue;return w.useSyncExternalStoreWithSelector=function(o,f,e,r,u){var i=b(null);if(i.current===null){var t={hasValue:!1,value:null};i.current=t}else t=i.current;i=V(function(){function W(a){if(!S){if(S=!0,v=a,a=r(a),u!==void 0&&t.hasValue){var d=t.value;if(u(d,a))return m=d}return m=a}if(d=m,y(v,a))return d;var O=r(a);return u!==void 0&&u(d,O)?(v=a,d):(v=a,m=O)}var S=!1,v,m,l=e===void 0?null:e;return[function(){return W(f())},l===null?void 0:function(){return W(l())}]},[f,e,r,u]);var s=p(o,i[0],i[1]);return R(function(){t.hasValue=!0,t.value=s},[s]),c(s),s},w}var I;function A(){return I||(I=1,j.exports=F()),j.exports}var B=A();const P=C(B);var D={exports:{}},z={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function H(){if(g)return z;g=1;var n=M();function h(c,o){return c===o&&(c!==0||1/c===1/o)||c!==c&&o!==o}var E=typeof Object.is=="function"?Object.is:h,y=n.useSyncExternalStore,p=n.useRef,b=n.useEffect,R=n.useMemo,V=n.useDebugValue;return z.useSyncExternalStoreWithSelector=function(c,o,f,e,r){var u=p(null);if(u.current===null){var i={hasValue:!1,value:null};u.current=i}else i=u.current;u=R(function(){function s(l){if(!W){if(W=!0,S=l,l=e(l),r!==void 0&&i.hasValue){var a=i.value;if(r(a,l))return v=a}return v=l}if(a=v,E(S,l))return a;var d=e(l);return r!==void 0&&r(a,d)?(S=l,a):(S=l,v=d)}var W=!1,S,v,m=f===void 0?null:f;return[function(){return s(o())},m===null?void 0:function(){return s(m())}]},[o,f,e,r]);var t=y(c,u[0],u[1]);return b(function(){i.hasValue=!0,i.value=t},[t]),V(t),t},z}var G;function J(){return G||(G=1,D.exports=H()),D.exports}J();export{P as u};
