import{g as D}from"./@babel-CF5p2xTa.js";import{r as E}from"./repeat-string-DJftGEzw.js";var g,x;function j(){if(x)return g;x=1;var C=E(),O=function(n){return n.split(/(<\/?[^>]+>)/g).filter(function(r){return r.trim()!==""})},y=function(n){return/<[^>!]+>/.test(n)},s=function(n){return/<\/+[^>]+>/.test(n)},o=function(n){return/<[^>]+\/>/.test(n)},S=function(n){return y(n)&&!s(n)&&!o(n)};g=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.indentor,q=n.textNodesOnSameLine,a=0,f=[];r=r||"    ";var l=h(e).map(function(t,i,v){var p=t.value,u=t.type;u==="ClosingTag"&&a--;var T=C(r,a),c=T+p;if(u==="OpeningTag"&&a++,q){var d=v[i-1],m=v[i-2];u==="ClosingTag"&&d.type==="Text"&&m.type==="OpeningTag"&&(c=""+T+m.value+d.value+p,f.push(i-2,i-1))}return c});return f.forEach(function(t){return l[t]=null}),l.filter(function(t){return!!t}).join(`
`)};function h(e){var n=O(e);return n.map(function(r){return{value:r,type:R(r)}})}function R(e){return s(e)?"ClosingTag":S(e)?"OpeningTag":o(e)?"SelfClosingTag":"Text"}return g}var L=j();const b=D(L);export{b as i};
