var l={},e={};Object.defineProperty(e,"__esModule",{value:!0});e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0;e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im;e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g;e.htmlCtrlEntityRegex=/&(newline|tab);/gi;e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;e.urlSchemeRegex=/^.+(:|&colon;)/gim;e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;e.relativeFirstCharacters=[".","/"];e.BLANK_URL="about:blank";Object.defineProperty(l,"__esModule",{value:!0});var o=l.sanitizeUrl=void 0,t=e;function u(a){return t.relativeFirstCharacters.indexOf(a[0])>-1}function R(a){var c=a.replace(t.ctrlCharactersRegex,"");return c.replace(t.htmlEntitiesRegex,function(r,i){return String.fromCharCode(i)})}function s(a){try{return decodeURIComponent(a)}catch{return a}}function g(a){if(!a)return t.BLANK_URL;var c,r=s(a);do r=R(r).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),r=s(r),c=r.match(t.ctrlCharactersRegex)||r.match(t.htmlEntitiesRegex)||r.match(t.htmlCtrlEntityRegex)||r.match(t.whitespaceEscapeCharsRegex);while(c&&c.length>0);var i=r;if(!i)return t.BLANK_URL;if(u(i))return i;var n=i.match(t.urlSchemeRegex);if(!n)return i;var h=n[0];return t.invalidProtocolRegex.test(h)?t.BLANK_URL:i}o=l.sanitizeUrl=g;export{o as s};