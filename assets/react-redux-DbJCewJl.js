import{r as i}from"./react-B6X6-eNE.js";var Se={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=i;function be(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var me=typeof Object.is=="function"?Object.is:be,Pe=F.useSyncExternalStore,Ce=F.useRef,Ee=F.useEffect,Re=F.useMemo,we=F.useDebugValue;Se.useSyncExternalStoreWithSelector=function(e,t,n,u,r){var o=Ce(null);if(o.current===null){var c={hasValue:!1,value:null};o.current=c}else c=o.current;o=Re(function(){function s(y){if(!a){if(a=!0,l=y,y=u(y),r!==void 0&&c.hasValue){var v=c.value;if(r(v,y))return d=v}return d=y}if(v=d,me(l,y))return v;var E=u(y);return r!==void 0&&r(v,E)?(l=y,v):(l=y,d=E)}var a=!1,l,d,p=n===void 0?null:n;return[function(){return s(t())},p===null?void 0:function(){return s(p())}]},[t,n,u,r]);var f=Pe(e,o[0],o[1]);return Ee(function(){c.hasValue=!0,c.value=f},[f]),we(f),f};var ge=i.version.startsWith("19"),he=Symbol.for(ge?"react.transitional.element":"react.element"),Oe=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),Me=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Fe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),$e=ie,Ue=K;function Ye(e){if(typeof e=="object"&&e!==null){const{$$typeof:t}=e;switch(t){case he:switch(e=e.type,e){case Te:case Ne:case _e:case Ae:case Fe:return e;default:switch(e=e&&e.$$typeof,e){case xe:case ie:case Ie:case K:return e;case Me:return e;default:return t}}case Oe:return t}}}function Le(e){return Ye(e)===K}function ke(e,t,n,u,{areStatesEqual:r,areOwnPropsEqual:o,areStatePropsEqual:c}){let f=!1,s,a,l,d,p;function y(b,m){return s=b,a=m,l=e(s,a),d=t(u,a),p=n(l,d,a),f=!0,p}function v(){return l=e(s,a),t.dependsOnOwnProps&&(d=t(u,a)),p=n(l,d,a),p}function E(){return e.dependsOnOwnProps&&(l=e(s,a)),t.dependsOnOwnProps&&(d=t(u,a)),p=n(l,d,a),p}function S(){const b=e(s,a),m=!c(b,l);return l=b,m&&(p=n(l,d,a)),p}function C(b,m){const w=!o(m,a),Y=!r(b,s,m,a);return s=b,a=m,w&&Y?v():w?E():Y?S():p}return function(m,w){return f?C(m,w):y(m,w)}}function Ve(e,{initMapStateToProps:t,initMapDispatchToProps:n,initMergeProps:u,...r}){const o=t(e,r),c=n(e,r),f=u(e,r);return ke(o,c,f,e,r)}function We(e,t){const n={};for(const u in e){const r=e[u];typeof r=="function"&&(n[u]=(...o)=>t(r(...o)))}return n}function Z(e){return function(n){const u=e(n);function r(){return u}return r.dependsOnOwnProps=!1,r}}function ne(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:e.length!==1}function fe(e,t){return function(u,{displayName:r}){const o=function(f,s){return o.dependsOnOwnProps?o.mapToProps(f,s):o.mapToProps(f,void 0)};return o.dependsOnOwnProps=!0,o.mapToProps=function(f,s){o.mapToProps=e,o.dependsOnOwnProps=ne(e);let a=o(f,s);return typeof a=="function"&&(o.mapToProps=a,o.dependsOnOwnProps=ne(a),a=o(f,s)),a},o}}function Q(e,t){return(n,u)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${u.wrappedComponentName}.`)}}function Be(e){return e&&typeof e=="object"?Z(t=>We(e,t)):e?typeof e=="function"?fe(e):Q(e,"mapDispatchToProps"):Z(t=>({dispatch:t}))}function De(e){return e?typeof e=="function"?fe(e):Q(e,"mapStateToProps"):Z(()=>({}))}function ze(e,t,n){return{...n,...e,...t}}function Ge(e){return function(n,{displayName:u,areMergedPropsEqual:r}){let o=!1,c;return function(s,a,l){const d=e(s,a,l);return o?r(d,c)||(c=d):(o=!0,c=d),c}}}function He(e){return e?typeof e=="function"?Ge(e):Q(e,"mergeProps"):()=>ze}function Xe(e){e()}function Ze(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Xe(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let u=e;for(;u;)n.push(u),u=u.next;return n},subscribe(n){let u=!0;const r=t={callback:n,next:null,prev:t};return r.prev?r.prev.next=r:e=r,function(){!u||e===null||(u=!1,r.next?r.next.prev=r.prev:t=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var oe={notify(){},get:()=>[]};function le(e,t){let n,u=oe,r=0,o=!1;function c(E){l();const S=u.subscribe(E);let C=!1;return()=>{C||(C=!0,S(),d())}}function f(){u.notify()}function s(){v.onStateChange&&v.onStateChange()}function a(){return o}function l(){r++,n||(n=t?t.addNestedSub(s):e.subscribe(s),u=Ze())}function d(){r--,n&&r===0&&(n(),n=void 0,u.clear(),u=oe)}function p(){o||(o=!0,l())}function y(){o&&(o=!1,d())}const v={addNestedSub:c,notifyNestedSubs:f,handleChangeWrapper:s,isSubscribed:a,trySubscribe:p,tryUnsubscribe:y,getListeners:()=>u};return v}var Je=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ke=Je(),Qe=()=>typeof navigator<"u"&&navigator.product==="ReactNative",qe=Qe(),je=()=>Ke||qe?i.useLayoutEffect:i.useEffect,U=je();function ue(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function G(e,t){if(ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),u=Object.keys(t);if(n.length!==u.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!ue(e[n[r]],t[n[r]]))return!1;return!0}var et={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},de={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nt={[$e]:rt,[Ue]:de};function se(e){return Le(e)?de:nt[e.$$typeof]||et}var ot=Object.defineProperty,ut=Object.getOwnPropertyNames,ce=Object.getOwnPropertySymbols,st=Object.getOwnPropertyDescriptor,ct=Object.getPrototypeOf,ae=Object.prototype;function J(e,t){if(typeof t!="string"){if(ae){const o=ct(t);o&&o!==ae&&J(e,o)}let n=ut(t);ce&&(n=n.concat(ce(t)));const u=se(e),r=se(t);for(let o=0;o<n.length;++o){const c=n[o];if(!tt[c]&&!(r&&r[c])&&!(u&&u[c])){const f=st(t,c);try{ot(e,c,f)}catch{}}}}return e}var H=Symbol.for("react-redux-context"),X=typeof globalThis<"u"?globalThis:{};function at(){if(!i.createContext)return{};const e=X[H]??(X[H]=new Map);let t=e.get(i.createContext);return t||(t=i.createContext(null),e.set(i.createContext,t)),t}var pe=at(),it=[null,null];function ft(e,t,n){U(()=>e(...t),n)}function lt(e,t,n,u,r,o){e.current=u,n.current=!1,r.current&&(r.current=null,o())}function dt(e,t,n,u,r,o,c,f,s,a,l){if(!e)return()=>{};let d=!1,p=null;const y=()=>{if(d||!f.current)return;const E=t.getState();let S,C;try{S=u(E,r.current)}catch(b){C=b,p=b}C||(p=null),S===o.current?c.current||a():(o.current=S,s.current=S,c.current=!0,l())};return n.onStateChange=y,n.trySubscribe(),y(),()=>{if(d=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}function pt(e,t){return e===t}function yt(e,t,n,{pure:u,areStatesEqual:r=pt,areOwnPropsEqual:o=G,areStatePropsEqual:c=G,areMergedPropsEqual:f=G,forwardRef:s=!1,context:a=pe}={}){const l=a,d=De(e),p=Be(t),y=He(n),v=!!e;return S=>{const C=S.displayName||S.name||"Component",b=`Connect(${C})`,m={shouldHandleStateChanges:v,displayName:b,wrappedComponentName:C,WrappedComponent:S,initMapStateToProps:d,initMapDispatchToProps:p,initMergeProps:y,areStatesEqual:r,areStatePropsEqual:c,areOwnPropsEqual:o,areMergedPropsEqual:f};function w(g){const[h,L,O]=i.useMemo(()=>{const{reactReduxForwardedRef:P,...A}=g;return[g.context,P,A]},[g]),_=i.useMemo(()=>{let P=l;return h!=null&&h.Consumer,P},[h,l]),R=i.useContext(_),N=!!g.store&&!!g.store.getState&&!!g.store.dispatch,ye=!!R&&!!R.store,T=N?g.store:R.store,q=ye?R.getServerState:T.getState,k=i.useMemo(()=>Ve(T.dispatch,m),[T]),[M,j]=i.useMemo(()=>{if(!v)return it;const P=le(T,N?void 0:R.subscription),A=P.notifyNestedSubs.bind(P);return[P,A]},[T,N,R]),ee=i.useMemo(()=>N?R:{...R,subscription:M},[N,R,M]),V=i.useRef(void 0),W=i.useRef(O),x=i.useRef(void 0),te=i.useRef(!1),B=i.useRef(!1),D=i.useRef(void 0);U(()=>(B.current=!0,()=>{B.current=!1}),[]);const re=i.useMemo(()=>()=>x.current&&O===W.current?x.current:k(T.getState(),O),[T,O]),ve=i.useMemo(()=>A=>M?dt(v,T,M,k,W,V,te,B,x,j,A):()=>{},[M]);ft(lt,[W,V,te,O,x,j]);let $;try{$=i.useSyncExternalStore(ve,re,q?()=>k(q(),O):re)}catch(P){throw D.current&&(P.message+=`
The error may be correlated with this previous error:
${D.current.stack}

`),P}U(()=>{D.current=void 0,x.current=void 0,V.current=$});const z=i.useMemo(()=>i.createElement(S,{...$,ref:L}),[L,S,$]);return i.useMemo(()=>v?i.createElement(_.Provider,{value:ee},z):z,[_,z,ee])}const I=i.memo(w);if(I.WrappedComponent=S,I.displayName=w.displayName=b,s){const h=i.forwardRef(function(O,_){return i.createElement(I,{...O,reactReduxForwardedRef:_})});return h.displayName=b,h.WrappedComponent=S,J(h,S)}return J(I,S)}}var mt=yt;function vt(e){const{children:t,context:n,serverState:u,store:r}=e,o=i.useMemo(()=>{const s=le(r);return{store:r,subscription:s,getServerState:u?()=>u:void 0}},[r,u]),c=i.useMemo(()=>r.getState(),[r]);U(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),c!==r.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,c]);const f=n||pe;return i.createElement(f.Provider,{value:o},t)}var Pt=vt;export{Pt as P,mt as c};
