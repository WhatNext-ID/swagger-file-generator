const F=function(){const n=g,L=R,r=this,d="parser.js: Parser(): ",$=function(){this.state=n.ACTIVE,this.phraseLength=0,this.refresh=()=>{this.state=n.ACTIVE,this.phraseLength=0}};r.ast=void 0,r.stats=void 0,r.trace=void 0,r.callbacks=[];let E=0,k=0,m=0,N=0,w=0,h,M,s,c,e=new $,f,A,p;const H=()=>{E=0,k=0,m=0,N=0,w=0,h=void 0,M=void 0,s=void 0,c=void 0,e.refresh(),f=void 0,A=void 0,p=void 0},Y=()=>{const a=`${d}initializeCallbacks(): `;let t;for(f=[],A=[],t=0;t<h.length;t+=1)f[t]=void 0;for(t=0;t<M.length;t+=1)A[t]=void 0;let i;const o=[];for(t=0;t<h.length;t+=1)o.push(h[t].lower);for(t=0;t<M.length;t+=1)o.push(M[t].lower);for(const l in r.callbacks){if(t=o.indexOf(l.toLowerCase()),t<0)throw new Error(`${a}syntax callback '${l}' not a rule or udt name`);if(i=r.callbacks[l]?r.callbacks[l]:void 0,typeof i=="function"||i===void 0)t<h.length?f[t]=i:A[t-h.length]=i;else throw new Error(`${a}syntax callback[${l}] must be function reference or falsy)`)}};r.parse=(a,t,i,o)=>{const l=`${d}parse(): `;H(),c=L.stringToChars(i),h=a.rules,M=a.udts;const u=t.toLowerCase();let T;for(const O in h)if(u===h[O].lower){T=h[O].index;break}if(T===void 0)throw new Error(`${l}start rule name '${startRule}' not recognized`);Y(),r.trace&&r.trace.init(h,M,c),r.stats&&r.stats.init(h,M),r.ast&&r.ast.init(h,M,c),p=o,s=[{type:n.RNM,index:T}],P(0,0),s=void 0;let C=!1;switch(e.state){case n.ACTIVE:throw new Error(`${l}final state should never be 'ACTIVE'`);case n.NOMATCH:C=!1;break;case n.EMPTY:case n.MATCH:e.phraseLength===c.length?C=!0:C=!1;break;default:throw new Error("unrecognized state")}return{success:C,state:e.state,stateName:n.idName(e.state),length:c.length,matched:e.phraseLength,maxMatched:w,maxTreeDepth:m,nodeHits:N}};const D=(a,t)=>{const i=s[a];for(let o=0;o<i.children.length&&(P(i.children[o],t),e.state===n.NOMATCH);o+=1);},U=(a,t)=>{let i,o,l,u;const T=s[a];r.ast&&(o=r.ast.getLength()),i=!0,l=t,u=0;for(let C=0;C<T.children.length;C+=1)if(P(T.children[C],l),e.state===n.NOMATCH){i=!1;break}else l+=e.phraseLength,u+=e.phraseLength;i?(e.state=u===0?n.EMPTY:n.MATCH,e.phraseLength=u):(e.state=n.NOMATCH,e.phraseLength=0,r.ast&&r.ast.setLength(o))},_=(a,t)=>{let i,o,l,u;const T=s[a];if(T.max===0){e.state=n.EMPTY,e.phraseLength=0;return}for(o=t,l=0,u=0,r.ast&&(i=r.ast.getLength());!(o>=c.length||(P(a+1,o),e.state===n.NOMATCH)||e.state===n.EMPTY||(u+=1,l+=e.phraseLength,o+=e.phraseLength,u===T.max)););e.state===n.EMPTY||u>=T.min?(e.state=l===0?n.EMPTY:n.MATCH,e.phraseLength=l):(e.state=n.NOMATCH,e.phraseLength=0,r.ast&&r.ast.setLength(i))},S=(a,t,i,o)=>{if(t.phraseLength>i){let l=`${d}opRNM(${a.name}): callback function error: `;throw l+=`sysData.phraseLength: ${t.phraseLength}`,l+=` must be <= remaining chars: ${i}`,new Error(l)}switch(t.state){case n.ACTIVE:if(!o)throw new Error(`${d}opRNM(${a.name}): callback function return error. ACTIVE state not allowed.`);break;case n.EMPTY:t.phraseLength=0;break;case n.MATCH:t.phraseLength===0&&(t.state=n.EMPTY);break;case n.NOMATCH:t.phraseLength=0;break;default:throw new Error(`${d}opRNM(${a.name}): callback function return error. Unrecognized return state: ${t.state}`)}},V=(a,t)=>{let i,o,l;const u=s[a],T=h[u.index],C=f[T.index];if(E||(o=r.ast&&r.ast.ruleDefined(u.index),o&&(i=r.ast.getLength(),r.ast.down(u.index,h[u.index].name))),C){const O=c.length-t;C(e,c,t,p),S(T,e,O,!0),e.state===n.ACTIVE&&(l=s,s=T.opcodes,P(0,t),s=l,C(e,c,t,p),S(T,e,O,!1))}else l=s,s=T.opcodes,P(0,t),s=l;E||o&&(e.state===n.NOMATCH?r.ast.setLength(i):r.ast.up(u.index,T.name,t,e.phraseLength))},x=(a,t)=>{const i=s[a];e.state=n.NOMATCH,t<c.length&&i.min<=c[t]&&c[t]<=i.max&&(e.state=n.MATCH,e.phraseLength=1)},v=(a,t)=>{const i=s[a],o=i.string.length;if(e.state=n.NOMATCH,t+o<=c.length){for(let l=0;l<o;l+=1)if(c[t+l]!==i.string[l])return;e.state=n.MATCH,e.phraseLength=o}},z=(a,t)=>{let i;const o=s[a];e.state=n.NOMATCH;const l=o.string.length;if(l===0){e.state=n.EMPTY;return}if(t+l<=c.length){for(let u=0;u<l;u+=1)if(i=c[t+u],i>=65&&i<=90&&(i+=32),i!==o.string[u])return;e.state=n.MATCH,e.phraseLength=l}},G=(a,t,i)=>{if(t.phraseLength>i){let o=`${d}opUDT(${a.name}): callback function error: `;throw o+=`sysData.phraseLength: ${t.phraseLength}`,o+=` must be <= remaining chars: ${i}`,new Error(o)}switch(t.state){case n.ACTIVE:throw new Error(`${d}opUDT(${a.name}) ACTIVE state return not allowed.`);case n.EMPTY:if(a.empty)t.phraseLength=0;else throw new Error(`${d}opUDT(${a.name}) may not return EMPTY.`);break;case n.MATCH:if(t.phraseLength===0)if(a.empty)t.state=n.EMPTY;else throw new Error(`${d}opUDT(${a.name}) may not return EMPTY.`);break;case n.NOMATCH:t.phraseLength=0;break;default:throw new Error(`${d}opUDT(${a.name}): callback function return error. Unrecognized return state: ${t.state}`)}},B=(a,t)=>{let i,o,l;const u=s[a],T=M[u.index];e.UdtIndex=T.index,E||(l=r.ast&&r.ast.udtDefined(u.index),l&&(o=h.length+u.index,i=r.ast.getLength(),r.ast.down(o,T.name)));const C=c.length-t;A[u.index](e,c,t,p),G(T,e,C),E||l&&(e.state===n.NOMATCH?r.ast.setLength(i):r.ast.up(o,T.name,t,e.phraseLength))},K=(a,t)=>{switch(E+=1,P(a+1,t),E-=1,e.phraseLength=0,e.state){case n.EMPTY:e.state=n.EMPTY;break;case n.MATCH:e.state=n.EMPTY;break;case n.NOMATCH:e.state=n.NOMATCH;break;default:throw new Error(`opAND: invalid state ${e.state}`)}},j=(a,t)=>{switch(E+=1,P(a+1,t),E-=1,e.phraseLength=0,e.state){case n.EMPTY:case n.MATCH:e.state=n.NOMATCH;break;case n.NOMATCH:e.state=n.EMPTY;break;default:throw new Error(`opNOT: invalid state ${e.state}`)}},P=(a,t)=>{const i=`${d}opExecute(): `,o=s[a];switch(N+=1,k>m&&(m=k),k+=1,e.refresh(),r.trace&&r.trace.down(o,t),o.type){case n.ALT:D(a,t);break;case n.CAT:U(a,t);break;case n.REP:_(a,t);break;case n.RNM:V(a,t);break;case n.TRG:x(a,t);break;case n.TBS:v(a,t);break;case n.TLS:z(a,t);break;case n.UDT:B(a,t);break;case n.AND:K(a,t);break;case n.NOT:j(a,t);break;default:throw new Error(`${i}unrecognized operator`)}E||t+e.phraseLength>w&&(w=t+e.phraseLength),r.stats&&r.stats.collect(o,e),r.trace&&r.trace.up(o,e.state,t,e.phraseLength),k-=1}},y=function(){const n="parser.js: Ast()): ",L=g,r=R,d=this;let $,E,k,m=0;const N=[],w=[],h=[];d.callbacks=[],d.init=(s,c,e)=>{w.length=0,h.length=0,m=0,$=s,E=c,k=e;let f;const A=[];for(f=0;f<$.length;f+=1)A.push($[f].lower);for(f=0;f<E.length;f+=1)A.push(E[f].lower);for(m=$.length+E.length,f=0;f<m;f+=1)N[f]=void 0;for(const p in d.callbacks){const H=p.toLowerCase();if(f=A.indexOf(H),f<0)throw new Error(`${n}init: node '${p}' not a rule or udt name`);N[f]=d.callbacks[p]}},d.ruleDefined=s=>!!N[s],d.udtDefined=s=>!!N[$.length+s],d.down=(s,c)=>{const e=h.length;return w.push(e),h.push({name:c,thisIndex:e,thatIndex:void 0,state:L.SEM_PRE,callbackIndex:s,phraseIndex:void 0,phraseLength:void 0,stack:w.length}),e},d.up=(s,c,e,f)=>{const A=h.length,p=w.pop();return h.push({name:c,thisIndex:A,thatIndex:p,state:L.SEM_POST,callbackIndex:s,phraseIndex:e,phraseLength:f,stack:w.length}),h[p].thatIndex=A,h[p].phraseIndex=e,h[p].phraseLength=f,A},d.translate=s=>{let c,e;for(let f=0;f<h.length;f+=1)e=h[f],c=N[e.callbackIndex],c&&(e.state===L.SEM_PRE?c(L.SEM_PRE,k,e.phraseIndex,e.phraseLength,s):c&&c(L.SEM_POST,k,e.phraseIndex,e.phraseLength,s))},d.setLength=s=>{h.length=s,s>0?w.length=h[s-1].stack:w.length=0},d.getLength=()=>h.length;function M(s){let c="";for(;s-- >0;)c+=" ";return c}d.toXml=()=>{let s="",c=0;return s+=`<?xml version="1.0" encoding="utf-8"?>
`,s+=`<root nodes="${h.length/2}" characters="${k.length}">
`,s+=`<!-- input string -->
`,s+=M(c+2),s+=r.charsToString(k),s+=`
`,h.forEach(e=>{e.state===L.SEM_PRE?(c+=1,s+=M(c),s+=`<node name="${e.name}" index="${e.phraseIndex}" length="${e.phraseLength}">
`,s+=M(c+2),s+=r.charsToString(k,e.phraseIndex,e.phraseLength),s+=`
`):(s+=M(c),s+=`</node><!-- name="${e.name}" -->
`,c-=1)}),s+=`</root>
`,s}},R={stringToChars:b=>[...b].map(n=>n.codePointAt(0)),charsToString:(b,n,L)=>{let r=b;for(;!(n===void 0||n<0);){if(L===void 0){r=b.slice(n);break}if(L<=0)return"";r=b.slice(n,n+L);break}return String.fromCodePoint(...r)}},g={ALT:1,CAT:2,REP:3,RNM:4,TRG:5,TBS:6,TLS:7,UDT:11,AND:12,NOT:13,ACTIVE:100,MATCH:101,EMPTY:102,NOMATCH:103,SEM_PRE:200,SEM_POST:201,SEM_OK:300,idName:b=>{switch(b){case g.ALT:return"ALT";case g.CAT:return"CAT";case g.REP:return"REP";case g.RNM:return"RNM";case g.TRG:return"TRG";case g.TBS:return"TBS";case g.TLS:return"TLS";case g.UDT:return"UDT";case g.AND:return"AND";case g.NOT:return"NOT";case g.ACTIVE:return"ACTIVE";case g.EMPTY:return"EMPTY";case g.MATCH:return"MATCH";case g.NOMATCH:return"NOMATCH";case g.SEM_PRE:return"SEM_PRE";case g.SEM_POST:return"SEM_POST";case g.SEM_OK:return"SEM_OK";default:return"UNRECOGNIZED STATE"}}};export{y as A,F as P,g as i,R as u};