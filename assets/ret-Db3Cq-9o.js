var O={exports:{}},S={},b={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7},y={};const t=b,N=()=>[{type:t.RANGE,from:48,to:57}],m=()=>[{type:t.CHAR,value:95},{type:t.RANGE,from:97,to:122},{type:t.RANGE,from:65,to:90}].concat(N()),w=()=>[{type:t.CHAR,value:9},{type:t.CHAR,value:10},{type:t.CHAR,value:11},{type:t.CHAR,value:12},{type:t.CHAR,value:13},{type:t.CHAR,value:32},{type:t.CHAR,value:160},{type:t.CHAR,value:5760},{type:t.RANGE,from:8192,to:8202},{type:t.CHAR,value:8232},{type:t.CHAR,value:8233},{type:t.CHAR,value:8239},{type:t.CHAR,value:8287},{type:t.CHAR,value:12288},{type:t.CHAR,value:65279}],W=()=>[{type:t.CHAR,value:10},{type:t.CHAR,value:13},{type:t.CHAR,value:8232},{type:t.CHAR,value:8233}];y.words=()=>({type:t.SET,set:m(),not:!1});y.notWords=()=>({type:t.SET,set:m(),not:!0});y.ints=()=>({type:t.SET,set:N(),not:!1});y.notInts=()=>({type:t.SET,set:N(),not:!0});y.whitespace=()=>({type:t.SET,set:w(),not:!1});y.notWhitespace=()=>({type:t.SET,set:w(),not:!0});y.anyChar=()=>({type:t.SET,set:W(),not:!0});(function(u){const a=b,l=y,n="@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?",A={0:0,t:9,n:10,v:11,f:12,r:13};u.strToChars=function(r){var e=/(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;return r=r.replace(e,function(p,c,s,i,d,h,E,v){if(s)return p;var I=c?8:i?parseInt(i,16):d?parseInt(d,16):h?parseInt(h,8):E?n.indexOf(E):A[v],f=String.fromCharCode(I);return/[[\]{}^$.|?*+()]/.test(f)&&(f="\\"+f),f}),r},u.tokenizeClass=(r,e)=>{for(var p=[],c=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g,s,i;(s=c.exec(r))!=null;)if(s[1])p.push(l.words());else if(s[2])p.push(l.ints());else if(s[3])p.push(l.whitespace());else if(s[4])p.push(l.notWords());else if(s[5])p.push(l.notInts());else if(s[6])p.push(l.notWhitespace());else if(s[7])p.push({type:a.RANGE,from:(s[8]||s[9]).charCodeAt(0),to:s[10].charCodeAt(0)});else if(i=s[12])p.push({type:a.CHAR,value:i.charCodeAt(0)});else return[p,c.lastIndex];u.error(e,"Unterminated character class")},u.error=(r,e)=>{throw new SyntaxError("Invalid regular expression: /"+r+"/: "+e)}})(S);var T={};const H=b;T.wordBoundary=()=>({type:H.POSITION,value:"b"});T.nonWordBoundary=()=>({type:H.POSITION,value:"B"});T.begin=()=>({type:H.POSITION,value:"^"});T.end=()=>({type:H.POSITION,value:"$"});const C=S,o=b,R=y,k=T;O.exports=u=>{var a=0,l,n,A={type:o.ROOT,stack:[]},r=A,e=A.stack,p=[],c=P=>{C.error(u,`Nothing to repeat at column ${P-1}`)},s=C.strToChars(u);for(l=s.length;a<l;)switch(n=s[a++],n){case"\\":switch(n=s[a++],n){case"b":e.push(k.wordBoundary());break;case"B":e.push(k.nonWordBoundary());break;case"w":e.push(R.words());break;case"W":e.push(R.notWords());break;case"d":e.push(R.ints());break;case"D":e.push(R.notInts());break;case"s":e.push(R.whitespace());break;case"S":e.push(R.notWhitespace());break;default:/\d/.test(n)?e.push({type:o.REFERENCE,value:parseInt(n,10)}):e.push({type:o.CHAR,value:n.charCodeAt(0)})}break;case"^":e.push(k.begin());break;case"$":e.push(k.end());break;case"[":var i;s[a]==="^"?(i=!0,a++):i=!1;var d=C.tokenizeClass(s.slice(a),u);a+=d[1],e.push({type:o.SET,set:d[0],not:i});break;case".":e.push(R.anyChar());break;case"(":var h={type:o.GROUP,stack:[],remember:!0};n=s[a],n==="?"&&(n=s[a+1],a+=2,n==="="?h.followedBy=!0:n==="!"?h.notFollowedBy=!0:n!==":"&&C.error(u,`Invalid group, character '${n}' after '?' at column ${a-1}`),h.remember=!1),e.push(h),p.push(r),r=h,e=h.stack;break;case")":p.length===0&&C.error(u,`Unmatched ) at column ${a-1}`),r=p.pop(),e=r.options?r.options[r.options.length-1]:r.stack;break;case"|":r.options||(r.options=[r.stack],delete r.stack);var E=[];r.options.push(E),e=E;break;case"{":var v=/^(\d+)(,(\d+)?)?\}/.exec(s.slice(a)),I,f;v!==null?(e.length===0&&c(a),I=parseInt(v[1],10),f=v[2]?v[3]?parseInt(v[3],10):1/0:I,a+=v[0].length,e.push({type:o.REPETITION,min:I,max:f,value:e.pop()})):e.push({type:o.CHAR,value:123});break;case"?":e.length===0&&c(a),e.push({type:o.REPETITION,min:0,max:1,value:e.pop()});break;case"+":e.length===0&&c(a),e.push({type:o.REPETITION,min:1,max:1/0,value:e.pop()});break;case"*":e.length===0&&c(a),e.push({type:o.REPETITION,min:0,max:1/0,value:e.pop()});break;default:e.push({type:o.CHAR,value:n.charCodeAt(0)})}return p.length!==0&&C.error(u,"Unterminated group"),A};O.exports.types=o;var $=O.exports;export{$ as l};