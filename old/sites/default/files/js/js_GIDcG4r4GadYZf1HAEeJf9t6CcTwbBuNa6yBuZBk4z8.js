/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (typeof exports == 'object') {
		// For Node.js.
		module.exports = factory(root);
	} else if (typeof define == 'function' && define.amd) {
		// For AMD. Register as an anonymous module.
		define([], factory.bind(root, root));
	} else {
		// For browser globals (not exposing the function separately).
		factory(root);
	}
}(typeof global != 'undefined' ? global : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));
;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
window.drupalTranslations = {"strings":{"":{"Home":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","Next":"\u0412\u043f\u0435\u0440\u0451\u0434","Delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","closed":"\u0437\u0430\u043a\u0440\u044b\u0442\u043e","Cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","File":"\u0424\u0430\u0439\u043b","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Date":"\u0414\u0430\u0442\u0430","Size":"\u0420\u0430\u0437\u043c\u0435\u0440","Link":"\u0421\u0441\u044b\u043b\u043a\u0430","Image":"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435","root":"\u043a\u043e\u0440\u0435\u043d\u044c","Name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435","Open":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c","Refresh":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Continue":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c","Create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Width":"\u0428\u0438\u0440\u0438\u043d\u0430","Height":"\u0412\u044b\u0441\u043e\u0442\u0430","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Add group":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","1 item\u0003@count items":"@count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0003@count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0003@count[2] \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Extend":"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f","Changed":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Loading...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","Apply":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Select":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Unlink":"\u041e\u0442\u0432\u044f\u0437\u0430\u0442\u044c","Resize":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430","Not promoted":"\u041d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e","Error message":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435","button":"\u043a\u043d\u043e\u043f\u043a\u0430","Warning message":"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","Edit Link":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","@label":"@label","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","1 byte\u0003@count bytes":"@count \u0431\u0430\u0439\u0442\u0003@count \u0431\u0430\u0439\u0442\u0430\u0003@count[2] \u0431\u0430\u0439\u0442","@size KB":"@size \u041a\u0411","@size MB":"@size \u041c\u0411","New group":"\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","Lock":"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Status message":"\u0421\u0442\u0430\u0442\u0443\u0441","An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"AJAX HTTP-\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","Unlock":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Collapse":"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Close message":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435","Needs to be updated":"\u041d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","Does not need to be updated":"\u041d\u0435 \u043d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","Show all columns":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b","Show table cells that were hidden to make the table fit within a small screen.":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043a\u0440\u044b\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435.","List additional actions":"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","Flag other translations as outdated":"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435","Do not flag other translations as outdated":"\u041d\u0435 \u043f\u043e\u043c\u0435\u0447\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435","opened":"\u041e\u0442\u043a\u0440\u044b\u0442\u043e","Horizontal orientation":"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f","Vertical orientation":"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f","Tray orientation changed to @orientation.":"\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u043d\u0430 @orientation.","You have unsaved changes.":"\u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.","No styles configured":"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438","@count styles configured":"\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count \u0441\u0442\u0438\u043b\u044c\r\n\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count \u0441\u0442\u0438\u043b\u044f\r\n\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count[2] \u0441\u0442\u0438\u043b\u0435\u0439","@action @title configuration options":"@action @title \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","Tabbing is no longer constrained by the Contextual module.":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043a\u043b\u0430\u0434\u043e\u043a \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u043c\u043e\u0434\u0443\u043b\u0435\u043c Context.","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"\u0412\u043a\u043b\u0430\u0434\u043a\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430 \u043d\u0430\u0431\u043e\u0440\u043e\u043c @contextualsCount \u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u0435\u043c \u0440\u0435\u0436\u0438\u043c\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f.","Press the esc key to exit.":"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 ESC \u0434\u043b\u044f \u0432\u044b\u0445\u043e\u0434\u0430.","@count contextual link\u0003@count contextual links":"@count \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430\u0003@count \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043a\u0438\u0003@count[2] \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0445 \u0441\u0441\u044b\u043b\u043e\u043a","Based on the text editor configuration, these tags have automatically been added: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.":"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0433\u0438 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.","!tour_item of !total":"!tour_item \u0438\u0437 !total","End tour":"\u041a\u043e\u043d\u0435\u0446 \u0442\u0443\u0440\u0430","Uploads disabled":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b","Uploads enabled, max size: @size @dimensions":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440: @size @dimensions","The toolbar cannot be set to a horizontal orientation when it is locked.":"\u041f\u0430\u043d\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430.","Hide group names":"\u0421\u043a\u0440\u044b\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f","Show group names":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f","@groupName button group in position @position of @positionCount in row @row of @rowCount.":"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043d\u043e\u043f\u043e\u043a @groupName \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 @position \u0438\u0437 @positionCount \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 @row \u0438\u0437 @rowCount.","Press the down arrow key to create a new row.":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","@name @type.":"@name @type.","Press the down arrow key to activate.":"\u0414\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","@name @type in position @position of @positionCount in @groupName button group in row @row of @rowCount.":"@type @name \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 @position \u0438\u0437 @positionCount \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 \u043a\u043d\u043e\u043f\u043e\u043a @groupName \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 @row \u0438\u0437 @rowCount.","Press the down arrow key to create a new button group in a new row.":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u043d\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","This is the last group. Move the button forward to create a new group.":"\u042d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0433\u0440\u0443\u043f\u043f\u0430. \u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043f\u0435\u0440\u0451\u0434.","Use the keyboard arrow keys to change the position of this button.":"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435.","Press the up arrow key on the top row to disable the button.":"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u0432\u0435\u0440\u0445\u0022 \u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435.","The \u0022@name\u0022 button is currently disabled.":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0022@name\u0022 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430.","Use the down arrow key to move this button into the active toolbar.":"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022 \u043d\u0430 \u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432.","This @name is currently enabled.":"@name \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e.","Use the keyboard arrow keys to change the position of this separator.":"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435.","Separators are used to visually split individual buttons.":"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043e\u043a.","This @name is currently disabled.":"@name \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e.","Use the down arrow key to move this separator into the active toolbar.":"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022","You may add multiple separators to each button group.":"\u041a \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u043a\u043d\u043e\u043f\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439.","Please provide a name for the button group.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a.","Button group name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a","Editing the name of the new button group in a dialog.":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.","Editing the name of the \u0022@groupName\u0022 button group in a dialog.":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u0022@groupName\u0022 \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.","Place a button to create a new button group.":"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u043a\u043d\u043e\u043f\u043e\u043a \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443.","Add a CKEditor button group to the end of this row.":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443 \u043a\u043d\u043e\u043f\u043e\u043a CKEditor \u0432 \u043a\u043e\u043d\u0435\u0446 \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438.","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u043d\u0430 %text_format \u0431\u0435\u0437\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435 \u0432 \u043d\u043e\u0432\u043e\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435.\u003Cbr\u003E\u003Cbr\u003E\u0414\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430.","Change text format?":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0435\u043a\u0441\u0442\u0430?","Rich Text Editor, !label field":"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043f\u043e\u043b\u0435 !label","Leave preview?":"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440?","Leave preview":"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","Leaving the preview will cause unsaved changes to be lost. Are you sure you want to leave the preview?":"\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u043e\u0442\u0435\u0440\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440?","CTRL+Left click will prevent this dialog from showing and proceed to the clicked link.":"CTRL+\u0449\u0435\u043b\u0447\u043e\u043a \u043b\u0435\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u044d\u0442\u043e \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043d\u0430\u0436\u0430\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435.","Tray \u0022@tray\u0022 @action.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0022@tray\u0022 @action.","Tray @action.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0437\u0430\u0434\u0430\u0447 @action.","Hide lower priority columns":"\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043d\u0438\u0437\u043a\u0438\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c","!modules modules are available in the modified list.":"\u041c\u043e\u0434\u0443\u043b\u0438 !modules \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435.","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Authored on @date":"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0432 @date","1 block is available in the modified list.\u0003@count blocks are available in the modified list.":"\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d 1 \u0431\u043b\u043e\u043a.\u0003\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e @count \u0431\u043b\u043e\u043a\u0430.\u0003\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e @count \u0431\u043b\u043e\u043a\u043e\u0432.","CKEditor 5 is not compatible with IE11.":"CKEditor 5 \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c \u0441 IE11.","Add file":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Edit File":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b","Uploads enabled, max size: @size, @extensions allowed extension(s)":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440: @size, \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u044b\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f: @extensions","New folder":"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u043f\u043a\u0430","Folder name":"\u0418\u043c\u044f \u043f\u0430\u043f\u043a\u0438","Create a copy":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043f\u0438\u044e","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","Use the selected file.":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b.","%path is a predefined path and can not be modified.":"%path \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d.","%filename is not allowed.":"%filename \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f.","%filename contains invalid characters. Use only alphanumeric characters for better portability.":"%filename \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c\u043e\u0441\u0442\u0438.","Image dimensions must be smaller than %dimensions pixels.":"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c %dimensions \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439.","%name is not an image.":"%name \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Delete !filename?\u0003Delete the selected @count items?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c !filename?\u0003\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 @count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432?","%filename already exists.":"%filename \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.","%filename is %filesize exceeding the maximum file size of %maxsize.":"%filename \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c %filesize \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 %maxsize.","Invalid response received from the server.":"\u041e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442.","Insert images using Imce File Manager":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 Imce","Insert file links using Imce File Manager":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 Imce","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b."}},"pluralFormula":{"1":0,"2":1,"3":1,"4":1,"21":0,"22":1,"23":1,"24":1,"31":0,"32":1,"33":1,"34":1,"41":0,"42":1,"43":1,"44":1,"51":0,"52":1,"53":1,"54":1,"61":0,"62":1,"63":1,"64":1,"71":0,"72":1,"73":1,"74":1,"81":0,"82":1,"83":1,"84":1,"91":0,"92":1,"93":1,"94":1,"101":0,"102":1,"103":1,"104":1,"121":0,"122":1,"123":1,"124":1,"131":0,"132":1,"133":1,"134":1,"141":0,"142":1,"143":1,"144":1,"151":0,"152":1,"153":1,"154":1,"161":0,"162":1,"163":1,"164":1,"171":0,"172":1,"173":1,"174":1,"181":0,"182":1,"183":1,"184":1,"191":0,"192":1,"193":1,"194":1,"default":2}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}));;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));;
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):n(this[0].form)}}));;
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],(function(n,i){var e="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),h={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function s(n,i,r,h){return t.each(e,(function(){i-=parseFloat(t.css(n,"padding"+this))||0,r&&(i-=parseFloat(t.css(n,"border"+this+"Width"))||0),h&&(i-=parseFloat(t.css(n,"margin"+this))||0)})),i}t.fn["inner"+i]=function(n){return void 0===n?h["inner"+i].call(this):this.each((function(){t(this).css(r,s(this,n)+"px")}))},t.fn["outer"+i]=function(n,e){return"number"!=typeof n?h["outer"+i].call(this,n):this.each((function(){t(this).css(r,s(this,n,!0,e)+"px")}))}})),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})}));;
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.scrollParent=function(t){var n=this.css("position"),o="absolute"===n,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var t=e(this);return(!o||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))})).eq(0);return"fixed"!==n&&i.length?i:e(this[0].ownerDocument||document)}}));;
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){return i.fn.extend({uniqueId:(n=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++n)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var n}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.escapeSelector=(n=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(e){return e.replace(n,"\\$1")});var n}));;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.focusable=function(i,t){var n,a,r,s,o,u=i.nodeName.toLowerCase();return"area"===u?(a=(n=i.parentNode).name,!(!i.href||!a||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+a+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(s=!i.disabled)&&(o=e(i).closest("fieldset")[0])&&(s=!o.disabled):s="a"===u&&i.href||t,s&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"hidden"!==i}(e(i)))},e.extend(e.expr[":"],{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));;
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(E){"function"==typeof define&&define.amd?define(["jquery","./version"],E):E(jQuery)}((function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.ui.plugin={add:function(e,i,o){var t,u=n.ui[e].prototype;for(t in o)u.plugins[t]=u.plugins[t]||[],u.plugins[t].push([i,o[t]])},call:function(n,e,i,o){var t,u=n.plugins[e];if(u&&(o||n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType))for(t=0;t<u.length;t++)n.options[u[t][0]]&&u[t][1].apply(n.element,i)}}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){var e,i=0,s=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(e,s){t.isFunction(s)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}():r[e]=s})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;a<r;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r))!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(n,o){var a,r;for(r=0;r<n.length;r++)a=s.classesElementLookup[n[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),s.classesElementLookup[n[r]]=a,i.push(n[r]),o&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","../widget"],t):t(jQuery)}((function(t){var e=/ui-corner-([a-z]){2,6}/g;return t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,(function(n,o){var s,l={};if(o)return"controlgroupLabel"===n?((s=e.element.find(o)).each((function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")})),e._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(s.get()))):void(t.fn[n]&&(l=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(o).each((function(){var o=t(this),s=o[n]("instance"),r=t.widget.extend({},l);if("button"!==n||!o.parent(".ui-spinner").length){s||(s=o[n]()[n]("instance")),s&&(r.classes=e._resolveClassesValues(r.classes,s)),o[n](r);var u=o[n]("widget");t.data(u[0],"ui-controlgroup-data",s||o[n]("instance")),i.push(u[0])}}))))})),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each((function(){var i=t(this).data("ui-controlgroup-data");i&&i[e]&&i[e]()}))},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,n){var o={};return t.each(i,(function(s){var l=n.options.classes[s]||"";l=t.trim(l.replace(e,"")),o[s]=(l+" "+i[s]).replace(/\s+/g," ")})),o},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],(function(t,n){var o=e[n]().data("ui-controlgroup-data");if(o&&i["_"+o.widgetName+"Options"]){var s=i["_"+o.widgetName+"Options"](1===e.length?"only":n);s.classes=i._resolveClassesValues(s.classes,o),o.element[o.widgetName](s)}else i._updateCornerClass(e[n](),n)})),this._callChildMethod("refresh"))}})}));;
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],e):e(jQuery)}((function(e){return e.ui.formResetMixin={_formResetHandler:function(){var t=e(this);setTimeout((function(){var r=t.data("ui-form-reset-instances");e.each(r,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var e=this.form.data("ui-form-reset-instances")||[];e.length||this.form.on("reset.ui-form-reset",this._formResetHandler),e.push(this),this.form.data("ui-form-reset-instances",e)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(e.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}));;
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],e):e(jQuery)}((function(e){return e.fn.labels=function(){var t,s,i,n,a;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),s="label[for='"+e.ui.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n))}}));;
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],e):e(jQuery)}((function(e){var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,o=1===i.which,n=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){s.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,i.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));;
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.checkboxradio",[e.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var i,t,s=this,o=this._super()||{};return this._readType(),t=this.element.labels(),this.label=e(t[t.length-1]),this.label.length||e.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each((function(){s.originalLabel+=3===this.nodeType?e(this).text():this.outerHTML})),this.originalLabel&&(o.label=this.originalLabel),null!=(i=this.element[0].disabled)&&(o.disabled=i),o},_create:function(){var e=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),e&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var i=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===i&&/radio|checkbox/.test(this.type)||e.error("Can't create checkboxradio on element.nodeName="+i+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var i=this.element[0].name,t="input[name='"+e.ui.escapeSelector(i)+"']";return i?(this.form.length?e(this.form[0].elements).filter(t):e(t).filter((function(){return 0===e(this).form().length}))).not(this.element):e([])},_toggleClasses:function(){var i=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",i),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",i)._toggleClass(this.icon,null,"ui-icon-blank",!i),"radio"===this.type&&this._getRadioGroup().each((function(){var i=e(this).checkboxradio("instance");i&&i._removeClass(i.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(e,i){if("label"!==e||i){if(this._super(e,i),"disabled"===e)return this._toggleClass(this.label,null,"ui-state-disabled",i),void(this.element[0].disabled=i);this.refresh()}},_updateIcon:function(i){var t="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=e("<span>"),this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(t+=i?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,i?"ui-icon-blank":"ui-icon-check")):t+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",t),i||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var e=this.label.contents().not(this.element[0]);this.icon&&(e=e.not(this.icon[0])),this.iconSpace&&(e=e.not(this.iconSpace[0])),e.remove(),this.label.append(this.options.label)},refresh:function(){var e=this.element[0].checked,i=this.element[0].disabled;this._updateIcon(e),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),null!==this.options.label&&this._updateLabel(),i!==this.options.disabled&&this._setOptions({disabled:i})}}]),e.ui.checkboxradio}));;
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var s=this.options;return!(this.helper||s.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===s.iframeFix?"iframe":s.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var s=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(s).length||t.ui.safeBlur(s)},_mouseStart:function(e){var s=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,s){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!s){var i=this._uiHash();if(!1===this._trigger("drag",e,i))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var s=this,i=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){!1!==s._trigger("stop",e)&&s._clear()})):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var s=this.options,i=t.isFunction(s.helper),o=i?t(s.helper.apply(this.element[0],[e])):"clone"===s.helper?this.element.clone().removeAttr("id"):this.element;return o.parents("body").length||o.appendTo("parent"===s.appendTo?this.element[0].parentNode:s.appendTo),i&&o[0]===this.element[0]&&this._setPositionRelative(),o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute"),o},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),s=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==s&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,s,i,o=this.options,n=this.document[0];this.relativeContainer=null,o.containment?"window"!==o.containment?"document"!==o.containment?o.containment.constructor!==Array?("parent"===o.containment&&(o.containment=this.helper[0].parentNode),(i=(s=t(o.containment))[0])&&(e=/(scroll|auto)/.test(s.css("overflow")),this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=s)):this.containment=o.containment:this.containment=[0,0,t(n).width()-this.helperProportions.width-this.margins.left,(t(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var s="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,n,r=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,h=t.pageY;return l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),s=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):s=this.containment,t.pageX-this.offset.click.left<s[0]&&(a=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(h=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(a=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(h=s[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=s?n-this.offset.click.left>=s[0]||n-this.offset.click.left>s[2]?n:n-this.offset.click.left>=s[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,s,i){return i=i||this._uiHash(),t.ui.plugin.call(this,e,[s,i,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,s,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,s,i){var o=t.extend({},s,{item:i.element});i.sortables=[],t(i.options.connectToSortable).each((function(){var s=t(this).sortable("instance");s&&!s.options.disabled&&(i.sortables.push(s),s.refreshPositions(),s._trigger("activate",e,o))}))},stop:function(e,s,i){var o=t.extend({},s,{item:i.element});i.cancelHelperRemoval=!1,t.each(i.sortables,(function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,o))}))},drag:function(e,s,i){t.each(i.sortables,(function(){var o=!1,n=this;n.positionAbs=i.positionAbs,n.helperProportions=i.helperProportions,n.offset.click=i.offset.click,n._intersectsWith(n.containerCache)&&(o=!0,t.each(i.sortables,(function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&t.contains(n.element[0],this.element[0])&&(o=!1),o}))),o?(n.isOver||(n.isOver=1,i._parent=s.helper.parent(),n.currentItem=s.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return s.helper[0]},e.target=n.currentItem[0],n._mouseCapture(e,!0),n._mouseStart(e,!0,!0),n.offset.click.top=i.offset.click.top,n.offset.click.left=i.offset.click.left,n.offset.parent.left-=i.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=i.offset.parent.top-n.offset.parent.top,i._trigger("toSortable",e),i.dropped=n.element,t.each(i.sortables,(function(){this.refreshPositions()})),i.currentItem=i.element,n.fromOutside=i),n.currentItem&&(n._mouseDrag(e),s.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",e,n._uiHash(n)),n._mouseStop(e,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),s.helper.appendTo(i._parent),i._refreshOffsets(e),s.position=i._generatePosition(e,!0),i._trigger("fromSortable",e),i.dropped=!1,t.each(i.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,s,i){var o=t("body"),n=i.options;o.css("cursor")&&(n._cursor=o.css("cursor")),o.css("cursor",n.cursor)},stop:function(e,s,i){var o=i.options;o._cursor&&t("body").css("cursor",o._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("opacity")&&(n._opacity=o.css("opacity")),o.css("opacity",n.opacity)},stop:function(e,s,i){var o=i.options;o._opacity&&t(s.helper).css("opacity",o._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(e,s,i){var o=i.options,n=!1,r=i.scrollParentNotHidden[0],l=i.document[0];r!==l&&"HTML"!==r.tagName?(o.axis&&"x"===o.axis||(i.overflowOffset.top+r.offsetHeight-e.pageY<o.scrollSensitivity?r.scrollTop=n=r.scrollTop+o.scrollSpeed:e.pageY-i.overflowOffset.top<o.scrollSensitivity&&(r.scrollTop=n=r.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(i.overflowOffset.left+r.offsetWidth-e.pageX<o.scrollSensitivity?r.scrollLeft=n=r.scrollLeft+o.scrollSpeed:e.pageX-i.overflowOffset.left<o.scrollSensitivity&&(r.scrollLeft=n=r.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(e.pageY-t(l).scrollTop()<o.scrollSensitivity?n=t(l).scrollTop(t(l).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(l).scrollTop())<o.scrollSensitivity&&(n=t(l).scrollTop(t(l).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(e.pageX-t(l).scrollLeft()<o.scrollSensitivity?n=t(l).scrollLeft(t(l).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(l).scrollLeft())<o.scrollSensitivity&&(n=t(l).scrollLeft(t(l).scrollLeft()+o.scrollSpeed)))),!1!==n&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,s,i){var o=i.options;i.snapElements=[],t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each((function(){var e=t(this),s=e.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:s.top,left:s.left})}))},drag:function(e,s,i){var o,n,r,l,a,h,p,c,f,d,g=i.options,u=g.snapTolerance,m=s.offset.left,v=m+i.helperProportions.width,_=s.offset.top,P=_+i.helperProportions.height;for(f=i.snapElements.length-1;f>=0;f--)h=(a=i.snapElements[f].left-i.margins.left)+i.snapElements[f].width,c=(p=i.snapElements[f].top-i.margins.top)+i.snapElements[f].height,v<a-u||m>h+u||P<p-u||_>c+u||!t.contains(i.snapElements[f].item.ownerDocument,i.snapElements[f].item)?(i.snapElements[f].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=!1):("inner"!==g.snapMode&&(o=Math.abs(p-P)<=u,n=Math.abs(c-_)<=u,r=Math.abs(a-v)<=u,l=Math.abs(h-m)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h}).left)),d=o||n||r||l,"outer"!==g.snapMode&&(o=Math.abs(p-_)<=u,n=Math.abs(c-P)<=u,r=Math.abs(a-m)<=u,l=Math.abs(h-v)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left)),!i.snapElements[f].snapping&&(o||n||r||l||d)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=o||n||r||l||d)}}),t.ui.plugin.add("draggable","stack",{start:function(e,s,i){var o,n=i.options,r=t.makeArray(t(n.stack)).sort((function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)}));r.length&&(o=parseInt(t(r[0]).css("zIndex"),10)||0,t(r).each((function(e){t(this).css("zIndex",o+e)})),this.css("zIndex",o+r.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("zIndex")&&(n._zIndex=o.css("zIndex")),o.css("zIndex",n.zIndex)},stop:function(e,s,i){var o=i.options;o._zIndex&&t(s.helper).css("zIndex",o._zIndex)}}),t.ui.draggable}));;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(i,e){if("hidden"===t(i).css("overflow"))return!1;var s,h=e&&"left"===e?"scrollLeft":"scrollTop";return i[h]>0||(i[h]=1,s=i[h]>0,i[h]=0,s)},_create:function(){var i,e=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,i={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(i),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(i),this._proportionallyResize()),this._setupHandles(),e.autoHide&&t(this.element).on("mouseenter",(function(){e.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){e.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var i,e=function(i){t(i).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),i=this.element,this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_setOption:function(t,i){if(this._super(t,i),"handles"===t)this._removeHandles(),this._setupHandles()},_setupHandles:function(){var i,e,s,h,n,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},e=0;e<s.length;e++)h="ui-resizable-"+(i=t.trim(s[e])),n=t("<div>"),this._addClass(n,"ui-resizable-handle "+h),n.css({zIndex:o.zIndex}),this.handles[i]=".ui-resizable-"+i,this.element.append(n);this._renderAxis=function(i){var e,s,h,n;for(e in i=i||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=t(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth(),h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),i.css(h,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")})),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(i){var e,s,h=!1;for(e in this.handles)((s=t(this.handles[e])[0])===i.target||t.contains(s,i.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(i){var e,s,h,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(e+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:s},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,h=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===h?this.axis+"-resize":h),this._addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(i){var e,s,h=this.originalMousePosition,n=this.axis,o=i.pageX-h.left||0,a=i.pageY-h.top||0,l=this._change[n];return this._updatePrevProperties(),!!l&&(e=l.apply(this,[i,o,a]),this._updateVirtualBoundaries(i.shiftKey),(this._aspectRatio||i.shiftKey)&&(e=this._updateRatio(e,i)),e=this._respectSize(e,i),this._updateCache(e),this._propagate("resize",i),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",i,this.ui()),this._applyChanges()),!1)},_mouseStop:function(i){this.resizing=!1;var e,s,h,n,o,a,l,r=this.options,p=this;return this._helper&&(h=(s=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:p.sizeDiff.height,n=s?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,l=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(t.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",i),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var i,e,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(i=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,e=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,i>n.minWidth&&(n.minWidth=i),s>n.minHeight&&(n.minHeight=s),e<n.maxWidth&&(n.maxWidth=e),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var i=this.position,e=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=i.left+(e.width-t.width),t.top=null),"nw"===s&&(t.top=i.top+(e.height-t.height),t.left=i.left+(e.width-t.width)),t},_respectSize:function(t){var i=this._vBoundaries,e=this.axis,s=this._isNumber(t.width)&&i.maxWidth&&i.maxWidth<t.width,h=this._isNumber(t.height)&&i.maxHeight&&i.maxHeight<t.height,n=this._isNumber(t.width)&&i.minWidth&&i.minWidth>t.width,o=this._isNumber(t.height)&&i.minHeight&&i.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,r=/sw|nw|w/.test(e),p=/nw|ne|n/.test(e);return n&&(t.width=i.minWidth),o&&(t.height=i.minHeight),s&&(t.width=i.maxWidth),h&&(t.height=i.maxHeight),n&&r&&(t.left=a-i.minWidth),s&&r&&(t.left=a-i.maxWidth),o&&p&&(t.top=l-i.minHeight),h&&p&&(t.top=l-i.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var i=0,e=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];i<4;i++)e[i]=parseFloat(s[i])||0,e[i]+=parseFloat(h[i])||0;return{height:e[0]+e[2],width:e[1]+e[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,i=0,e=this.helper||this.element;i<this._proportionallyResizeElements.length;i++)t=this._proportionallyResizeElements[i],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:e.height()-this.outerDimensions.height||0,width:e.width()-this.outerDimensions.width||0})},_renderProxy:function(){var i=this.element,e=this.options;this.elementOffset=i.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,i){return{width:this.originalSize.width+i}},w:function(t,i){var e=this.originalSize;return{left:this.originalPosition.left+i,width:e.width-i}},n:function(t,i,e){var s=this.originalSize;return{top:this.originalPosition.top+e,height:s.height-e}},s:function(t,i,e){return{height:this.originalSize.height+e}},se:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},sw:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[i,e,s]))},ne:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},nw:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[i,e,s]))}},_propagate:function(i,e){t.ui.plugin.call(this,i,[e,this.ui()]),"resize"!==i&&this._trigger(i,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(i){var e=t(this).resizable("instance"),s=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&e._hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseFloat(e.element.css("left"))+(e.position.left-e.originalPosition.left)||null,p=parseFloat(e.element.css("top"))+(e.position.top-e.originalPosition.top)||null;e.element.animate(t.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(e.element.css("width")),height:parseFloat(e.element.css("height")),top:parseFloat(e.element.css("top")),left:parseFloat(e.element.css("left"))};h&&h.length&&t(h[0]).css({width:s.width,height:s.height}),e._updateCache(s),e._propagate("resize",i)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,e,s,h,n,o,a,l=t(this).resizable("instance"),r=l.options,p=l.element,d=r.containment,g=d instanceof t?d.get(0):/parent/.test(d)?p.parent().get(0):d;g&&(l.containerElement=t(g),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(g),e=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){e[t]=l._num(i.css("padding"+s))})),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-e[3],width:i.innerWidth()-e[1]},s=l.containerOffset,h=l.containerSize.height,n=l.containerSize.width,o=l._hasScroll(g,"left")?g.scrollWidth:n,a=l._hasScroll(g)?g.scrollHeight:h,l.parentData={element:g,left:s.left,top:s.top,width:o,height:a}))},resize:function(i){var e,s,h,n,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||i.shiftKey,d={top:0,left:0},g=o.containerElement,u=!0;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?l.top:0),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-l.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,p&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,p&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var i=t(this).resizable("instance"),e=i.options,s=i.containerOffset,h=i.containerPosition,n=i.containerElement,o=t(i.helper),a=o.offset(),l=o.outerWidth()-i.sizeDiff.width,r=o.outerHeight()-i.sizeDiff.height;i._helper&&!e.animate&&/relative/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r}),i._helper&&!e.animate&&/static/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var i=t(this).resizable("instance").options;t(i.alsoResize).each((function(){var i=t(this);i.data("ui-resizable-alsoresize",{width:parseFloat(i.width()),height:parseFloat(i.height()),left:parseFloat(i.css("left")),top:parseFloat(i.css("top"))})}))},resize:function(i,e){var s=t(this).resizable("instance"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};t(h.alsoResize).each((function(){var i=t(this),s=t(this).data("ui-resizable-alsoresize"),h={},n=i.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(n,(function(t,i){var e=(s[i]||0)+(a[i]||0);e&&e>=0&&(h[i]=e||null)})),i.css(h)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var i=t(this).resizable("instance"),e=i.size;i.ghost=i.originalElement.clone(),i.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),i._addClass(i.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof i.options.ghost&&i.ghost.addClass(this.options.ghost),i.ghost.appendTo(i.helper)},resize:function(){var i=t(this).resizable("instance");i.ghost&&i.ghost.css({position:"relative",height:i.size.height,width:i.size.width})},stop:function(){var i=t(this).resizable("instance");i.ghost&&i.helper&&i.helper.get(0).removeChild(i.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var i,e=t(this).resizable("instance"),s=e.options,h=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,r=l[0]||1,p=l[1]||1,d=Math.round((h.width-n.width)/r)*r,g=Math.round((h.height-n.height)/p)*p,u=n.width+d,f=n.height+g,m=s.maxWidth&&s.maxWidth<u,c=s.maxHeight&&s.maxHeight<f,z=s.minWidth&&s.minWidth>u,w=s.minHeight&&s.minHeight>f;s.grid=l,z&&(u+=r),w&&(f+=p),m&&(u-=r),c&&(f-=p),/^(se|s|e)$/.test(a)?(e.size.width=u,e.size.height=f):/^(ne)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.top=o.top-g):/^(sw)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.left=o.left-d):((f-p<=0||u-r<=0)&&(i=e._getPaddingPlusBorderDimensions(this)),f-p>0?(e.size.height=f,e.position.top=o.top-g):(f=p-i.height,e.size.height=f,e.position.top=o.top+n.height-f),u-r>0?(e.size.width=u,e.position.left=o.left-d):(u=r-i.width,e.size.width=u,e.position.left=o.left+n.width-u))}}),t.ui.resizable}));;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],t):t(jQuery)}((function(t){var i;return t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,i=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(i.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(i.label=this.originalLabel),i},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(i){i.keyCode===t.ui.keyCode.SPACE&&(i.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(i,o){var s="iconPosition"!==i,n=s?this.options.iconPosition:o,e="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,o),this._attachIcon(n),e?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var i=void 0===t.showLabel?this.options.showLabel:t.showLabel,o=void 0===t.icon?this.options.icon:t.icon;i||o||(t.showLabel=!0),this._super(t)},_setOption:function(t,i){"icon"===t&&(i?this._updateIcon(t,i):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,i),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!i),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(i):(this.element.html(i),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,i),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",i),this.element[0].disabled=i,i&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,i){"text"!==t?("showLabel"===t&&(this.options.text=i),"icon"===t&&(this.options.icons.primary=i),"icons"===t&&(i.primary?(this._super("icon",i.primary),this._super("iconPosition","beginning")):i.secondary&&(this._super("icon",i.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",i)}}),t.fn.button=(i=t.fn.button,function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?i.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button}));;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../unique-id","../version","../widget"],i):i(jQuery)}((function(i){return i.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top;e<0&&i(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&i.fn.draggable&&this._makeDraggable(),this.options.resizable&&i.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?i(t):this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(i=t.parent.children().eq(t.index)).length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||i.ui.safeBlur(i.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,(function(){e._trigger("close",t)})))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var o=!1,s=this.uiDialog.siblings(".ui-front:visible").map((function(){return+i(this).css("z-index")})).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),o=!0),o&&!e&&this._trigger("focus",t),o},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=i(i.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){t._focusTabbable(),t._trigger("focus")})),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;i||(i=this.element.find("[autofocus]")),i.length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).trigger("focus")},_keepFocus:function(t){function e(){var t=i.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===t||i.contains(this.uiDialog[0],t)||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=i("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===i.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),o=e.filter(":first"),s=e.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==o[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay((function(){s.trigger("focus")})),t.preventDefault()):(this._delay((function(){o.trigger("focus")})),t.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=i("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){i(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=i("<button type='button'></button>").button({label:i("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}}),t=i("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){this.options.title?i.text(this.options.title):i.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=i("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),i.isEmptyObject(e)||i.isArray(e)&&!e.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(i.each(e,(function(e,o){var s,n;o=i.isFunction(o)?{click:o,text:e}:o,o=i.extend({type:"button"},o),s=o.click,n={icon:o.icon,iconPosition:o.iconPosition,showLabel:o.showLabel,icons:o.icons,text:o.text},delete o.click,delete o.icon,delete o.iconPosition,delete o.showLabel,delete o.icons,"boolean"==typeof o.text&&delete o.text,i("<button></button>",o).button(n).appendTo(t.uiButtonSet).on("click",(function(){s.apply(t.element[0],arguments)}))})),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var t=this,e=this.options;function o(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,s){t._addClass(i(this),"ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",e,o(s))},drag:function(i,e){t._trigger("drag",i,o(e))},stop:function(s,n){var a=n.offset.left-t.document.scrollLeft(),l=n.offset.top-t.document.scrollTop();e.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:t.window},t._removeClass(i(this),"ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",s,o(n))}})},_makeResizable:function(){var t=this,e=this.options,o=e.resizable,s=this.uiDialog.css("position"),n="string"==typeof o?o:"n,e,s,w,se,sw,ne,nw";function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){t._addClass(i(this),"ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){var n=t.uiDialog.offset(),l=n.left-t.document.scrollLeft(),h=n.top-t.document.scrollTop();e.height=t.uiDialog.height(),e.width=t.uiDialog.width(),e.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:t.window},t._removeClass(i(this),"ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",o,a(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,(function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)})),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var o,s,n=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:i("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((o=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!o&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay((function(){t=!1})),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(i){t||this._allowInteraction(i)||(i.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=i("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==i.uiBackCompat&&i.widget("ui.dialog",i.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(i,t){"dialogClass"===i&&this.uiDialog.removeClass(this.options.dialogClass).addClass(t),this._superApply(arguments)}}),i.ui.dialog}));;
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,r=e.tabbable={};t(r),r.noConflict=function(){return e.tabbable=n,r}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,o=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},c=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),i=o.width,a=o.height;return 0===i&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},d=function(e,t){return!(!c(e,t)||l(t)||i(t)<0)},f=t.concat("iframe").join(",");e.focusable=function(e,t){return o(e,(t=t||{}).includeContainer,c.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,f)&&c(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&d(t,e)},e.tabbable=function(e,t){var n=[],r=[];return o(e,(t=t||{}).includeContainer,d.bind(null,t)).forEach((function(e,t){var o=i(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(a).map((function(e){return e.node})).concat(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;

    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (Drupal) {
  Drupal.Message = function () {
    function _class() {
      var messageWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _classCallCheck(this, _class);

      if (!messageWrapper) {
        this.messageWrapper = Drupal.Message.defaultWrapper();
      } else {
        this.messageWrapper = messageWrapper;
      }
    }

    _createClass(_class, [{
      key: "add",
      value: function add(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!options.hasOwnProperty('type')) {
          options.type = 'status';
        }

        if (typeof message !== 'string') {
          throw new Error('Message must be a string.');
        }

        Drupal.Message.announce(message, options);
        options.id = options.id ? String(options.id) : "".concat(options.type, "-").concat(Math.random().toFixed(15).replace('0.', ''));

        if (!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)) {
          var type = options.type;
          throw new Error("The message type, ".concat(type, ", is not present in Drupal.Message.getMessageTypeLabels()."));
        }

        this.messageWrapper.appendChild(Drupal.theme('message', {
          text: message
        }, options));
        return options.id;
      }
    }, {
      key: "select",
      value: function select(id) {
        return this.messageWrapper.querySelector("[data-drupal-message-id^=\"".concat(id, "\"]"));
      }
    }, {
      key: "remove",
      value: function remove(id) {
        return this.messageWrapper.removeChild(this.select(id));
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this = this;

        Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'), function (message) {
          _this.messageWrapper.removeChild(message);
        });
      }
    }], [{
      key: "defaultWrapper",
      value: function defaultWrapper() {
        var wrapper = document.querySelector('[data-drupal-messages]');

        if (!wrapper) {
          wrapper = document.querySelector('[data-drupal-messages-fallback]');
          wrapper.removeAttribute('data-drupal-messages-fallback');
          wrapper.setAttribute('data-drupal-messages', '');
          wrapper.classList.remove('hidden');
        }

        return wrapper.innerHTML === '' ? Drupal.Message.messageInternalWrapper(wrapper) : wrapper.firstElementChild;
      }
    }, {
      key: "getMessageTypeLabels",
      value: function getMessageTypeLabels() {
        return {
          status: Drupal.t('Status message'),
          error: Drupal.t('Error message'),
          warning: Drupal.t('Warning message')
        };
      }
    }, {
      key: "announce",
      value: function announce(message, options) {
        if (!options.priority && (options.type === 'warning' || options.type === 'error')) {
          options.priority = 'assertive';
        }

        if (options.announce !== '') {
          Drupal.announce(options.announce || message, options.priority);
        }
      }
    }, {
      key: "messageInternalWrapper",
      value: function messageInternalWrapper(messageWrapper) {
        var innerWrapper = document.createElement('div');
        innerWrapper.setAttribute('class', 'messages__wrapper');
        messageWrapper.insertAdjacentElement('afterbegin', innerWrapper);
        return innerWrapper;
      }
    }]);

    return _class;
  }();

  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
        id = _ref2.id;
    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "messages messages--".concat(type));
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    messageWrapper.setAttribute('aria-label', messagesTypes[type]);
    messageWrapper.innerHTML = "".concat(text);
    return messageWrapper;
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;

  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };

  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };

  var drupalOnce = once;

  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }

  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }

  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }

    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;

    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;

    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }

    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }

      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, _ref) {
  var isTabbable = _ref.isTabbable;
  $.extend($.expr[':'], {
    tabbable: function tabbable(element) {
      Drupal.deprecationError({
        message: 'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 10.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'
      });

      if (element.tagName === 'SUMMARY' || element.tagName === 'DETAILS') {
        var tabIndex = element.getAttribute('tabIndex');

        if (tabIndex === null || tabIndex < 0) {
          return false;
        }
      }

      return isTabbable(element);
    }
  });
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  var cachedScrollbarWidth = null;
  var max = Math.max,
      abs = Math.abs;
  var regexHorizontal = /left|center|right/;
  var regexVertical = /top|center|bottom/;
  var regexOffset = /[+-]\d+(\.[\d]+)?%?/;
  var regexPosition = /^\w+/;
  var regexPercent = /%$/;
  var _position = $.fn.position;

  function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (regexPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (regexPercent.test(offsets[1]) ? height / 100 : 1)];
  }

  function parseCss(element, property) {
    return parseInt($.css(element, property), 10) || 0;
  }

  function getDimensions(elem) {
    var raw = elem[0];

    if (raw.nodeType === 9) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: 0,
          left: 0
        }
      };
    }

    if ($.isWindow(raw)) {
      return {
        width: elem.width(),
        height: elem.height(),
        offset: {
          top: elem.scrollTop(),
          left: elem.scrollLeft()
        }
      };
    }

    if (raw.preventDefault) {
      return {
        width: 0,
        height: 0,
        offset: {
          top: raw.pageY,
          left: raw.pageX
        }
      };
    }

    return {
      width: elem.outerWidth(),
      height: elem.outerHeight(),
      offset: elem.offset()
    };
  }

  var collisions = {
    fit: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
        var outerWidth = within.width;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = withinOffset - collisionPosLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
        var newOverRight;

        if (data.collisionWidth > outerWidth) {
          if (overLeft > 0 && overRight <= 0) {
            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
            position.left += overLeft - newOverRight;
          } else if (overRight > 0 && overLeft <= 0) {
            position.left = withinOffset;
          } else if (overLeft > overRight) {
            position.left = withinOffset + outerWidth - data.collisionWidth;
          } else {
            position.left = withinOffset;
          }
        } else if (overLeft > 0) {
          position.left += overLeft;
        } else if (overRight > 0) {
          position.left -= overRight;
        } else {
          position.left = max(position.left - collisionPosLeft, position.left);
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
        var outerHeight = data.within.height;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = withinOffset - collisionPosTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
        var newOverBottom;

        if (data.collisionHeight > outerHeight) {
          if (overTop > 0 && overBottom <= 0) {
            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
            position.top += overTop - newOverBottom;
          } else if (overBottom > 0 && overTop <= 0) {
            position.top = withinOffset;
          } else if (overTop > overBottom) {
            position.top = withinOffset + outerHeight - data.collisionHeight;
          } else {
            position.top = withinOffset;
          }
        } else if (overTop > 0) {
          position.top += overTop;
        } else if (overBottom > 0) {
          position.top -= overBottom;
        } else {
          position.top = max(position.top - collisionPosTop, position.top);
        }
      }
    },
    flip: {
      left: function left(position, data) {
        var within = data.within;
        var withinOffset = within.offset.left + within.scrollLeft;
        var outerWidth = within.width;
        var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
        var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
        var overLeft = collisionPosLeft - offsetLeft;
        var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
        var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
        var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
        var offset = -2 * data.offset[0];
        var newOverRight;
        var newOverLeft;

        if (overLeft < 0) {
          newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;

          if (newOverRight < 0 || newOverRight < abs(overLeft)) {
            position.left += myOffset + atOffset + offset;
          }
        } else if (overRight > 0) {
          newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;

          if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
            position.left += myOffset + atOffset + offset;
          }
        }
      },
      top: function top(position, data) {
        var within = data.within;
        var withinOffset = within.offset.top + within.scrollTop;
        var outerHeight = within.height;
        var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
        var collisionPosTop = position.top - data.collisionPosition.marginTop;
        var overTop = collisionPosTop - offsetTop;
        var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
        var top = data.my[1] === 'top';
        var myOffset = top ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
        var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
        var offset = -2 * data.offset[1];
        var newOverTop;
        var newOverBottom;

        if (overTop < 0) {
          newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;

          if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
            position.top += myOffset + atOffset + offset;
          }
        } else if (overBottom > 0) {
          newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;

          if (newOverTop > 0 || abs(newOverTop) < overBottom) {
            position.top += myOffset + atOffset + offset;
          }
        }
      }
    },
    flipfit: {
      left: function left() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        collisions.flip.left.apply(this, args);
        collisions.fit.left.apply(this, args);
      },
      top: function top() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        collisions.flip.top.apply(this, args);
        collisions.fit.top.apply(this, args);
      }
    }
  };
  $.position = {
    scrollbarWidth: function scrollbarWidth() {
      if (cachedScrollbarWidth !== undefined) {
        return cachedScrollbarWidth;
      }

      var div = $('<div ' + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>");
      var innerDiv = div.children()[0];
      $('body').append(div);
      var w1 = innerDiv.offsetWidth;
      div.css('overflow', 'scroll');
      var w2 = innerDiv.offsetWidth;

      if (w1 === w2) {
        w2 = div[0].clientWidth;
      }

      div.remove();
      cachedScrollbarWidth = w1 - w2;
      return cachedScrollbarWidth;
    },
    getScrollInfo: function getScrollInfo(within) {
      var overflowX = within.isWindow || within.isDocument ? '' : within.element.css('overflow-x');
      var overflowY = within.isWindow || within.isDocument ? '' : within.element.css('overflow-y');
      var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element[0].scrollWidth;
      var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element[0].scrollHeight;
      return {
        width: hasOverflowY ? $.position.scrollbarWidth() : 0,
        height: hasOverflowX ? $.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function getWithinInfo(element) {
      var withinElement = $(element || window);
      var isWindow = $.isWindow(withinElement[0]);
      var isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
      var hasOffset = !isWindow && !isDocument;
      return {
        element: withinElement,
        isWindow: isWindow,
        isDocument: isDocument,
        offset: hasOffset ? $(element).offset() : {
          left: 0,
          top: 0
        },
        scrollLeft: withinElement.scrollLeft(),
        scrollTop: withinElement.scrollTop(),
        width: withinElement.outerWidth(),
        height: withinElement.outerHeight()
      };
    }
  };

  $.fn.position = function (options) {
    if (!options || !options.of) {
      return _position.apply(this, arguments);
    }

    options = $.extend({}, options);
    var within = $.position.getWithinInfo(options.within);
    var scrollInfo = $.position.getScrollInfo(within);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};
    var target = typeof options.of === 'string' ? $(document).find(options.of) : $(options.of);
    var dimensions = getDimensions(target);
    var targetWidth = dimensions.width;
    var targetHeight = dimensions.height;
    var targetOffset = dimensions.offset;

    if (target[0].preventDefault) {
      options.at = 'left top';
    }

    var basePosition = $.extend({}, targetOffset);
    $.each(['my', 'at'], function () {
      var pos = (options[this] || '').split(' ');

      if (pos.length === 1) {
        pos = regexHorizontal.test(pos[0]) ? pos.concat(['center']) : regexVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
      }

      pos[0] = regexHorizontal.test(pos[0]) ? pos[0] : 'center';
      pos[1] = regexVertical.test(pos[1]) ? pos[1] : 'center';
      var horizontalOffset = regexOffset.exec(pos[0]);
      var verticalOffset = regexOffset.exec(pos[1]);
      offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
      options[this] = [regexPosition.exec(pos[0])[0], regexPosition.exec(pos[1])[0]];
    });

    if (collision.length === 1) {
      collision[1] = collision[0];
    }

    if (options.at[0] === 'right') {
      basePosition.left += targetWidth;
    } else if (options.at[0] === 'center') {
      basePosition.left += targetWidth / 2;
    }

    if (options.at[1] === 'bottom') {
      basePosition.top += targetHeight;
    } else if (options.at[1] === 'center') {
      basePosition.top += targetHeight / 2;
    }

    var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
    basePosition.left += atOffset[0];
    basePosition.top += atOffset[1];
    return this.each(function () {
      var using;
      var elem = $(this);
      var elemWidth = elem.outerWidth();
      var elemHeight = elem.outerHeight();
      var marginLeft = parseCss(this, 'marginLeft');
      var marginTop = parseCss(this, 'marginTop');
      var collisionWidth = elemWidth + marginLeft + parseCss(this, 'marginRight') + scrollInfo.width;
      var collisionHeight = elemHeight + marginTop + parseCss(this, 'marginBottom') + scrollInfo.height;
      var position = $.extend({}, basePosition);
      var myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());

      if (options.my[0] === 'right') {
        position.left -= elemWidth;
      } else if (options.my[0] === 'center') {
        position.left -= elemWidth / 2;
      }

      if (options.my[1] === 'bottom') {
        position.top -= elemHeight;
      } else if (options.my[1] === 'center') {
        position.top -= elemHeight / 2;
      }

      position.left += myOffset[0];
      position.top += myOffset[1];
      var collisionPosition = {
        marginLeft: marginLeft,
        marginTop: marginTop
      };
      $.each(['left', 'top'], function (i, dir) {
        if (collisions[collision[i]]) {
          collisions[collision[i]][dir](position, {
            targetWidth: targetWidth,
            targetHeight: targetHeight,
            elemWidth: elemWidth,
            elemHeight: elemHeight,
            collisionPosition: collisionPosition,
            collisionWidth: collisionWidth,
            collisionHeight: collisionHeight,
            offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
            my: options.my,
            at: options.at,
            within: within,
            elem: elem
          });
        }
      });

      if (options.using) {
        using = function using(props) {
          var left = targetOffset.left - position.left;
          var right = left + targetWidth - elemWidth;
          var top = targetOffset.top - position.top;
          var bottom = top + targetHeight - elemHeight;
          var feedback = {
            target: {
              element: target,
              left: targetOffset.left,
              top: targetOffset.top,
              width: targetWidth,
              height: targetHeight
            },
            element: {
              element: elem,
              left: position.left,
              top: position.top,
              width: elemWidth,
              height: elemHeight
            },
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
          };

          if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
          }

          if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
          }

          if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
          } else {
            feedback.important = 'vertical';
          }

          options.using.call(this, props, feedback);
        };
      }

      elem.offset($.extend(position, {
        using: using
      }));
    });
  };

  if (!$.hasOwnProperty('ui')) {
    $.ui = {};
  }

  $.ui.position = collisions;
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({
        modal: false
      });
    };

    dialog.showModal = function () {
      openDialog({
        modal: true
      });
    };

    dialog.close = closeDialog;
    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({
    autoResize: true,
    maxHeight: '95%'
  }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;
    var leftString = "".concat((left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)), "px");
    var topString = "".concat((top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)), "px");
    options.position = {
      my: "center".concat(left !== 0 ? leftString : '', " center").concat(top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;

    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];

      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }

          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }

    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {
        settings: settings,
        $element: $element
      };

      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', {
          resizable: false,
          draggable: false
        }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _ref) {
  var tabbable = _ref.tabbable,
      isTabbable = _ref.isTabbable;
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex;
      var index;
      var il = opts.buttons.length;

      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }

      this._super();

      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);

      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    },
    _focusTabbable: function _focusTabbable() {
      var hasFocus = this._focusedElement ? this._focusedElement.get(0) : null;

      if (!hasFocus) {
        hasFocus = this.element.find('[autofocus]').get(0);
      }

      if (!hasFocus) {
        var $elements = [this.element, this.uiDialogButtonPane];

        for (var i = 0; i < $elements.length; i++) {
          var element = $elements[i].get(0);

          if (element) {
            var elementTabbable = tabbable(element);
            hasFocus = elementTabbable.length ? elementTabbable[0] : null;
          }

          if (hasFocus) {
            break;
          }
        }
      }

      if (!hasFocus) {
        var closeBtn = this.uiDialogTitlebarClose.get(0);
        hasFocus = closeBtn && isTabbable(closeBtn) ? closeBtn : null;
      }

      if (!hasFocus) {
        hasFocus = this.uiDialog.get(0);
      }

      $(hasFocus).eq(0).trigger('focus');
    }
  });
})(jQuery, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function findFieldForFormatSelector($formatSelector) {
    var fieldId = $formatSelector.attr('data-editor-for');
    return $("#".concat(fieldId)).get(0);
  }

  function filterXssWhenSwitching(field, format, originalFormatID, callback) {
    if (format.editor.isXssSafe) {
      callback(field, format);
    } else {
      $.ajax({
        url: Drupal.url("editor/filter_xss/".concat(format.format)),
        type: 'POST',
        data: {
          value: field.value,
          original_format_id: originalFormatID
        },
        dataType: 'json',
        success: function success(xssFilteredValue) {
          if (xssFilteredValue !== false) {
            field.value = xssFilteredValue;
          }

          callback(field, format);
        }
      });
    }
  }

  function changeTextEditor(field, newFormatID) {
    var previousFormatID = field.getAttribute('data-editor-active-text-format');

    if (drupalSettings.editor.formats[previousFormatID]) {
      Drupal.editorDetach(field, drupalSettings.editor.formats[previousFormatID]);
    } else {
      $(field).off('.editor');
    }

    if (drupalSettings.editor.formats[newFormatID]) {
      var format = drupalSettings.editor.formats[newFormatID];
      filterXssWhenSwitching(field, format, previousFormatID, Drupal.editorAttach);
    }

    field.setAttribute('data-editor-active-text-format', newFormatID);
  }

  function onTextFormatChange(event) {
    var $select = $(event.target);
    var field = event.data.field;
    var activeFormatID = field.getAttribute('data-editor-active-text-format');
    var newFormatID = $select.val();

    if (newFormatID === activeFormatID) {
      return;
    }

    var supportContentFiltering = drupalSettings.editor.formats[newFormatID] && drupalSettings.editor.formats[newFormatID].editorSupportsContentFiltering;
    var hasContent = field.value !== '';

    if (hasContent && supportContentFiltering) {
      var message = Drupal.t('Changing the text format to %text_format will permanently remove content that is not allowed in that text format.<br><br>Save your changes before switching the text format to avoid losing data.', {
        '%text_format': $select.find('option:selected').text()
      });
      var confirmationDialog = Drupal.dialog("<div>".concat(message, "</div>"), {
        title: Drupal.t('Change text format?'),
        dialogClass: 'editor-change-text-format-modal',
        resizable: false,
        buttons: [{
          text: Drupal.t('Continue'),
          class: 'button button--primary',
          click: function click() {
            changeTextEditor(field, newFormatID);
            confirmationDialog.close();
          }
        }, {
          text: Drupal.t('Cancel'),
          class: 'button',
          click: function click() {
            $select.val(activeFormatID);
            confirmationDialog.close();
          }
        }],
        closeOnEscape: false,
        create: function create() {
          $(this).parent().find('.ui-dialog-titlebar-close').remove();
        },
        beforeClose: false,
        close: function close(event) {
          $(event.target).remove();
        }
      });
      confirmationDialog.showModal();
    } else {
      changeTextEditor(field, newFormatID);
    }
  }

  Drupal.editors = {};
  Drupal.behaviors.editor = {
    attach: function attach(context, settings) {
      if (!settings.editor) {
        return;
      }

      once('editor', '[data-editor-for]', context).forEach(function (editor) {
        var $this = $(editor);
        var field = findFieldForFormatSelector($this);

        if (!field) {
          return;
        }

        var activeFormatID = $this.val();
        field.setAttribute('data-editor-active-text-format', activeFormatID);

        if (settings.editor.formats[activeFormatID]) {
          Drupal.editorAttach(field, settings.editor.formats[activeFormatID]);
        }

        $(field).on('change.editor keypress.editor', function () {
          field.setAttribute('data-editor-value-is-changed', 'true');
          $(field).off('.editor');
        });

        if ($this.is('select')) {
          $this.on('change.editorAttach', {
            field: field
          }, onTextFormatChange);
        }

        $this.parents('form').on('submit', function (event) {
          if (event.isDefaultPrevented()) {
            return;
          }

          if (settings.editor.formats[activeFormatID]) {
            Drupal.editorDetach(field, settings.editor.formats[activeFormatID], 'serialize');
          }
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      var editors;

      if (trigger === 'serialize') {
        editors = once.filter('editor', '[data-editor-for]', context);
      } else {
        editors = once.remove('editor', '[data-editor-for]', context);
      }

      editors.forEach(function (editor) {
        var $this = $(editor);
        var activeFormatID = $this.val();
        var field = findFieldForFormatSelector($this);

        if (field && activeFormatID in settings.editor.formats) {
          Drupal.editorDetach(field, settings.editor.formats[activeFormatID], trigger);
        }
      });
    }
  };

  Drupal.editorAttach = function (field, format) {
    if (format.editor) {
      Drupal.editors[format.editor].attach(field, format);
      Drupal.editors[format.editor].onChange(field, function () {
        $(field).trigger('formUpdated');
        field.setAttribute('data-editor-value-is-changed', 'true');
      });
    }
  };

  Drupal.editorDetach = function (field, format, trigger) {
    if (format.editor) {
      Drupal.editors[format.editor].detach(field, format, trigger);

      if (field.getAttribute('data-editor-value-is-changed') === 'false') {
        field.value = field.getAttribute('data-editor-value-original');
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Modernizr) {
  var isIE11 = Modernizr.mq('(-ms-high-contrast: active), (-ms-high-contrast: none)');

  if (isIE11) {
    var quickEditLabelObserver = null;
    Drupal.editors.ckeditor5 = {
      attach: function attach(element) {
        var editorMessageContainer = document.createElement('div');
        element.parentNode.insertBefore(editorMessageContainer, element);
        var editorMessages = new Drupal.Message(editorMessageContainer);
        editorMessages.add(Drupal.t('A rich text editor is available for this field when used with <a href="@supported-browsers">supported browsers</a> other than Internet Explorer.', {
          '@supported-browsers': 'https://www.drupal.org/docs/system-requirements/browser-requirements'
        }), {
          type: 'warning'
        });
      },
      detach: function detach() {
        var quickEditToolbar = document.querySelector('#quickedit-entity-toolbar .quickedit-toolbar');

        if (quickEditToolbar) {
          quickEditToolbar.classList.remove('ck5-ie11');
          quickEditToolbar.classList.add('icon-pencil');
          quickEditLabelObserver.disconnect();
        }
      },
      onChange: function onChange() {},
      attachInlineEditor: function attachInlineEditor(element) {
        var quickEditToolbar = document.querySelector('#quickedit-entity-toolbar .quickedit-toolbar');
        var notEditableAlert = Drupal.t('Field Not Editable');
        var notEditableMessage = Drupal.t('CKEditor 5 is not compatible with IE11.');

        function quickEditLabelWarnIE11(toolbarLabel) {
          quickEditLabelObserver.disconnect();
          toolbarLabel.innerHTML = "<div><b>".concat(notEditableAlert, "</b><div>").concat(notEditableMessage, "</div></div>");
          quickEditLabelObserver.observe(toolbarLabel, {
            childList: true
          });
        }

        if (quickEditToolbar) {
          quickEditToolbar.classList.add('ck5-ie11');
          quickEditToolbar.classList.remove('icon-pencil');
          element.classList.add('ck5-ie11');
          var toolbarLabel = quickEditToolbar.querySelector('.quickedit-toolbar-label');
          quickEditLabelObserver = new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
              if (mutations[i].type === 'childList') {
                quickEditLabelWarnIE11(toolbarLabel);
              }
            }
          });
          quickEditLabelObserver.observe(toolbarLabel, {
            childList: true
          });
        }
      }
    };
  }
})(Drupal, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;

      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;

        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
(function ($, Drupal) {
  'use strict';

  /**
   * @file
   * Defines Imce File Manager.
   */

  /**
   * Global container.
   */
  var imce = window.imce = {
    // Configuration options
    conf: {},
    // Locally stored data
    local: {},
    // Events
    events: {},
    // Shortcuts
    shortcuts: {fm: {}, tree: {}, content: {}},
    // Toolbar buttons
    toolbarButtons: {},
    // Folder tree
    tree: {},
    // Currently selected items
    selection: [],
    // Message queue
    messageQueue: [],
    // Sort handlers
    sorters: {}
  };

  /**
   * Initiate imce on document ready.
   */
  $(function () {

    var settings = window.drupalSettings;
    var conf = settings && settings.imce;
    var body = document.body;
    if (conf && !imce.activeFolder && $(body).hasClass('imce-page')) {
      if (!conf.ajax_url) {
        conf.ajax_url = Drupal.url(settings.path.currentPath);
      }
      imce.init(conf, body);
    }
  });

  /**
   * Initialize imce.
   */
  imce.init = function (conf, parentEl) {
    // Set conf
    conf = $.extend(imce.conf, conf);
    if (!conf.ajax_url || !conf.folders || !conf.root_url) {
      return;
    }
    imce.parentEl = parentEl;
    // Get stored data
    try {
      $.extend(imce.local, JSON.parse(localStorage.getItem('imce.local')));
    }
    catch (err) {
      imce.delayError(err);
    }
    // Init
    imce.trigger('preinit');
    imce.checkIntegration();
    imce.initUI();
    imce.initTree();
    // Add shortcuts
    imce.addShortcut('ENTER', imce.eTreeEnter, 'tree');
    imce.addShortcut('UP', imce.eTreeUp, 'tree');
    imce.addShortcut('DOWN', imce.eTreeDown, 'tree');
    imce.addShortcut('LEFT', imce.eTreeLR, 'tree');
    imce.addShortcut('RIGHT', imce.eTreeLR, 'tree');
    imce.addShortcut('ENTER', imce.eContentEnter, 'content');
    imce.addShortcut('UP', imce.eContentArrow, 'content');
    imce.addShortcut('DOWN', imce.eContentArrow, 'content');
    imce.addShortcut('LEFT', imce.eContentArrow, 'content');
    imce.addShortcut('RIGHT', imce.eContentArrow, 'content');
    imce.addShortcut('Ctrl+A', imce.eContentCtrlA, 'content');
    // Add refresh button
    imce.addTbb('refresh', {
      title: Drupal.t('Refresh'),
      permission: 'browse_files|browse_subfolders',
      handler: imce.eFmRefresh,
      shortcut: 'F5',
      icon: 'refresh'
    });
    // Register default activeFolder handler
    imce.bind('activateFolder', imce.defaultActivateFolder);
    // Trigger init handlers
    imce.trigger('init');
    // Create sendto toolbar button if needed.
    imce.createSendtoTbb();
    // Add the file manager to the page
    parentEl.appendChild(imce.fmEl);
    // Set window events
    $(window).on('beforeunload', imce.eWinBeforeunload).on('resize', imce.eWinResize);
    imce.eWinResize();
    // Content focus
    imce.contentEl.focus();
    // Set initial messages
    imce.ajaxProcessMessages(conf);
    // Open active path
    var path = conf.active_path;
    var Folder = path && imce.addFolder(path);
    if (!Folder) {
      for (path in conf.folders) {
        if (Folder = imce.getFolder(path)) {
          break;
        }
      }
    }
    if (Folder) {
      Folder.open();
    }
    // Triger postinit
    imce.trigger('postinit');
  };

  /**
   * Init UI elements.
   */
  imce.initUI = function () {
    var el = imce.fmEl;
    var createEl = imce.createEl;
    if (el) {
      return el;
    }
    el = imce.fmEl = createEl('<div id="imce-fm"></div>');
    el.onkeydown = imce.eFmKeydown;
    el.tabIndex = 0;
    // Toolbar
    el.appendChild(imce.toolbarEl = createEl('<div id="imce-toolbar" aria-label="Operations" role="toolbar"></div>'));
    // Body
    el.appendChild(imce.bodyEl = createEl('<div id="imce-body"></div>'));
    // Tree
    el = imce.treeEl = createEl('<div id="imce-tree"></div>');
    el.onkeydown = imce.eTreeKeydown;
    el.onmousedown = imce.eTreeMousedown;
    el.ontouchstart = imce.eTreeTouchstart;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Tree resizer
    el = imce.treeResizerEl = createEl('<div id="imce-tree-resizer"></div>');
    el.onmousedown = imce.eTreeResizerMousedown;
    el.ontouchstart = imce.eTreeResizerTouchstart;
    imce.bodyEl.appendChild(el);
    // Content
    el = imce.contentEl = createEl('<div id="imce-content"></div>');
    if (imce.conf.thumbnail_grid_style) {
      el.className = 'thumbnail-grid';
    }
    el.onmousedown = imce.eContentMousedown;
    el.ontouchstart = imce.eContentTouchstart;
    el.onkeydown = imce.eContentKeydown;
    el.onscroll = imce.eContentScroll;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Content header
    el = imce.contentHeaderEl = imce.createEl('<div class="imce-content-header"><div class="imce-item"><div class="imce-item-date" data-sort="date">' + Drupal.t('Date') + '</div><div class="imce-item-height" data-sort="height">' + Drupal.t('Height') + '</div><div class="imce-item-width" data-sort="width">' + Drupal.t('Width') + '</div><div class="imce-item-size" data-sort="size">' + Drupal.t('Size') + '</div><div class="imce-item-icon imce-ficon" data-sort="ext"></div><div class="imce-item-name" data-sort="name">' + Drupal.t('Name') + '</div></div></div>');
    el.onclick = imce.eContentHeaderClick;
    imce.contentEl.appendChild(el);
    // Content status
    el = imce.contentStatusEl = imce.createEl('<div class="imce-content-status"></div>');
    imce.contentEl.appendChild(el);
    // Body resizer
    el = imce.bodyResizerEl = createEl('<div id="imce-body-resizer"></div>');
    el.onmousedown = imce.eBodyResizerMousedown;
    el.ontouchstart = imce.eBodyResizerTouchstart;
    imce.fmEl.appendChild(el);
    // Preview
    imce.fmEl.appendChild(imce.previewEl = createEl('<div id="imce-preview"></div>'));
    return el;
  };

  /**
   * Init folder tree.
   */
  imce.initTree = function () {
    var path;
    var folders = imce.getConf('folders');
    // Create root
    var scheme = imce.getConf('scheme');
    var root = new imce.Folder(scheme ? scheme + '://' : '<' + Drupal.t('root') + '>');
    root.setPath('.');
    root.branchEl.className += ' root';
    imce.treeEl.appendChild(root.branchEl);
    // Create predefined folders in alphabetical order.
    var paths = [];
    for (path in folders) {
      if (imce.owns(folders, path)) {
        paths.push(path);
      }
    }
    paths.sort();
    for (var i = 0; path = paths[i]; i++) {
      imce.addFolder(path, folders[path]);
    }
  };

  /**
   * Returns a folder by path.
   */
  imce.getFolder = function (path) {
    if (imce.owns(imce.tree, path)) {
      return imce.tree[path];
    }
  };

  /**
   * Returns an item by path.
   */
  imce.getItem = function (path) {
    var Folder;
    var parts = imce.splitPath(path);
    if (parts) {
      if (Folder = imce.getFolder(parts[0])) {
        return Folder.getItem(parts[1]);
      }
    }
  };

  /**
   * Adds a folder to the tree.
   */
  imce.addFolder = function (path, conf) {
    var parts;
    var parent;
    var Folder = imce.getFolder(path);
    // Existing
    if (Folder) {
      if (conf) {
        Folder.setConf(conf);
      }
      return Folder;
    }
    // New. Append to the parent.
    if (parts = imce.splitPath(path)) {
      if (parent = imce.addFolder(parts[0])) {
        Folder = new imce.Folder(parts[1], conf);
        parent.appendItem(Folder);
        return Folder;
      }
    }
  };

  /**
   * Add a toolbar button.
   */
  imce.addTbb = function (id, opt) {
    return imce.getTbb(id) || new imce.Tbb(id, opt);
  };

  /**
   * Returns a toolbar button.
   */
  imce.getTbb = function (id) {
    return imce.toolbarButtons[id];
  };

  /**
   * Returns a configuration option.
   */
  imce.getConf = function (name, defaultValue) {
    var value;
    var conf = imce.conf;
    if (!name) {
      return conf;
    }
    value = conf[name];
    return value == null ? defaultValue : value;
  };


  /**
   * Returns a copy of selected items.
   */
  imce.getSelection = function () {
    return imce.selection.slice(0);
  };

  /**
   * Counts selected items.
   */
  imce.countSelection = function () {
    return this.selection.length;
  };

  /**
   * Returns the selected items grouped by parent folder and type.
   */
  imce.groupSelection = function () {
    return imce.groupItems(imce.selection);
  };

  /**
   * Select all items in the active folder.
   */
  imce.selectAll = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      Folder.selectAll();
    }
  };

  /**
   * Deselects all items.
   */
  imce.deselectAll = function () {
    var i;
    var arr = imce.getSelection();
    for (i in arr) {
      if (imce.owns(arr, i)) {
        arr[i].deselect();
      }
    }
  };

  /**
   * Returns last selected item.
   */
  imce.getLastSelected = function () {
    var arr = imce.selection;
    var len = arr.length;
    if (len) {
      return arr[len - 1];
    }
  };

  /**
   * Adds an item to the selection.
   */
  imce.selectItem = function (Item) {
    if (!Item.selected) {
      var arr = imce.selection;
      var oldlen = arr.length;
      arr.push(Item);
      Item.setState('selected');
      if (oldlen < 2) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Removes an item from the selection.
   */
  imce.deselectItem = function (Item) {
    if (Item.selected) {
      var arr = imce.selection;
      var i = $.inArray(Item, arr);
      Item.unsetState('selected');
      if (i !== -1) {
        arr.splice(i, 1);
        if (arr.length < 2) {
          imce.updatePreview();
        }
      }
    }
  };

  /**
   * Loads item uuids by ajax.
   */
  imce.loadItemUuids = function (items, callback) {
    var i;
    var Item;
    var missing = [];
    var loaded = [];
    for (i in items) {
      Item = items[i];
      if (Item && Item.isFile) {
        if (Item.uuid) {
          loaded.push(Item);
        }
        else {
          missing.push(Item);
        }
      }
    }
    // All loaded
    if (!missing.length) {
      if (callback) {
        callback(loaded);
      }
      return loaded;
    }
    // Load missing uuids
    return imce.ajaxItems('uuid', missing, {
      customComplete: function(xhr, status) {
        var path;
        var Item;
        var response = this.response;
        if (response && response.uuids) {
          for (path in response.uuids) {
            if (Item = imce.getItem(path)) {
              Item.uuid = response.uuids[path];
              loaded.push(Item);
            }
          }
        }
        if (callback) {
          callback(loaded);
        }
      }
    });
  };

  /**
   * Generate link/image html for the given items.
   */
   imce.itemsHtml = function (items, type, innerHtml, separator) {
    const lines = [];
    const isImg = type === 'image';
    for (const File of items) {
      // Image.
      if (isImg && File.isImageSource()) {
        lines.push(
          '<img src="' +
            File.getUrl() +
            '"' +
            (File.width ? ' width="' + File.width + '"' : '') +
            (File.height ? ' height="' + File.height + '"' : '') +
            ' data-entity-type="file" data-entity-uuid="' +
            (File.uuid || '') +
            '" alt="" />'
        );
      }
      // Link.
      else {
        // Use the innerHtml for the first link.
        const text = (!lines.length && innerHtml) || File.formatName();
        lines.push('<a href="' + File.getUrl() + '">' + text + '</a>');
      }
    }
    return lines.join(separator == null ? '<br />' : separator);
  };

  /**
   * Checks external application integration by URL parameters.
   *
   * Ex-1: http://example.com/imce?sendto=HANDLER
   * Creates a sendto operation that calls HANDLER(File, imceWin) of the parent window.
   * Ex-2: http://example.com/imce?urlField=FIELD-ID
   * Creates a sendto operation that fills the field in parent window with the selected file's URL.
   * Ex-3: http://example.com/imce?oninit=HANDLER
   * Calls HANDLER() with imce context when the UI is ready.
   */
  imce.checkIntegration = function () {
    var query = imce.getQuery();
    var handler;
    var urlField;
    var parentWin = window.opener || window.parent;
    if (imce.parentWin = parentWin) {
      // Check sendto handler
      if (handler = imce.resolveHandler(query.sendto, parentWin)) {
        imce.sendtoHandler = handler;
      }
      // Check url field
      else if (urlField = query.urlField) {
        if (urlField = parentWin.document.getElementById(urlField)) {
          imce.sendtoHandler = function (Item, win) {
            try {
              imce.parentWin.focus();
              (imce.parentWin.jQuery||$)(urlField).val(Item.getUrl()).trigger('blur').trigger('change').trigger('focus');
            }
            catch (err) {
              imce.delayError(err);
            }
            win.close();
          };
        }
      }
      // Check init handler
      if (handler = imce.resolveHandler(query.oninit, parentWin)) {
        imce.bind('init', handler);
      }
      // Store sendto type
      if (imce.sendtoHandler && query.type) {
        imce.sendtoType = query.type;
      }
    }
  };

  /**
   * Creates the sendto toolbar button.
   */
  imce.createSendtoTbb = function (title, desc) {
    if (imce.sendtoHandler && !imce.getTbb('sendto')) {
      return imce.addTbb('sendto', {
        title: title || Drupal.t('Select'),
        tooltip: desc || Drupal.t('Use the selected file.'),
        handler: function () {
          imce.runSendtoHandler();
        },
        icon: 'check'
      });
    }
  };

  /**
   * Runs custom sendto handler on the first selected item.
   */
  imce.runSendtoHandler = function (items) {
    var handler = imce.sendtoHandler;
    if (handler) {
      var Item;
      var imgType = imce.sendtoType === 'image';
      items = items || imce.getSelection();
      for (var i in items) {
        if (imce.owns(items, i)) {
          Item = items[i];
          if (imgType ? Item.isImageSource() : Item.isFile) {
            return handler(Item, window);
          }
        }
      }
    }
  };

  /**
   * Default handler for activateFolder event.
   */
  imce.defaultActivateFolder = function (Folder, oldFolder) {
    // Enable/disable toolbar buttons by permission.
    var i;
    var j;
    var Tbb;
    var perm;
    var disabled;
    var buttons = imce.toolbarButtons;
    for (i in buttons) {
      if (!imce.owns(buttons, i)) {
        continue;
      }
      Tbb = buttons[i];
      if (perm = Tbb.permission) {
        perm = perm.split('|');
        disabled = true;
        for (j in perm) {
          if (Folder.getPermission(perm[j])) {
            disabled = false;
            break;
          }
        }
        Tbb.setDisabled(disabled);
      }
    }
  };


  /**
   * Updates the active sort state in the content header.
   */
  imce.updateHeader = function () {
    var newsort = imce.activeFolder.activeSort;
    var oldsort = imce.activeSort || {};
    var el = imce.contentHeaderEl;
    // Check if the sort has changed.
    if (newsort && (newsort.key !== oldsort.key || newsort.desc !== oldsort.desc)) {
      // Deactivate existing column
      if (oldsort.key) {
        $('[data-sort="' + oldsort.key + '"]', el).removeClass('sorted ' + (oldsort.desc ? 'desc' : 'asc'));
      }
      // Activate new column
      $('[data-sort="' + newsort.key + '"]', el).addClass('sorted ' + (newsort.desc ? 'desc' : 'asc'));
      // Store the values
      imce.activeSort = newsort;
    }
  };

  /**
   * Schedule preview updating.
   */
  imce.updatePreview = function () {
    clearTimeout(imce.previewTimer);
    imce.previewTimer = setTimeout(imce.doUpdatePreview, 100);
  };

  /**
   * Set preview of currently selected item.
   */
  imce.doUpdatePreview = function () {
    imce.previewItem(imce.countSelection() === 1 ? imce.getLastSelected() : null);
  };

  /**
   * Sets/clears item preview.
   */
  imce.previewItem = function (Item) {
    var currentItem = imce.previewingItem;
    if (imce.previewingItem = Item) {
      $(imce.previewEl).html(Item.createPreviewEl());
      imce.trigger('previewItem', Item);
    }
    else if (currentItem) {
      imce.previewEl.innerHTML = '';
    }
  };

  /**
   * Schedule status update.
   */
  imce.updateStatus = function () {
    clearTimeout(imce.statusTimer);
    imce.statusTimer = setTimeout(imce.doUpdateStatus, 100);
  };

  /**
   * Updates active folder status.
   */
  imce.doUpdateStatus = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      $(imce.contentStatusEl).html(Folder.formatStatus());
    }
  };


  /**
   * Returns name filtering regexp.
   */
  imce.getNameFilter = function () {
    var filters = imce.getConf('name_filters', []);
    // Dot files
    if (!imce.getConf('allow_dot_files')) {
      filters.push('^\\.|\\.$');
    }
    return filters.length ? new RegExp(filters.join('|')) : false;
  };

  /**
   * Groups an array of items by parent folder and type.
   */
  imce.groupItems = function (items) {
    var i;
    var Item;
    var path;
    var selected;
    var key;
    var names;
    var group = {};
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      path = Item.parent.getPath();
      selected = group[path] = imce.owns(group, path) ? group[path] : {};
      key = Item.isFolder ? 'subfolders' : 'files';
      names = selected[key] = selected[key] || {};
      names[Item.name] = Item;
    }
    return group;
  };

  /**
   * Checks parent folder permissions of the given items.
   */
  imce.validatePermissions = function (items, filePerm, subfolderPerm) {
    var path;
    var Folder;
    var selected;
    var groups = imce.groupItems(items);
    for (path in groups) {
      if (!imce.owns(groups, path)) {
        continue;
      }
      Folder = imce.getFolder(path);
      selected = groups[path];
      // Check file permission if the selection contains files
      if (selected.files && (filePerm == null || !Folder.getPermission(filePerm))) {
        return false;
      }
      // Check folder permission if the selection contains folders
      if (selected.subfolders && (subfolderPerm == null || !Folder.getPermission(subfolderPerm))) {
        return false;
      }
    }
    return true;
  };

  /**
   * Checks if items contain any predefined folder.
   */
  imce.validatePredefinedPath = function (items) {
    var i;
    var Item;
    var Folder;
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      if (Item.isFolder) {
        if (Folder = Item.hasPredefinedPath()) {
          imce.setMessage(Drupal.t('%path is a predefined path and can not be modified.', {'%path': Folder.getPath()}));
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Validates the number of items.
   */
  imce.validateCount = function (items) {
    if (!items.length) {
      imce.setMessage(Drupal.t('Please select a file.'));
      return false;
    }
    return true;
  };

  /**
   * Validates item extensions against an allowed list.
   */
  imce.validateExtensions = function (items, exts) {
    for (var i in items) {
      if (imce.owns(items, i) && !imce.validateExtension(items[i].ext, exts)) {
        return false;
      }
    }
    return true;
  };

  /**
   * Validates an extension against an allowed list.
   */
  imce.validateExtension = function (ext, exts) {
    if (!ext || $.inArray(ext.toLowerCase(), exts.toLowerCase().split(/[\s,]+/)) === -1) {
      imce.setMessage(Drupal.t('Only files with the following extensions are allowed: %files-allowed.', {'%files-allowed': exts}));
      return false;
    }
    return true;
  };

  /**
   * Validates a file name.
   */
  imce.validateFileName = function (name) {
    // Basic validation
    if (!name || name === '.' || name === '..' || !name.length || name.length > 240) {
      return false;
    }
    // Test name filters
    var regex = imce.getNameFilter();
    if (regex && regex.test(name)) {
      imce.setMessage(Drupal.t('%filename is not allowed.', {'%filename': name}));
      return false;
    }
    // Test chars forbidden in various operating systems.
    if (/^\s|\s$|[\/\\:\*\?\x22<>\|\x00-\x1F]/.test(name)) {
      imce.setMessage(Drupal.t('%filename contains invalid characters. Use only alphanumeric characters for better portability.', {'%filename': name}));
      return false;
    }
    return true;
  };

  /**
   * Validates min/max image dimensions.
   */
  imce.validateDimensions = function (items, width, height) {
    // Check min dimensions
    if (width < 1 || height < 1) {
      return false;
    }
    // Check max dimensions.
    var maxwidth = imce.getConf('maxwidth');
    var maxheight = imce.getConf('maxheight');
    if (maxwidth && width > maxwidth || maxheight && height > maxheight) {
      imce.setMessage(Drupal.t('Image dimensions must be smaller than %dimensions pixels.', {'%dimensions': maxwidth + 'x' + maxwidth}));
      return false;
    }
    return true;
  };

  /**
   * Checks if all the selected items are images.
   */
  imce.validateImageTypes = function (items) {
    var Item = imce.getFirstItem(items, 'width', false);
    if (Item) {
      imce.setMessage(Drupal.t('%name is not an image.', {'%name': Item.name}));
      return false;
    }
    return true;
  };


  /**
   * Keydown event for the file manager.
   */
  imce.eFmKeydown = function (event) {
    return imce.eFireShortcut.call(this, event);
  };

  /**
   * Refresh handler for the file manager.
   */
  imce.eFmRefresh = function () {
    imce.activeFolder.load();
  };

  /**
   * Mousedown event for folder tree.
   */
  imce.eTreeMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for folder tree.
   */
  imce.eTreeTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for folder tree.
   */
  imce.eTreeKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'tree');
  };

  /**
   * Tree shortcut: Enter.
   */
  imce.eTreeEnter = function () {
    imce.activeFolder.open();
  };

  /**
   * Tree shortcut: UP.
   */
  imce.eTreeUp = function (e) {
    var Folder = imce.activeFolder;
    var prvEl;
    var prvFolder;
    if (prvEl = Folder.branchEl.previousSibling) {
      if (prvFolder = prvEl.Folder) {
        while (prvFolder.expanded) {
          if (prvEl = prvFolder.subtreeEl.lastChild) {
            prvFolder = prvEl.Folder;
          }
        }
      }
    }
    else {
      prvFolder = Folder.parent;
    }
    if (prvFolder) {
      prvFolder.activate();
      imce.scrollToEl(prvFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: DOWN.
   */
  imce.eTreeDown = function (e) {
    var Folder = imce.activeFolder;
    var nextEl;
    var nextFolder;
    if (Folder.expanded && (nextEl = Folder.subtreeEl.firstChild)) {
      nextFolder = nextEl.Folder;
    }
    else {
      // noinspection Eslint
      do {
        if (nextEl = Folder.branchEl.nextSibling) {
          nextFolder = nextEl.Folder;
          break;
        }
      } while (Folder = Folder.parent);
    }
    if (nextFolder) {
      nextFolder.activate();
      imce.scrollToEl(nextFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: LEFT/RIGHT.
   */
  imce.eTreeLR = function (e) {
    var Folder = imce.activeFolder;
    if (e.keyCode === 39 ^ Folder.expanded) {
      $(Folder.branchToggleEl).trigger('click');
    }
  };

  /**
   * Mousedown event for tree resizer.
   */
  imce.eTreeResizerMousedown = function (event) {
    return imce.eTreeResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for tree resizer.
   */
  imce.eTreeResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eTreeResizerDown, this);
  };

  /**
   * Common Down event for tree resizer.
   */
  imce.eTreeResizerDown = function (e, isTouch) {
    this.startX = e.pageX;
    this.startW = $(imce.treeEl).width();
    this.maxW = this.startW + $(imce.contentEl).width();
    imce.bindDragDrop(imce.eTreeResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for tree resizer.
   */
  imce.eTreeResizerDrag = function (e) {
    var el = imce.treeResizerEl;
    $(imce.treeEl).width(Math.min(el.maxW, Math.max(el.startW + e.pageX - el.startX, 0)));
    e.preventDefault();
  };

  /**
   * Mousedown event for content area.
   */
  imce.eContentMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for content area.
   */
  imce.eContentTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for content area.
   */
  imce.eContentKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'content');
  };

  /**
   * Scroll event for content area.
   */
  imce.eContentScroll = function (event) {
    imce.updateContentPositions();
    setTimeout(imce.updateContentPositions);
  };

  /**
   * Click event for content header.
   */
  imce.eContentHeaderClick = function (event) {
    var key;
    var e = imce.eFix(event);
    var Folder = imce.activeFolder;
    var sort = Folder.activeSort || {};
    if (key = e.target.getAttribute('data-sort')) {
      Folder.sortItems(key, key === sort.key ? !sort.desc : sort.desc);
    }
  };

  /**
   * Update content header position on content scroll.
   */
  imce.updateContentPositions = function () {
    var top = imce.contentEl.scrollTop;
    imce.contentHeaderEl.style.top = top + 'px';
    imce.contentStatusEl.style.bottom = -top + 'px';
  };

  /**
   * Content shortcut: ENTER.
   */
  imce.eContentEnter = function (e) {
    var Item = imce.getLastSelected();
    if (Item) {
      Item.dblClick();
    }
  };

  /**
   * Content shortcut: Ctrl+A.
   */
  imce.eContentCtrlA = function (e) {
    imce.selectAll();
  };

  /**
   * Content shortcut: LEFT/RIGHT/UP/DOWN
   */
  imce.eContentArrow = function (e) {
    var Item;
    var i = 0;
    var Folder = imce.activeFolder;
    var key = e.keyCode;
    if (Item = imce.getLastSelected()) {
      i = Folder.indexOf(Item) + (key % 2 ? key - 38 : imce.countElPerRow(Item.el) * (key - 39));
    }
    if (Item = Folder.getItemAt(i)) {
      Item.click(e);
      Item.scrollIntoView();
    }
  };

  /**
   * Mousedown event for body resizer.
   */
  imce.eBodyResizerMousedown = function (event) {
    return imce.eBodyResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for body resizer.
   */
  imce.eBodyResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eBodyResizerDown, this);
  };

  /**
   * Common Down event for body resizer.
   */
  imce.eBodyResizerDown = function (e, isTouch) {
    this.startY = e.pageY;
    this.startH = $(imce.bodyEl).height();
    this.maxH = this.startH + $(imce.previewEl).height();
    imce.bindDragDrop(imce.eBodyResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for body resizer.
   */
  imce.eBodyResizerDrag = function (e) {
    var el = imce.bodyResizerEl;
    var bodyH = Math.min(Math.max(el.startH + e.pageY - el.startY, 0), el.maxH);
    $(imce.bodyEl).height(bodyH);
    $(imce.previewEl).height(el.maxH - bodyH);
    e.preventDefault();
  };

  /**
   * Beforeunload event for window.
   */
  imce.eWinBeforeunload = function (e) {
    // Store active sort.
    var data = {};
    if (data.activeSort = imce.activeSort) {
      imce.trigger('storeLocalData', data);
      try {
        localStorage.setItem('imce.local', JSON.stringify(data));
      }
      catch (err) {
        imce.delayError(err);
      }
    }
  };

  /**
   * Resize event for window.
   */
  imce.eWinResize = function (e) {
    var pdiff;
    var diff = imce.getWindowSize().height - imce.fmEl.offsetHeight;
    // Distribute the excess space to the body and preview elements.
    if (diff) {
      var $bodyEl = $(imce.bodyEl);
      var $prvEl = $(imce.previewEl);
      if ($prvEl[0].offsetHeight) {
        pdiff = parseInt(diff / 2);
        diff -= pdiff;
        $prvEl.height($prvEl.height() + pdiff);
      }
      $bodyEl.height($bodyEl.height() + diff);
    }
  };


  /**
   * Binds an handler by type.
   */
  imce.bind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (!handlers) {
      handlers = events[type] = {};
    }
    handlers['' + handler] = handler;
  };

  /**
   * Unbinds an handler by type.
   */
  imce.unbind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (handlers) {
      if (1 in arguments) {
        delete handlers['' + handler];
      }
      else {
        delete events[type];
      }
    }
  };

  /**
   * Triggers handlers by type.
   */
  imce.trigger = function (type) {
    var i;
    var handler;
    var handlers = imce.events[type];
    var ret = [];
    if (handlers) {
      for (i in handlers) {
        if (handler = handlers[i]) {
          if (handler.apply) {
            ret.push(handler.apply(imce, Array.prototype.slice.call(arguments, 1)));
          }
        }
      }
    }
    return ret;
  };


  /**
   * Adds a shortcut handler to an area.
   */
  imce.addShortcut = function (shortcut, handler, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      shortcuts[shortcut.toUpperCase()] = handler;
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      return shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Removes a shortcut handler.
   */
  imce.removeShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      delete shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Executes a shortcut handler.
   * Returns true if shortcut exists and is executed successfully.
   */
  imce.fireShortcut = function (shortcut, area) {
    var handler = imce.getShortcut(shortcut, area);
    if (handler) {
      // DOM element
      if (handler.click) {
        handler.click();
        return true;
      }
      // Callback
      if (handler.apply) {
        // Shortcuts returning false are considered disabled.
        return handler.apply(this, Array.prototype.slice.call(arguments, 2)) !== false;
      }
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getAreaShortcuts = function (area) {
    if (!area) {
      area = 'fm';
    }
    return imce.shortcuts[area];
  };


  /**
   * Builds a shortcut string from an event.
   */
  imce.eBuildShortcut = function (e) {
    var symbol;
    var key = e.keyCode;
    var shortcut = '';
    if (key && (symbol = imce.getKeySymbols(key))) {
      if (e.ctrlKey) {
        shortcut += 'CTRL+';
      }
      if (e.altKey) {
        shortcut += 'ALT+';
      }
      if (e.shiftKey) {
        shortcut += 'SHIFT+';
      }
      shortcut += symbol;
    }
    return shortcut;
  };

  /**
   * Event helper for imce shortcut firing.
   */
  imce.eFireShortcut = function (event, area) {
    var e = event || window.event;
    var shortcut = imce.eBuildShortcut(e);
    // Prevent default if shortcut is executed.
    if (shortcut) {
      e = $.event.fix(e);
      if (imce.fireShortcut.call(this, shortcut, area, e)) {
        e.stopPropagation();
        return false;
      }
    }
  };

  /**
   * Returns key symbols allowed in shortcuts.
   */
  imce.getKeySymbols = function (key) {
    var i;
    var symbols = imce.keySymbols;
    if (!symbols) {
      // Custom keys
      symbols = imce.keySymbols = {
        8: 'BACKSPACE',
        9: 'TAB',
        13: 'ENTER',
        27: 'ESC',
        32: 'SPACE',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        46: 'DEL'
      };
      // Add numbers
      for (i = 0; i < 10; i++) {
        symbols[48 + i] = '' + i;
      }
      // Add letters
      for (i = 65; i < 91; i++) {
        symbols[i] = String.fromCharCode(i);
      }
      // Add function keys
      for (i = 1; i < 13; i++) {
        symbols[111 + i] = 'F' + i;
      }
    }
    return (0 in arguments) ? symbols[key] : symbols;
  };


  /**
   * Creates an ajax request for a specific operation.
   */
  imce.ajax = function (jsop, opt) {
    return $.ajax(imce.ajaxPrepare(jsop, opt));
  };

  /**
   * Prepares ajax options.
   */
  imce.ajaxPrepare = function (jsop, opt) {
    // Prepare data
    var path;
    var Folder = opt && opt.activeFolder != null ? opt.activeFolder : imce.activeFolder;
    var data = {jsop: jsop, token: imce.getConf('token')};
    if (Folder) {
      if (path = Folder.getPath()) {
        data.active_path = path;
      }
    }
    // Extend defaults
    return $.extend(true, imce.ajaxDefaults(), {data: data, activeFolder: Folder}, opt);
  };

  /**
   * Returns ajax default options.
   */
  imce.ajaxDefaults = function () {
    return {
      url: imce.getConf('ajax_url'),
      type: 'POST',
      dataType: 'json',
      beforeSend: imce.ajaxBeforeSend,
      success: imce.ajaxSuccess,
      error: imce.ajaxError,
      complete: imce.ajaxComplete
    };
  };

  /**
   * Creates an ajax request for a specific operation on the given items.
   */
  imce.ajaxItems = function (jsop, items, opt) {
    return imce.ajax(jsop, $.extend(true, imce.ajaxItemsOpt(items), opt));
  };

  /**
   * Creates an ajax options object including the items as the selection data.
   */
  imce.ajaxItemsOpt = function (items) {
    return {data: {selection: imce.getItemPaths(items)}};
  };

  /**
   * Default before send handler.
   */
  imce.ajaxBeforeSend = function (xhr, opt) {
    var handler;
    var Folder;
    if (handler = opt.customBeforeSend) {
      if (handler.apply(this, arguments) === false) {
        opt.activeFolder = null;
        return false;
      }
    }
    if (Folder = opt.activeFolder) {
      Folder.setBusy(true);
    }
  };

  /**
   * Default ajax success handler.
   */
  imce.ajaxSuccess = function (response, status) {
    var handler;
    var opt = this;
    // Make the response available in complete handlers.
    opt.response = response;
    imce.ajaxProcessResponse(response);
    if (handler = opt.customSuccess) {
      handler.apply(opt, arguments);
    }
  };

  /**
   * Default ajax complete handler.
   */
  imce.ajaxComplete = function (xhr, status) {
    var Folder;
    var handler;
    var opt = this;
    if (Folder = opt.activeFolder) {
      Folder.setBusy(false);
    }
    if (handler = opt.customComplete) {
      handler.apply(opt, arguments);
    }
    opt.response = opt.activeFolder = null;
  };

  /**
   * Default ajax error handler.
   */
  imce.ajaxError = function (xhr, status, e) {
    if (status !== 'abort') {
      imce.setMessage('<pre class="imce-ajax-error">' + Drupal.checkPlain(imce.ajaxErrorMessage(xhr, this.url)) + '</pre>');
    }
  };

  /**
   * Processes the ajax response.
   */
  imce.ajaxProcessResponse = function (response) {
    if (response) {
      imce.ajaxProcessRemoved(response);
      imce.ajaxProcessAdded(response);
      imce.ajaxProcessMessages(response);
    }
  };

  /**
   * Processes the added items in the response.
   */
  imce.ajaxProcessAdded = function (response) {
    var path;
    var Folder;
    var added;
    if (added = response.added) {
      for (path in added) {
        if (Folder = imce.addFolder(path)) {
          Folder.addContent(added[path], true);
          imce.contentEl.focus();
        }
      }
    }
  };

  /**
   * Processes the removed items in the response.
   */
  imce.ajaxProcessRemoved = function (response) {
    var i;
    var Item;
    var paths = response.removed;
    if (paths) {
      for (i in paths) {
        if (Item = imce.getItem(paths[i])) {
          Item.remove();
        }
      }
    }
  };

  /**
   * Processes the messages in the response.
   */
  imce.ajaxProcessMessages = function (response) {
    var i;
    var type;
    var msgs = response.messages;
    if (msgs) {
      for (type in msgs) {
        if (imce.owns(msgs, type)) {
          for (i in msgs[type]) {
            if (msgs[type].hasOwnProperty(i)) {
              imce.setMessage(msgs[type][i], type);
            }
          }
        }
      }
    }
  };

  /**
   * Generates an ajax error message.
   */
  imce.ajaxErrorMessage = function (xhr, url) {
    var msg = Drupal.t('An AJAX HTTP error occurred.');
    msg += '\n' + Drupal.t('Path: !uri', {'!uri': url});
    msg += '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xhr.status || 0});
    msg += '\n' + Drupal.t('StatusText: !statusText', {'!statusText': xhr.statusText || 'N/A'});
    msg += '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': xhr.responseText || 'N/A'});
    return msg;
  };

  /**
   * Returns an array of item paths.
   */
  imce.getItemPaths = function (items) {
    return $.map(items, imce.getItemPath);
  };

  /**
   * Returns the path of an item.
   */
  imce.getItemPath = function (Item) {
    return Item.getPath();
  };


  /**
   * Set a status message.
   */
  imce.setMessage = function (msg, type) {
    if (!type) {
      type = 'error';
    }
    var mq = imce.messageQueue;
    var len = mq.length;
    var msgId = msg + ':' + type;
    // Skip if it's identical to the last message
    if (len && mq[len - 1].msgId === msgId) {
      return false;
    }
    // Add the message
    mq[len] = imce.createMessageEl(msg, type);
    mq[len].msgId = msgId;
    // Schedule the processing at a later time to queue new messages.
    if (!imce.pmqScheduled) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 100);
    }
    return false;
  };

  /**
   * Process message queue.
   */
  imce.processMessageQueue = function () {
    var mq = imce.messageQueue;
    if (mq.length) {
      // Display all messages
      $(imce.createMessagePopupEl()).html(mq).fadeIn(200);
      // Empty array.
      mq.length = 0;
      // Mousedown close
      $(document).on('mousedown', imce.eMPopDocMousedown);
      // Auto close
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2500);
    }
  };

  /**
   * Closes currently open message popup.
   */
  imce.mPopClose = function () {
    // Time up but still hovering. Do not close. A new timer will be set on mouseout.
    if (imce.mPopHovering) {
      imce.mPopCloseTimerUp = 1;
      return imce.mPopCloseTimerUp;
    }
    // Time up or mousedown
    clearTimeout(imce.mPopCloseTimer);
    imce.mPopCloseTimerUp = 0;
    $(document).off('mousedown', imce.eMPopDocMousedown);
    $(imce.messagePopupEl).fadeOut(400, imce.processMessageQueueNext);
  };

  /**
   * Continue processing the remaining messages.
   */
  imce.processMessageQueueNext = function () {
    imce.pmqScheduled = 0;
    if (imce.messageQueue.length) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 250);
    }
  };

  /**
   * Mouseover event for message popup.
   */
  imce.eMPopMouseenter = function (e) {
    imce.mPopHovering = 1;
    // Clear the shorter timer set on mouseleave
    if (imce.mPopCloseTimerUp) {
      clearTimeout(imce.mPopCloseTimer);
    }
  };

  /**
   * Mouseout event for message popup.
   */
  imce.eMPopMouseleave = function (e) {
    imce.mPopHovering = 0;
    // Set a shorter close timer if the long time is up
    if (imce.mPopCloseTimerUp) {
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2000);
    }
  };

  /**
   * Mousedown event for document in order to close message popup.
   */
  imce.eMPopDocMousedown = function (e) {
    // Close the popup if the mousedown is outside of it.
    if (!imce.mPopHovering) {
      imce.mPopClose();
    }
  };

  /**
   * Creates a message element.
   */
  imce.createMessageEl = function (msg, type) {
    var el = imce.createEl('<div class="imce-message imce-ficon"><div class="imce-message-content"></div></div>');
    el.className += ' ' + type;
    el.firstChild.innerHTML = msg;
    return el;
  };

  /**
   * Creates the message popup element.
   */
  imce.createMessagePopupEl = function () {
    var el = imce.messagePopupEl;
    if (!el) {
      el = imce.messagePopupEl = imce.createLayer('imce-message-popup', imce.fmEl);
      $(el).on('mouseenter', imce.eMPopMouseenter).on('mouseleave', imce.eMPopMouseleave);
    }
    return el;
  };


  /**
   * Checks a permission in a folder conf.
   */
  imce.permissionInFolderConf = function (permission, folderConf) {
    var permissions = folderConf && folderConf.permissions;
    return !!(permissions && ((permission in permissions) ? permissions[permission] : permissions.all));
  };

  /**
   * Checks if a permission exists in any of the predefined folders.
   */
  imce.hasPermission = function (permission, conf) {
    var i;
    var folders = (conf || imce.conf).folders;
    if (folders) {
      for (i in folders) {
        if (imce.permissionInFolderConf(permission, folders[i])) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Sorting helpers.
   */
  imce.sortText = function (a, b) {
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  };
  imce.sortNum = function (a, b) {
    return (a || 0) - (b || 0);
  };
  imce.sortNumericProperty = function (a, b, prop) {
    // Do not change sort within folders
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortNum(a[prop] || 0, b[prop] || 0);
    }
    return result;
  };
  imce.sortBranchName = function (a, b) {
    return imce.sortText(a.name, b.name);
  };

  /**
   * Property sorters.
   */
  imce.sorters.name = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortText(a.name, b.name);
    }
    return result;
  };
  imce.sorters.date = function (a, b) {
    return imce.sortNumericProperty(a, b, 'date');
  };
  imce.sorters.size = function (a, b) {
    return imce.sortNumericProperty(a, b, 'size');
  };
  imce.sorters.width = function (a, b) {
    return imce.sortNumericProperty(a, b, 'width');
  };
  imce.sorters.height = function (a, b) {
    return imce.sortNumericProperty(a, b, 'height');
  };
  imce.sorters.ext = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = (a.isFolder ? 0 : imce.sortText(a.ext || '', b.ext || ''));
    }
    return result;
  };

  /**
   * Splits a path into dirpath and filename.
   */
  imce.splitPath = function (path) {
    if (typeof path === 'string' && path !== '') {
      var parts = path.split('/');
      var filename = parts.pop();
      var dirpath = parts.join('/');
      if (filename !== '') {
        return [dirpath === '' ? '.' : dirpath, filename];
      }
    }
  };

  /**
   * Creates a file path by joining a folder path and a filename.
   */
  imce.joinPaths = function (dirpath, filename) {
    if (dirpath === '.') {
      return filename;
    }
    if (filename === '.') {
      return dirpath;
    }
    if (dirpath.substring(dirpath.length - 1) !== '/') {
      dirpath += '/';
    }
    return dirpath + filename;
  };

  /**
   * Returns query parameters from the current URL.
   */
  imce.getQuery = function (name) {
    var i;
    var part;
    var parts;
    var str;
    var query = imce.query;
    if (!query) {
      query = imce.query = {};
      if (str = location.search) {
        parts = str.substring(1).split('&');
        for (i in parts) {
          if (imce.owns(parts, i)) {
            part = parts[i].split('=');
            query[imce.decode(part[0])] = part[1] ? imce.decode(part[1]) : '';
          }
        }
      }
    }
    return name ? query[name] : query;
  };

  /**
   * Wrapper around decodeURIComponent.
   * Avoids malformed uri exception.
   */
  imce.decode = function (str) {
    try {
      str = decodeURIComponent(str);
    }
    catch (err) {
      imce.delayError(err);
    }
    return str;
  };

  /**
   * Throws an error after a minimum delay.
   */
  imce.delayError = function (err) {
    setTimeout(function () {
      throw err;
    });
  };

  /**
   * Formats item date.
   */
  imce.formatDate = function (timestamp, dayOnly) {
    var D;
    var p0;
    var ret = '';
    if (timestamp) {
      D = new Date(timestamp * 1000);
      p0 = imce.prependZero;
      ret = D.getFullYear() + '-' + p0(D.getMonth() + 1) + '-' + p0(D.getDate());
      if (!dayOnly) {
        ret += ' ' + p0(D.getHours()) + ':' + p0(D.getMinutes());
      }
    }
    return ret;
  };

  /**
   * Formats item size.
   */
  imce.formatSize = function (size) {
    if (size == null) {
      return '';
    }
    if (!size || size < 100) {
      return Drupal.formatPlural(size, '1 byte', '@count bytes', {'@count': size || 0});
    }
    if (size < 1048576) {
      return Drupal.t('@size KB', {'@size': imce.round(size / 1024, 1)});
    }
    return Drupal.t('@size MB', {'@size': imce.round(size / 1048576, 1)});
  };

  /**
   * Formats content items status.
   */
  imce.formatItemsStatus = function (count, size) {
    return Drupal.t('!items (!size)', {
      '!items': Drupal.formatPlural(count, '1 item', '@count items'),
      '!size': imce.formatSize(size)
    });
  };

  /**
   * Prepends 0 to numbers smaller than 10.
   */
  imce.prependZero = function (num) {
    return num < 10 ? '0' + num : num;
  };

  /**
   * Rounds a number to the given precision
   */
  imce.round = function (num, precision) {
    var n = Math.pow(10, precision);
    return Math.round(num * n) / n;
  };

  /**
   * Returns the extension of a file name.
   */
  imce.getExt = function (name) {
    var pos = name.lastIndexOf('.');
    return pos === -1 ? '' : name.substring(pos + 1);
  };

  /**
   * Checks if an object owns a property.
   */
  imce.owns = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /**
   * Returns the first item that has a property.
   */
  imce.getFirstItem = function (items, prop, state) {
    var i;
    var item;
    if (typeof state === "undefined") {
      state = true;
    }
    for (i in items) {
      if (imce.owns(items, i)) {
        item = items[i];
        if (!prop || (item[prop] ? state : !state)) {
          return item;
        }
      }
    }
  };

  /**
   * Resolves a string to a handler under the given scope.
   */
  imce.resolveHandler = function (str, scope) {
    if (!str) {
      return;
    }
    var i;
    var obj = scope || window;
    var parts = str.split('.');
    var len = parts.length;
    for (i = 0; i < len && (obj = obj[parts[i]]); i++) {
      // empty
    }
    return i === len && obj && obj.call && obj.apply ? obj : false;
  };

  /**
   * Creates a DOM element from html string.
   */
  imce.createEl = function (html) {
    var el;
    var div = imce._div;
    if (!div) {
      div = imce._div = document.createElement('div');
    }
    div.innerHTML = html;
    el = div.firstChild;
    div.removeChild(el);
    return el;
  };

  /**
   * Creates a layer element.
   */
  imce.createLayer = function (cname, parent) {
    var layer = imce.createEl('<div class="imce-layer"></div>');
    if (cname) {
      layer.className += ' ' + cname;
    }
    if (parent !== false) {
      (parent || document.body).appendChild(layer);
    }
    return layer;
  };

  /**
   * Removes element without removing events.
   */
  imce.removeEl = function (el) {
    var parent = el.parentNode;
    if (parent) {
      parent.removeChild(el);
    }
  };

  /**
   * Returns window inner size.
   */
  imce.getWindowSize = function () {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  };

  /**
   * Returns scroll values of the window.
   */
  imce.getWindowScroll = function () {
    if (typeof window.pageXOffset === "undefined") {
      var el = document.documentElement;
      return {left: el.scrollLeft, top: el.scrollTop};
    }
    return {left: window.pageXOffset, top: window.pageYOffset};
  };

  /**
   * Fixes and converts an event into jQuery event.
   */
  imce.eFix = function (event) {
    return $.event.fix(event || window.event);
  };

  /**
   * Scroll an element into view inside the scrollable wrapper.
   */
  imce.scrollToEl = function (el, wrpEl, diffTop, diffBottom) {
    if (el.offsetWidth && wrpEl.scrollHeight > wrpEl.clientHeight) {
      var elTop = $(el).offset().top;
      var elBottom = elTop + el.offsetHeight;
      var wrpTop = $(wrpEl).offset().top;
      var wrpBottom = wrpTop + wrpEl.offsetHeight;
      wrpTop += diffTop || 0;
      wrpBottom -= diffBottom || 0;
      // Check top positions
      if (elTop < wrpTop) {
        wrpEl.scrollTop -= wrpTop - elTop + 10;
      }
      else if (wrpBottom < elBottom) {
        // Consider el height might be bigger than the wrapper height.
        // Get the minimum among top space and required scroll.
        wrpEl.scrollTop += Math.min(elBottom - wrpBottom + 10, elTop - wrpTop - 10);
      }
    }
  };

  /**
   * Returns number of the elements that can fit in a row inside the parent.
   */
  imce.countElPerRow = function (el) {
    return Math.max(1, parseInt(el.parentNode.clientWidth / $(el).outerWidth(true)));
  };

  /**
   * Makes the element stay inside window boundaries.
   */
  imce.fixPosition = function (el) {
    var pos = $(el).offset();
    var winSize = imce.getWindowSize();
    var winScroll = imce.getWindowScroll();
    var scrollbar = 18;
    var extraX = pos.left - winScroll.left + el.offsetWidth - winSize.width + scrollbar;
    var extraY = pos.top - winScroll.top + el.offsetHeight - winSize.height + scrollbar;
    // Shift to left
    if (extraX > 0) {
      el.style.left = Math.max(0, pos.left - extraX) + 'px';
    }
    // Shift to top
    if (extraY > 0) {
      el.style.top = Math.max(0, pos.top - extraY) + 'px';
    }
  };


  /**
   * Bind drag drop callbacks to the document
   */
  imce.bindDragDrop = function (drag, drop, data, isTouch) {
    var edata = {drag: drag, drop: drop, data: data, isTouch: isTouch};
    $(document).on(isTouch ? 'touchmove' : 'mousemove', edata, imce.eDocDrag).on(isTouch ? 'touchend' : 'mouseup', edata, imce.eDocDrop);
  };

  /**
   * Default drag event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrag = function (e) {
    var edata = e.data;
    // Call custom drag event if set.
    if (edata.drag) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drag.call(this, e);
    }
  };

  /**
   * Default drop event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrop = function (e) {
    var edata = e.data;
    $(document).off(edata.isTouch ? 'touchmove' : 'mousemove', imce.eDocDrag).off(edata.isTouch ? 'touchend' : 'mouseup', imce.eDocDrop);
    // Call custom drop event if set.
    if (edata.drop) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drop.call(this, e);
    }
  };

  /**
   * Fix touch events
   */
  imce.eTouchFix = function (e, touch) {
    // Make sure e is a jquery event object that is writable.
    e = $.event.fix(e);
    if (touch && typeof touch.pageX !== "undefined") {
      e.pageX = touch.pageX;
      e.pageY = touch.pageY;
      e.clientX = touch.clientX;
      e.clientY = touch.clientY;
    }
    return e;
  };

  /**
   * Common touchstart event.
   */
  imce.eCommonTouchstart = function (event, callback, context) {
    var touch;
    var touches = event.changedTouches;
    // Skip event for multi-touch
    if (touches && (touch = touches[0]) && !touches[1]) {
      if (callback && callback.call) {
        return callback.call(context || this, imce.eTouchFix(event, touch), true);
      }
      // Prevent default.
      return false;
    }
  };

})(jQuery, Drupal);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Item object.
   */

  /**
   * Imce Item.
   */
  imce.Item = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype.
   */
  var Item = imce.Item.prototype;

  /**
   * Constructs Imce Item.
   */
  Item.construct = function (name) {
    this.createEl();
    this.setName(name);
  };

  /**
   * Creates Item elements.
   */
  Item.createEl = function () {
    var el;
    var children;
    var Item = this;
    if (!Item.el) {
      el = Item.el = imce.createEl('<div class="imce-item"><div class="imce-item-date"></div><div class="imce-item-height"></div><div class="imce-item-width"></div><div class="imce-item-size"></div><div class="imce-item-icon imce-ficon"></div><div class="imce-item-name"></div></div>');
      el.onmousedown = imce.eItemMousedown;
      el.ondblclick = imce.eItemDblclick;
      el.Item = Item;
      children = el.children;
      Item.dateEl = children[0];
      Item.heightEl = children[1];
      Item.widthEl = children[2];
      Item.sizeEl = children[3];
      Item.iconEl = children[4];
      Item.nameEl = children[5];
    }
  };

  /**
   * Appends the item to a parent.
   */
  Item.appendTo = function (parent) {
    parent.appendItem(this);
  };

  /**
   * Removes the item.
   */
  Item.remove = function (shallow) {
    if (this.parent) {
      this.parent.removeItem(this, shallow);
    }
  };

  /**
   * Item click handler.
   */
  Item.click = function (e) {
    var Item = this;
    if (e) {
      // Range select
      if (e.shiftKey) {
        var Folder = imce.activeFolder;
        var lastItem = imce.getLastSelected();
        var start = lastItem ? Folder.indexOf(lastItem) : -1;
        var end = Folder.indexOf(Item);
        var step = start < end ? 1 : -1;
        while (start !== end) {
          Folder.getItemAt(start += step).select();
        }
        return;
      }
      // Toggle select
      if (e.ctrlKey) {
        return Item.toggleSelect();
      }
    }
    var i;
    var selection = imce.getSelection();
    for (i in selection) {
      if (imce.owns(selection, i) && selection[i] !== Item) {
        selection[i].deselect();
      }
    }
    Item.select();
  };

  /**
   * Double click handler.
   */
  Item.dblClick = function () {
    if (imce.sendtoHandler) {
      imce.runSendtoHandler([this]);
    }
    else {
      this.open();
    }
  };

  /**
   * Opens item.
   */
  Item.open = function () {
    var url = this.getUrl();
    if (url) {
      window.open(url);
    }
  };

  /**
   * Selects item.
   */
  Item.select = function () {
    imce.selectItem(this);
  };

  /**
   * Deselects item.
   */
  Item.deselect = function () {
    imce.deselectItem(this);
  };

  /**
   * Toggles select.
   */
  Item.toggleSelect = function () {
    if (this.selected) {
      this.deselect();
    }
    else {
      this.select();
    }
  };

  /**
   * Sets/unsets the item busy.
   */
  Item.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Sets/unsets the item disabled.
   */
  Item.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Checks if the item is ready for an operation.
   */
  Item.isReady = function () {
    return !this.disabled && !this.busy;
  };

  /**
   * Returns item path relative to the root.
   */
  Item.getPath = function () {
    var parent;
    var path = this.path;
    if (path) {
      return path;
    }
    if (parent = this.parent) {
      if (path = parent.getPath()) {
        return imce.joinPaths(path, this.name);
      }
    }
  };

  /**
   * Sets the item path.
   */
  Item.setPath = function (path) {
    this.path = path;
  };

  /**
   * Returns item uri.
   */
  Item.getUri = function () {
    var path = this.getPath();
    if (path) {
      return imce.joinPaths(imce.getConf('root_uri', '/'), path);
    }
  };

  /**
   * Returns item url.
   * Uncached parameter allows unique urls per size+date which is useful to display resized/cropped images
   */
  Item.getUrl = function (absolute, uncached) {
    // Allow urls set by plugins on server side.
    var url = this.url;
    if (!url) {
      var rootUrl = imce.getConf('root_url');
      if (rootUrl) {
        var path = encodeURIComponent(this.getPath()).replace(/%2F/g, '/');
        url = imce.joinPaths(rootUrl, path);
      }
    }
    if (url) {
      if (absolute && url.charAt(0) === '/' && url.charAt(1) !== '/') {
        url = location.protocol + '//' + location.host + url;
      }
      if (uncached) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + ('s' + this.size) + ('d' + this.date);
      }
    }
    return url || '';
  };

  /**
   * Formats item uri.
   */
  Item.formatUri = function () {
    return Drupal.checkPlain(this.getUri());
  };

  /**
   * Formats item path.
   */
  Item.formatPath = function () {
    return Drupal.checkPlain(this.path === '.' ? this.name : this.getPath());
  };

  /**
   * Formats item name.
   */
  Item.formatName = function () {
    return Drupal.checkPlain(this.name);
  };

  /**
   * Formats item size.
   */
  Item.formatSize = function () {
    return imce.formatSize(this.size);
  };

  /**
   * Formats item date.
   */
  Item.formatDate = function (dayOnly) {
    return imce.formatDate(this.date, dayOnly);
  };

  /**
   * Formats item width.
   */
  Item.formatWidth = function () {
    return this.width ? this.width * 1 + '' : '';
  };

  /**
   * Formats item height.
   */
  Item.formatHeight = function () {
    return this.height ? this.height * 1 + '' : '';
  };

  /**
   * Formats item dimensions.
   */
  Item.formatDimensions = function () {
    return this.width ? this.width * 1 + 'x' + this.height * 1 : '';
  };

  /**
   * Adds new item properties.
   * Fires property change events for changed properties.
   */
  Item.extend = function (props) {
    if (props) {
      for (var i in props) {
        if (!imce.owns(props, i)) {
          continue;
        }
        this.setProperty(i, props[i]);
      }
    }
  };

  /**
   * Sets property value and trigger change events.
   */
  Item.setProperty = function (prop, val) {
    var oldval = this[prop];
    if (oldval !== val) {
      this[prop] = val;
      this.triggerPropertyChange(prop, oldval);
    }
  };

  /**
   * Sets item name.
   */
  Item.setName = function (name) {
    this.setProperty('name', name);
  };

  /**
   * Triggers property change handlers.
   */
  Item.triggerPropertyChange = function (prop, oldval) {
    var method = 'on' + prop.charAt(0).toUpperCase() + prop.substring(1) + 'Change';
    if (this[method]) {
      this[method](oldval);
      if (this === imce.previewingItem) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Name change handler.
   */
  Item.onNameChange = function (oldname) {
    var Item = this;
    var name = Item.formatName();
    Item.nameEl.innerHTML = name;
    Item.nameEl.title = name;
    if (Item.parent) {
      Item.parent.onItemNameChange(Item, oldname);
    }
  };

  /**
   * Thumbnail change handler.
   */
  Item.onThumbnailChange = function (oldval) {
    if (this.thumbnail) {
      this.iconEl.innerHTML = '<img src="' + this.thumbnail + '" alt="thumbnail">';
      this.iconEl.className += ' imce-item-thumbnail';
    }
    else {
      this.iconEl.innerHTML = '';
      $(this.iconEl).removeClass('imce-item-thumbnail');
    }
  };

  /**
   * Size change handler.
   */
  Item.onSizeChange = function (oldval) {
    var size = this.formatSize();
    this.sizeEl.innerHTML = size;
    this.sizeEl.title = size;
  };

  /**
   * Date change handler.
   */
  Item.onDateChange = function (oldval) {
    var date = this.formatDate(true);
    this.dateEl.innerHTML = date;
    this.dateEl.title = date;
  };

  /**
   * Width change handler.
   */
  Item.onWidthChange = function (oldval) {
    var width = this.formatWidth();
    this.widthEl.innerHTML = width;
    this.widthEl.title = width;
  };

  /**
   * Height change handler.
   */
  Item.onHeightChange = function (oldval) {
    var height = this.formatHeight();
    this.heightEl.innerHTML = height;
    this.heightEl.title = height;
  };


  /**
   * Creates preview element.
   */
  Item.createPreviewEl = function () {
    var el;
    var Item = this;
    var prvEl = imce.createEl('<div class="imce-item-preview"></div>');
    // Info
    var infoEl = imce.createEl('<div class="imce-preview-info"></div>');
    prvEl.appendChild(infoEl);
    // Folder
    if (Item.isFolder) {
      infoEl.appendChild(imce.createEl('<div class="path">' + Item.formatUri() + '</div>'));
      prvEl.className += ' folder';
    }
    // File
    else {
      var url = Item.getUrl(true);
      infoEl.appendChild(imce.createEl('<div class="url"><a href="' + url + '" target="_blank">' + url + '</a></div>'));
    }
    // Size
    if (Item.size) {
      infoEl.appendChild(imce.createEl('<div class="size">' + Item.formatSize() + '</div>'));
    }
    // Dimensions
    if (Item.width) {
      infoEl.appendChild(imce.createEl('<div class="dimensions">' + Item.formatDimensions() + '</div>'));
    }
    // Date
    if (Item.date) {
      infoEl.appendChild(imce.createEl('<div class="date">' + Item.formatDate() + '</div>'));
    }
    // Image
    if (Item.isImageSource() && imce.getConf('preview_images', 1)) {
      el = imce.createEl('<div class="imce-preview-image"><img src="' + Item.getUrl(false, true) + '"></div>');
      prvEl.appendChild(el);
      prvEl.className += ' image';
      el.firstChild.onclick = imce.ePrvImgClick;
    }
    return prvEl;
  };

  /**
   * Sets a state by name.
   */
  Item.setState = function (name) {
    var el;
    var Item = this;
    if (!Item[name]) {
      Item[name] = true;
      $(Item.el).addClass(name);
      if (el = Item.branchEl) {
        $(el).addClass(name);
      }
    }
  };

  /**
   * Unsets a state by name.
   */
  Item.unsetState = function (name) {
    var el;
    var Item = this;
    if (Item[name]) {
      Item[name] = false;
      $(Item.el).removeClass(name);
      if (el = Item.branchEl) {
        $(el).removeClass(name);
      }
    }
  };

  /**
   * Toggles a state by name.
   */
  Item.toggleState = function (name, state) {
    if (state == null) {
      state = !this[name];
    }
    this[state ? 'setState' : 'unsetState'](name);
  };

  /**
   * Scroll the item element into view.
   */
  Item.scrollIntoView = function () {
    imce.scrollToEl(this.el, imce.contentEl, imce.contentHeaderEl.offsetHeight, imce.contentStatusEl.offsetHeight);
  };

  /**
   * Check if the item can be used as an image source.
   */
  Item.isImageSource = function() {
    return this.width || this.ext && this.ext.toLowerCase() === 'svg';
  };


  /**
   * Mousedown event for items.
   */
  imce.eItemMousedown = function (event) {
    var e = imce.eFix(event);
    this.Item.click(e);
    return !(e.ctrlKey || e.shiftKey);
  };

  /**
   * Double-click event for items.
   */
  imce.eItemDblclick = function (event) {
    this.Item.dblClick();
    return false;
  };

  /**
   * Click event for preview image.
   */
  imce.ePrvImgClick = function () {
    var Item = imce.previewingItem;
    if (Item) {
      Item.dblClick();
    }
    return false;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce File object.
   */

  /**
   * File.
   */
  imce.File = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * File prototype extends Item prototype.
   */
  var File = $.extend(imce.File.prototype, ItemProto);

  /**
   * Initialize the file object.
   */
  File.construct = function (name) {
    this.isFile = true;
    this.type = 'file';
    ItemProto.construct.apply(this, arguments);
  };

  /**
   * Initialize DOM elements.
   */
  File.createEl = function () {
    if (!this.el) {
      ItemProto.createEl.apply(this, arguments);
      this.el.className += ' file';
    }
  };

  /**
   * Name change handler.
   */
  File.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    // Get the new extension
    var File = this;
    var newext = imce.getExt(File.name);
    // Check if the extension has changed
    if (File.ext !== newext) {
      // Remove the classname of old ext
      if (File.ext != null) {
        if (File.ext) {
          $(File.el).removeClass('file-' + File.ext.toLowerCase());
        }
      }
      // Add the classname for new ext
      if (newext) {
        File.el.className += ' file-' + newext.toLowerCase();
      }
      File.ext = newext;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Folder object.
   */

  /**
   * Folder.
   */
  imce.Folder = function (name, conf) {
    this.construct(name, conf);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * Folder prototype extends Item prototype.
   */
  var Folder = $.extend(imce.Folder.prototype, ItemProto);

  /**
   * Constructs the Folder.
   */
  Folder.construct = function (name, conf) {
    var Folder = this;
    Folder.isFolder = true;
    Folder.type = 'folder';
    Folder.items = [];
    Folder.files = {};
    Folder.subfolders = {};
    ItemProto.construct.apply(Folder, arguments);
    Folder.setConf(conf);
  };

  /**
   * Creates folder elements.
   */
  Folder.createEl = function () {
    var nameEl;
    var toggleEl;
    var branchEl;
    var Folder = this;
    if (!Folder.el) {
      // Item elements.
      ItemProto.createEl.apply(Folder, arguments);
      Folder.el.className += ' folder';
      // Folder elements
      Folder.contentEl = imce.createEl('<div class="imce-folder-content clearfix"></div>');
      Folder.subtreeEl = imce.createEl('<div class="imce-subtree"></div>');
      branchEl = Folder.branchEl = imce.createEl('<div class="imce-branch"><span class="imce-branch-toggle"></span><span class="imce-branch-name imce-ficon"></span></div>');
      toggleEl = Folder.branchToggleEl = branchEl.firstChild;
      toggleEl.onclick = imce.eBranchToggleClick;
      nameEl = Folder.branchNameEl = branchEl.children[1];
      nameEl.onclick = imce.eBranchNameClick;
      branchEl.Folder = nameEl.Folder = toggleEl.Folder = Folder;
    }
  };

  /**
   * Sets the folder content.
   */
  Folder.setContent = function (content) {
    var i;
    var Item;
    var list;
    var Folder = this;
    var items = Folder.getItems();
    // Remove the items that no longer exist.
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      list = Item.isFolder ? content.subfolders : content.files;
      // Existing item is not in the list
      if (!list || !imce.owns(list, Item.name)) {
        // Make sure it's not (parent of) a predefined folder
        if (!Item.isFolder || !Item.hasPredefinedPath()) {
          Folder.removeItem(Item);
        }
      }
    }
    Folder.extend(content.props);
    Folder.addContent(content);
    Folder.content = content;
    Folder.updateSubtree();
  };

  /**
   * Adds new files and subfolders.
   */
  Folder.addContent = function (content, selectNew) {
    var Folder = this;
    var files = content.files;
    var subfolders = content.subfolders;
    if (!files && !subfolders) {
      return;
    }
    // Add items
    Folder.addItems(files, 'file');
    Folder.addItems(subfolders, 'folder');
    // Update sort
    if (Folder.active) {
      Folder.sortItems();
    }
    else {
      Folder.needSort = 1;
    }
    Folder.sortTree();
    // Select new items.
    if (selectNew && Folder.active) {
      var name;
      var fname;
      var sname;
      imce.deselectAll();
      if (files) {
        for (fname in files) {
          if (!imce.owns(files, fname)) {
            continue;
          }
          Folder.getItem(fname).select();
        }
      }
      if (subfolders) {
        for (sname in subfolders) {
          if (!imce.owns(subfolders, sname)) {
            continue;
          }
          Folder.getItem(sname).select();
        }
      }
      // Scroll the last item into view
      if (name = (fname || sname)) {
        Folder.getItem(name).scrollIntoView();
      }
    }
  };

  /**
   * Add a list of items of a specific type.
   */
  Folder.addItems = function (items, type) {
    var Item;
    var name;
    var Type = type === 'folder' ? imce.Folder : imce.File;
    if (items) {
      for (name in items) {
        // Update
        if (Item = this.getItem(name)) {
          Item.extend(items[name]);
          this.updateStatus();
        }
        // Insert
        else {
          Item = new Type(name);
          Item.extend(items[name]);
          this.appendItem(Item);
        }
      }
    }
  };

  /**
   * Returns a copy of items array.
   */
  Folder.getItems = function () {
    return this.items.slice(0);
  };

  /**
   * Append an item to the folder.
   */
  Folder.appendItem = function (Item) {
    var Folder = this;
    var name = Item.name;
    var existing;
    if (!Folder.validateAppend(Item)) {
      return;
    }
    // Remove the item from old parent
    Item.remove(true);
    // Remove existing item with the same name
    if (existing = Folder.getItem(name)) {
      existing.remove();
    }
    // Append item.
    Folder.items.push(Item);
    Item.parent = Folder;
    Folder.contentEl.appendChild(Item.el);
    // Append subfolder
    if (Item.isFolder) {
      Folder.prepareSubtree();
      Folder.subtreeEl.appendChild(Item.branchEl);
      Folder.subfolders[name] = Item;
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + Item.name);
    }
    // Append file
    else {
      Folder.files[name] = Item;
    }
    // Update status.
    Folder.updateStatus();
  };

  /**
   * Remove an item from the folder.
   */
  Folder.removeItem = function (Item, shallow) {
    var name = Item.name;
    var Folder = this;
    // Check if the item is a child
    if (Item.parent !== Folder) {
      return;
    }
    // Deep removal
    if (!shallow) {
      // Remove all descendants of the subfolder.
      if (Item.isFolder) {
        for (var i in Item.items) {
          if (!imce.owns(Item.items, i)) {
            continue;
          }
          Item.removeItem(Item.items[i]);
        }
      }
    }
    // Set item free.
    Item.deselect();
    Item.setBusy(false);
    // Remove subfolder
    if (Item.isFolder) {
      if (Item.active) {
        Folder.activate();
      }
      Item.setPath(null);
      delete Folder.subfolders[name];
      imce.removeEl(Item.branchEl);
      Folder.updateSubtree();
    }
    // Remove file
    else {
      delete Folder.files[name];
    }
    // Remove item
    Folder.items.splice(Folder.indexOf(Item), 1);
    delete Item.parent;
    imce.removeEl(Item.el);
    Folder.updateStatus();
  };

  /**
   * Set folder path.
   * Register the folder to the tree.
   */
  Folder.setPath = function (newpath) {
    var i;
    var Folder = this;
    var oldpath = Folder.path;
    var subfolders = Folder.subfolders;
    if (oldpath !== newpath) {
      // Remove
      if (newpath == null) {
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(null);
        }
        delete imce.tree[oldpath];
        delete Folder.path;
      }
      // Add
      else {
        Folder.path = newpath;
        imce.tree[newpath] = Folder;
        Folder.setDisabled(!Folder.getConf());
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(newpath + '/' + subfolders[i].name);
        }
        Folder.updateStatus();
      }
    }
  };

  /**
   * Returns a permission value.
   */
  Folder.getPermission = function (name) {
    return imce.permissionInFolderConf(name, this.getConf());
  };

  /**
   * Returns folder configuration.
   */
  Folder.getConf = function () {
    var conf = this.conf;
    var parent;
    if (conf) {
      return conf;
    }
    if (parent = this.parent) {
      if (conf = parent.getConf()) {
        if (imce.permissionInFolderConf('browse_subfolders', conf)) {
          return $.extend({inherited: true}, conf);
        }
      }
    }
  };

  /**
   * Sets folder configuration.
   */
  Folder.setConf = function (conf) {
    if (this.conf !== conf) {
      this.conf = conf;
      this.setDisabled(!this.getConf());
    }
  };

  /**
   * Open folder.
   */
  Folder.open = function (refresh) {
    if (refresh || !this.content) {
      this.load();
    }
    this.activate();
  };

  /**
   * Dynamically load folder contents.
   */
  Folder.load = function () {
    if (this.isReady()) {
      this.setLoading(true);
      imce.ajax('browse', {
        activeFolder: this,
        customComplete: imce.xFolderLoadComplete
      });
    }
  };

  /**
   * Activate folder.
   */
  Folder.activate = function () {
    var Folder = this;
    var oldFolder = imce.activeFolder;
    var parent = Folder.parent;
    if (!Folder.active) {
      // Deactivate the old dir.
      if (oldFolder) {
        oldFolder.deactivate();
      }
      // Check sort
      if (Folder.needSort) {
        Folder.sortItems();
      }
      imce.activeFolder = Folder;
      Folder.active = true;
      $(Folder.branchEl).addClass('active');
      // Add the content to the dom if it is fully loaded.
      if (!Folder.loading) {
        Folder.addContentToDom();
      }
      Folder.setContentVisibility(true);
      // Expand parents if collapsed.
      while (parent) {
        parent.expand();
        parent = parent.parent;
      }
      // Update status and header
      Folder.updateHeader();
      Folder.updateStatus();
      // Trigger activateFolder handlers.
      imce.trigger('activateFolder', Folder, oldFolder);
    }
  };

  /**
   * Deactivate folder.
   */
  Folder.deactivate = function () {
    var Folder = this;
    if (Folder.active) {
      Folder.setContentVisibility(false);
      imce.deselectAll();
      imce.activeFolder = null;
      Folder.active = false;
      $(Folder.branchEl).removeClass('active');
    }
  };

  /**
   * Set loading state.
   */
  Folder.setLoading = function (state) {
    var Folder = this;
    if (state) {
      if (!Folder.loading) {
        Folder.setBusy(true);
        Folder.setState('loading');
        if (Folder.active) {
          imce.deselectAll();
        }
      }
    }
    else if (Folder.loading) {
      Folder.setBusy(false);
      Folder.unsetState('loading');
      if (Folder.active) {
        Folder.addContentToDom();
      }
    }
  };

  /**
   * Returns an item by name.
   */
  Folder.getItem = function (name) {
    var Folder = this;
    if (imce.owns(Folder.files, name)) {
      return Folder.files[name];
    }
    if (imce.owns(Folder.subfolders, name)) {
      return Folder.subfolders[name];
    }
  };

  /**
   * Returns an item by index.
   */
  Folder.getItemAt = function (i) {
    return this.items[i];
  };

  /**
   * Returns the index of an item.
   */
  Folder.indexOf = function (Item) {
    return $.inArray(Item, this.items);
  };

  /**
   * Selects all items.
   */
  Folder.selectAll = function () {
    for (var i in this.items) {
      if (!imce.owns(this.items, i)) {
        continue;
      }
      this.items[i].select();
    }
  };

  /**
   * Returns the number of items.
   */
  Folder.countItems = function () {
    return this.items.length;
  };

  /**
   * Returns the number of subfolders.
   */
  Folder.countSubfolders = function () {
    var i;
    var count = 0;
    for (i in this.subfolders) {
      if (!imce.owns(this.subfolders, i)) {
        continue;
      }
      count++;
    }
    return count;
  };

  /**
   * Name change handler.
   */
  Folder.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    this.branchNameEl.innerHTML = Drupal.checkPlain(this.name);
    this.branchNameEl.title = this.name;
  };

  /**
   * Item name change handler.
   * Triggered by imce.Item.onNameChange()
   */
  Folder.onItemNameChange = function (Item, oldname) {
    var Folder = this;
    var name = Item.name;
    var group = Item.isFolder ? Folder.subfolders : Folder.files;
    delete group[oldname];
    group[name] = Item;
    // Set folder path
    if (Item.isFolder) {
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + name);
    }
  };

  /**
   * Double-click handler.
   */
  Folder.dblClick = function () {
    this.open();
  };

  /**
   * Inserts the content element into the main content area.
   */
  Folder.addContentToDom = function () {
    var el = this.contentEl;
    var parentEl = imce.contentEl;
    if (el.parentNode !== parentEl) {
      parentEl.appendChild(el);
    }
  };

  /**
   * Sets visibility of the content element.
   */
  Folder.setContentVisibility = function (show) {
    var el = this.contentEl;
    el.style.display = show ? '' : 'none';
    if (el.scrollTop) {
      el.scrollTop = 0;
    }
  };

  /**
   * Prepares for subfolder appending.
   */
  Folder.prepareSubtree = function () {
    var Folder = this;
    if (Folder.subtreeEl.parentNode !== Folder.branchEl) {
      Folder.branchEl.appendChild(Folder.subtreeEl);
      $(Folder.branchEl).removeClass('leaf');
      // Prevent expanding of inactive dirs except the first activated dir on init
      if (!Folder.active && imce.activeFolder) {
        Folder.expanded = true;
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
  };

  /**
   * Check and remove subtree element if it's empty.
   */
  Folder.updateSubtree = function () {
    if (!this.countSubfolders()) {
      this.shrink();
      imce.removeEl(this.subtreeEl);
      $(this.branchEl).addClass('leaf');
    }
  };

  /**
   * Expands the subtree.
   */
  Folder.expand = function () {
    if (!this.expanded) {
      this.expanded = true;
      $(this.branchEl).addClass('expanded');
      $(this.subtreeEl).show();
    }
  };

  /**
   * Shrinks the subtree.
   */
  Folder.shrink = function () {
    if (this.expanded) {
      this.expanded = false;
      $(this.branchEl).removeClass('expanded');
      $(this.subtreeEl).hide();
    }
  };

  /**
   * Update folder status.
   */
  Folder.updateStatus = function () {
    if (this.active) {
      imce.updateStatus();
    }
  };

  /**
   * Update header sort.
   */
  Folder.updateHeader = function () {
    if (this.active) {
      imce.updateHeader();
    }
  };

  /**
   * Sort folder items by an item property.
   */
  Folder.sortItems = function (key, desc) {
    var i;
    var sorter;
    var Folder = this;
    var items = Folder.items;
    var active = Folder.activeSort || imce.activeSort || imce.local.activeSort || {};
    if (key == null) {
      key = active.key || 'name';
    }
    if (desc == null) {
      desc = !!active.desc;
    }
    // Remove lazy sort flag.
    Folder.needSort = 0;
    // Check sorter
    if (sorter = imce.sorters[key]) {
      items.sort(sorter);
      if (desc) {
        items.reverse();
      }
      for (i in items) {
        if (!imce.owns(items, i)) {
          continue;
        }
        this.contentEl.appendChild(items[i].el);
      }
      Folder.activeSort = {key: key, desc: desc};
      Folder.updateHeader();
    }
  };

  /**
   * Sorts folder tree elements by name.
   */
  Folder.sortTree = function () {
    var i;
    var Folder = this;
    var subfolders = Folder.subfolders;
    var arr = [];
    for (i in subfolders) {
      if (!imce.owns(subfolders, i)) {
        continue;
      }
      arr.push(subfolders[i]);
    }
    if (arr.length > 1) {
      arr.sort(imce.sortBranchName);
      for (i in arr) {
        if (!imce.owns(arr, i)) {
          continue;
        }
        Folder.subtreeEl.appendChild(arr[i].branchEl);
      }
    }
  };

  /**
   * Check if the item can be appended to the folder.
   */
  Folder.validateAppend = function (Item, copy) {
    // Disallow self appending
    if (Item === this) {
      return false;
    }
    var parent = Item.parent;
    // Allow orphan appending
    if (!parent) {
      return true;
    }
    // Disallow re-appending children
    if (!copy && parent === this) {
      return false;
    }
    // Disallow (grand)parents appending
    if (Item.isFolder) {
      for (parent = this.parent; parent; parent = parent.parent) {
        if (parent === Item) {
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Checks if the folder is predefined.
   */
  Folder.isPredefined = function () {
    return !!this.conf;
  };

  /**
   * Returns the first predefined descendent including itself.
   */
  Folder.hasPredefinedPath = function () {
    if (this.isPredefined()) {
      return this;
    }
    var i;
    var Folder;
    var subfolders = this.subfolders;
    for (i in subfolders) {
      if (Folder = subfolders[i].hasPredefinedPath()) {
        return Folder;
      }
    }
    return false;
  };

  /**
   * Returns status text.
   */
  Folder.formatStatus = function () {
    return '<div class="items">' + imce.formatItemsStatus(this.countItems(), this.getSize()) + '</div>';
  };

  /**
   * Returns the size of the folder.
   */
  Folder.getSize = function () {
    var i;
    var size = 0;
    var files = this.files;
    for (i in files) {
      if (!imce.owns(files, i)) {
        continue;
      }
      size += files[i].size || 0;
    }
    return size;
  };


  /**
   * Click event for branch name.
   */
  imce.eBranchNameClick = function (event) {
    this.Folder.open();
    return false;
  };


  /**
   * Click event for branch toggle.
   */
  imce.eBranchToggleClick = function (event) {
    var Folder = this.Folder;
    if (Folder.countSubfolders()) {
      if (Folder.expanded) {
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
    else {
      Folder.open();
    }
    return false;
  };

  /**
   * Ajax complete handler for folder loading.
   */
  imce.xFolderLoadComplete = function (xhr, status) {
    var content;
    var opt = this;
    var Folder = opt.activeFolder;
    var response = opt.response;
    if (response && (content = response.content)) {
      Folder.setContent(content);
    }
    Folder.setLoading(false);
    if (Folder.countSubfolders()) {
      Folder.expand();
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Toolbar Button object.
   */

  /**
   * Toolbar button constructor.
   */
  imce.Tbb = function (id, opt) {
    this.construct(id, opt);
  };

  /**
   * Toolbar button prototype.
   */
  var Tbb = imce.Tbb.prototype;

  /**
   * Constructs button object.
   */
  Tbb.construct = function (id, opt) {
    var Tbb = imce.toolbarButtons[id] = this;
    Tbb.id = id;
    $.extend(Tbb, opt);
    // Append or prepend the element.
    var el = Tbb.createEl();
    var parent = imce.toolbarEl;
    if (Tbb.prepend && parent.firstChild) {
      parent.insertBefore(el, parent.firstChild);
    }
    else {
      parent.appendChild(el);
    }
    // Add shortcut
    if (Tbb.shortcut) {
      imce.addShortcut(Tbb.shortcut, el);
    }
  };

  /**
   * Creates toolbar button element.
   */
  Tbb.createEl = function () {
    var Tbb = this;
    var el = Tbb.el;
    var icon;
    if (!el) {
      el = Tbb.el = imce.createEl('<span class="imce-tbb imce-ficon" role="button"><span class="imce-tbb-title"></span></span>');
      if (icon = Tbb.icon) {
        el.className += ' imce-ficon-' + icon;
      }
      el.className += ' imce-tbb--' + Tbb.id;
      el.title = (Tbb.tooltip || Tbb.title) + (Tbb.shortcut ? ' (' + Tbb.shortcut + ')' : '');
      el.onclick = imce.eTbbClick;
      el.Tbb = Tbb;
      el.firstChild.innerHTML = Tbb.title;
    }
    return el;
  };

  /**
   * Create item popup.
   */
  Tbb.createPopupEl = function () {
    var Tbb = this;
    var el = Tbb.popupEl;
    if (!el) {
      el = Tbb.popupEl = imce.createLayer('imce-tbb-popup');
      el.className += ' imce-tbb-popup--' + Tbb.id;
      el.onkeydown = imce.eTbbPopupKeydown;
      el.Tbb = Tbb;
      if (Tbb.content) {
        el.appendChild(Tbb.content);
      }
    }
    return el;
  };

  /**
   * Open item popup.
   */
  Tbb.openPopup = function (autoclose) {
    var Tbb = this;
    if (!Tbb.active) {
      Tbb.createPopupEl();
      Tbb.setActive(true);
      var popupEl = Tbb.popupEl;
      var $el = $(Tbb.el);
      var css = $el.offset();
      css.top += $el.outerHeight(true);
      $(popupEl).css(css).fadeIn();
      imce.fixPosition(popupEl);
      // Focus on first input
      $('form').find('input,select,textarea').filter(':visible').eq(0).trigger('focus');
      if (autoclose) {
        $(document).on('mousedown', {Tbb: Tbb}, imce.eTbbDocMousedown);
      }
      if (Tbb.onopen) {
        Tbb.onopen.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Close item popup.
   */
  Tbb.closePopup = function () {
    var Tbb = this;
    if (Tbb.popupEl && Tbb.active) {
      Tbb.setActive(false);
      $(Tbb.popupEl).hide();
      imce.contentEl.focus();
      if (Tbb.onclose) {
        Tbb.onclose.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Set active state of the item.
   */
  Tbb.setActive = function (state) {
    this.toggleState('active', !!state);
  };

  /**
   * Set busy state of the item.
   */
  Tbb.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Set disabled state of the item.
   */
  Tbb.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Set/unset a state by name.
   */
  Tbb.toggleState = function (name, state) {
    var Tbb = this;
    var oldState = Tbb[name];
    if (state == null) {
      state = !oldState;
    }
    if (state) {
      if (!oldState) {
        Tbb[name] = true;
        $(Tbb.el).addClass(name);
      }
    }
    else if (oldState) {
      Tbb[name] = false;
      $(Tbb.el).removeClass(name);
    }
  };

  /**
   * Trigger click handler of the button.
   */
  Tbb.click = function (event) {
    var Tbb = this;
    if (!Tbb.disabled) {
      if (Tbb.handler && !Tbb.busy) {
        Tbb.handler.call(Tbb, imce.eFix(event));
      }
      if (Tbb.content) {
        Tbb.openPopup(true);
      }
    }
  };


  /**
   * Click event for toolbar buttons.
   */
  imce.eTbbClick = function (event) {
    this.Tbb.click(event);
  };

  /**
   * Mousedown event for document in order to close toolbar button popup.
   */
  imce.eTbbDocMousedown = function (e) {
    var Tbb = e.data.Tbb;
    var el = Tbb.popupEl;
    if (el !== e.target && !$.contains(el, e.target)) {
      Tbb.closePopup();
      $(document).off('mousedown', imce.eTbbDocMousedown);
    }
  };

  /**
   * Keydown event for toolbar button popup.
   */
  imce.eTbbPopupKeydown = function (event) {
    var e = event || window.event;
    // Close on Esc
    if (e.keyCode === 27) {
      this.Tbb.closePopup();
      return false;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Newfolder plugin for Imce.
   */

  /**
   * Init handler for New folder.
   */
  imce.bind('init', imce.newfolderInit = function () {
    if (imce.hasPermission('create_subfolders')) {
      // Add toolbar button
      imce.addTbb('newfolder', {
        title: Drupal.t('New folder'),
        permission: 'create_subfolders',
        content: imce.createNewfolderForm(),
        shortcut: 'Ctrl+N',
        icon: 'folder-add'
      });
    }
  });

  /**
   * Creates new folder form.
   */
  imce.createNewfolderForm = function () {
    var form = imce.newfolderForm;
    if (!form) {
      form = imce.newfolderForm = imce.createEl('<form class="imce-newfolder-form"><input type="text" name="newfolder" class="imce-newfolder-input" size="16" /><button type="submit" name="op" class="imce-newfolder-button">' + Drupal.t('Create') + '</button></form>');
      form.elements.newfolder.placeholder = Drupal.t('Folder name');
      form.onsubmit = imce.eNewfolderSubmit;
    }
    return form;
  };

  /**
   * Submit event for new folder form.
   */
  imce.eNewfolderSubmit = function () {
    var name = this.elements.newfolder.value;
    if (imce.validateNewfolder(name)) {
      imce.ajax('newfolder', {data: {newfolder: name}});
      imce.getTbb('newfolder').closePopup();
    }
    return false;
  };

  /**
   * Validates new folder creation.
   */
  imce.validateNewfolder = function (name, parentFolder) {
    if (!parentFolder) {
      parentFolder = imce.activeFolder;
    }
    if (!parentFolder.isReady() || !parentFolder.getPermission('create_subfolders') || !imce.validateFileName(name)) {
      return false;
    }
    if (parentFolder.getItem(name)) {
      imce.setMessage(Drupal.t('%filename already exists.', {'%filename': name}));
      return false;
    }
    return true;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Upload plugin for Imce.
   */

  /**
   * Init handler for Upload.
   */
  imce.bind('init', imce.uploadInit = function () {
    if (imce.hasPermission('upload_files')) {
      // Add toolbar button
      imce.addTbb('upload', {
        title: Drupal.t('Upload'),
        permission: 'upload_files',
        content: imce.createUploadForm(),
        shortcut: 'Ctrl+Alt+U',
        icon: 'upload'
      });
    }
  });

  /**
   * Creates the upload form.
   */
  imce.createUploadForm = function () {
    var els;
    var el;
    var exts;
    var form = imce.uploadForm;
    var name = 'files[imce][]';
    if (form) {
      return form;
    }
    form = imce.uploadForm = imce.createEl('<form class="imce-upload-form" method="post" enctype="multipart/form-data" accept-charset="UTF-8">' +
    '<div class="imce-form-item imce-form-file">' +
      '<label>' + Drupal.t('File') + '</label>' +
      '<input type="file" name="' + name + '" class="imce-file-input" multiple />' +
    '</div>' +
    '<div class="imce-form-actions">' +
      '<button type="submit" name="op" class="imce-upload-button">' + Drupal.t('Upload') + '</button>' +
    '</div>' +
    '<input type="hidden" name="jsop" value="upload" />' +
    '<input type="hidden" name="token" />' +
  '</form>');
    // Set action
    form.action = imce.getConf('ajax_url');
    els = form.elements;
    // Set token
    els.token.value = imce.getConf('token');
    // Set accepted extensions.
    el = els[name];
    exts = imce.getConf('extensions', '');
    // Skip for * which is interpreted incorrectly by some browsers.
    if (exts !== '*') {
      el.accept = '.' + exts.replace(/\s+/g, ',.');
    }
    // Ajax upload
    if (imce.canAjaxUpload()) {
      imce.activeUq = new imce.UploadQueue({name: name, accept: el.accept});
      form.insertBefore(imce.activeUq.el, form.firstChild);
      form.className += ' uq';
      if (imce.getConf('upload_auto_start', 1)) {
        form.className += ' auto-start';
      }
      form.onsubmit = imce.eUploadQueueSubmit;
    }
    // Iframe upload
    else {
      form.setAttribute('target', 'imce_upload_iframe');
      form.appendChild(imce.createEl('<input type="hidden" name="active_path" />'));
      form.appendChild(imce.createEl('<input type="hidden" name="return_html" value="1" />'));
      form.onsubmit = imce.eUploadIframeSubmit;
    }
    return form;
  };

  /**
   * Submit event for upload form with the upload queue.
   */
  imce.eUploadQueueSubmit = function (event) {
    imce.activeUq.start();
    return false;
  };

  /**
   * Submit event for upload form with iframe.
   */
  imce.eUploadIframeSubmit = function (event) {
    if (!imce.validateUploadForm(this)) {
      return false;
    }
    imce.createUploadIframe();
    this.elements.active_path.value = imce.activeFolder.getPath();
    imce.uploadSetBusy(true);
  };

  /**
   * Validates upload form before submit.
   */
  imce.validateUploadForm = function (form) {
    var i;
    var file;
    var input = form.elements['files[imce][]'];
    var files = input.files;
    // HTML5
    if (files) {
      if (!files.length) {
        return false;
      }
      for (i = 0; file = files[i]; i++) {
        if (!imce.validateFileUpload(file)) {
          return false;
        }
      }
      return true;
    }
    // Old file input
    if (input.value) {
      file = {name: input.value.split(input.value.indexOf('/') === -1 ? '\\' : '/').pop()};
      return imce.validateFileUpload(file);
    }
    return false;
  };

  /**
   * Validates a file before uploading.
   */
  imce.validateFileUpload = function (file) {
    // Extension
    var exts = imce.getConf('extensions', '');
    if (exts !== '*' && !imce.validateExtension(imce.getExt(file.name), exts)) {
      return false;
    }
    // Size
    var maxsize = imce.getConf('maxsize');
    if (maxsize && file.size && file.size > maxsize) {
      imce.setMessage(Drupal.t('%filename is %filesize exceeding the maximum file size of %maxsize.', {
        '%filename': file.name,
        '%filesize': imce.formatSize(file.size),
        '%maxsize': imce.formatSize(maxsize)
      }));
      return false;
    }
    // Name
    if (!imce.validateFileName(file.name)) {
      return false;
    }
    // Trigger validators.
    return $.inArray(false, imce.trigger('validateFileUpload', file)) === -1;
  };

  /**
   * Creates upload iframe.
   */
  imce.createUploadIframe = function () {
    var el = imce.uploadIframe;
    if (!el) {
      el = imce.uploadIframe = imce.createEl('<iframe name="imce_upload_iframe" class="imce-upload-iframe" style="position: absolute; top: -9999px; left: -9999px;" src="javascript: "></iframe>');
      document.body.appendChild(el);
      setTimeout(function () {
        el.onload = imce.eUploadIframeLoad;
      });
    }
    return el;
  };

  /**
   * Load event of upload iframe.
   */
  imce.eUploadIframeLoad = function (event) {
    var text;
    var response;
    var doc;
    var $body;
    var el = this;
    try {
      doc = el.contentDocument || el.contentWindow && el.contentWindow.document;
      if (doc) {
        $body = $(doc.body);
        if (text = $body.find('textarea').eq(0).val()) {
          response = $.parseJSON(text);
        }
        $body.empty();
      }
    }
    catch (err) {
      imce.delayError(err);
    }
    imce.uploadIframeComplete(response, text);
  };

  /**
   * Complete handler of iframe upload;
   */
  imce.uploadIframeComplete = function (response, text) {
    // Got a proper response
    if (response) {
      imce.ajaxProcessResponse(response);
      if (response.added) {
        imce.uploadResetInput(imce.uploadForm.elements['files[imce][]']);
        imce.getTbb('upload').closePopup();
      }
    }
    // Failed
    else {
      imce.setMessage(Drupal.t('Invalid response received from the server.'));
      if (text) {
        imce.setMessage('<pre>' + Drupal.checkPlain(text) + '</pre>');
      }
    }
    imce.uploadSetBusy(false);
  };

  /**
   * Set upload busy state.
   */
  imce.uploadSetBusy = function (state) {
    $('.imce-upload-button', imce.uploadForm).toggleClass('busy', state)[0].disabled = state;
  };

  /**
   * Check support for ajax upload.
   */
  imce.canAjaxUpload = function () {
    var support = imce.ajaxUploadSupport;
    if (support == null) {
      try {
        support = !!(window.FormData && (new XMLHttpRequest().upload));
      }
      catch (err) {
        support = false;
      }
      imce.ajaxUploadSupport = support;
    }
    return support;
  };

  /**
   * Resets a file input.
   */
  imce.uploadResetInput = function (input) {
    // Try value reset first
    if ($(input).val('').val()) {
      // Use form reset
      var form = document.createElement('form');
      var parent = input.parentNode;
      form.style.display = 'none';
      parent.insertBefore(form, input);
      form.appendChild(input);
      form.reset();
      parent.insertBefore(input, form);
      parent.removeChild(form);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Upload Queue and Upload Queue Item.
   */

  /**
   * Upload queue constructor.
   */
  imce.UploadQueue = function (conf) {
    this.construct(conf);
  };

  /**
   * Upload queue prototype.
   */
  var Uq = imce.UploadQueue.prototype;

  /**
   * Constructs upload queue.
   */
  Uq.construct = function (conf) {
    var Uq = this;
    Uq.items = {};
    Uq.queue = [];
    Uq.conf = $.extend({name: 'files[imce][]'}, conf);
    Uq.createEl();
  };

  /**
   * Creates upload queue element.
   */
  Uq.createEl = function () {
    var Uq = this;
    var el = Uq.el;
    var inputEl;
    var accept;
    if (!el) {
      el = Uq.el = imce.createEl('<div class="imce-uq"><span class="imce-uq-button imce-ficon imce-ficon-plus"><span class="imce-uq-label">' + Drupal.t('Add file') + '</span><input type="file" class="imce-uq-input" multiple /></span><div class="imce-uq-items"></div></div>');
      inputEl = Uq.inputEl = el.firstChild.lastChild;
      inputEl.onchange = imce.eUqInputChange;
      if (accept = Uq.conf.accept) {
        inputEl.accept = accept;
      }
      Uq.itemsEl = el.lastChild;
      el.Uq = inputEl.Uq = Uq;
    }
    return el;
  };

  /**
   * Starts the queue.
   */
  Uq.start = function () {
    var Uq = this;
    if (!Uq.running && Uq.queue.length) {
      if (Uq.next()) {
        Uq.running = true;
        imce.uploadSetBusy(true);
      }
    }
    return Uq.running;
  };

  /**
   * Ends the queue.
   */
  Uq.end = function () {
    if (this.running) {
      this.running = false;
      imce.uploadSetBusy(false);
      imce.getTbb('upload').closePopup();
    }
  };

  /**
   * Process the first available item in the queue.
   */
  Uq.next = function () {
    var i;
    var Item;
    var queue = this.queue.slice(0);
    for (i = 0; Item = queue[i]; i++) {
      // Remove completed items from the queue.
      if (Item.completed) {
        Item.remove();
      }
      else if (Item.start()) {
        return Item;
      }
    }
    // No items left. End the queue if running.
    this.end();
  };

  /**
   * Select files from a file reference list.
   */
  Uq.selectFiles = function (list) {
    var i;
    var file;
    var Item;
    var ret;
    var path = imce.activeFolder.getPath();
    for (i = 0; file = list[i]; i++) {
      if (imce.validateFileUpload(file)) {
        Item = new imce.UploadQueueItem(file, path);
        if (this.addItem(Item)) {
          if (!ret) {
            ret = {};
          }
          ret[i] = Item.id;
        }
        else {
          Item.remove();
        }
      }
    }
    return ret;
  };

  /**
   * Returns a queue item.
   */
  Uq.getItem = function (id) {
    return this.items[id];
  };

  /**
   * Adds a queue item.
   */
  Uq.addItem = function (Item) {
    var existing;
    var Uq = this;
    var id = Item.id;
    // Check existing
    if (existing = Uq.getItem(id)) {
      existing.remove(true);
    }
    Item.Uq = Uq;
    Uq.items[id] = Uq.queue[Uq.queue.length] = Item;
    Uq.itemsEl.appendChild(Item.el);
    return Item;
  };

  /**
   * Removes a queue item.
   */
  Uq.removeItem = function (Item, quick) {
    var Uq = this;
    var queue = Uq.queue;
    var i = $.inArray(Item, queue);
    if (i !== -1) {
      queue.splice(i, 1);
      delete Uq.items[Item.id];
      if (quick) {
        $(Item.el).remove();
      }
      else {
        $(Item.el).fadeOut(1000, imce.eUqItemFadeout);
      }
      return Item;
    }
  };

  /**
   * Prepare ajax options for an item.
   */
  Uq.ajaxPrepare = function (Item) {
    var i;
    var field;
    var data;
    var formData;
    var Folder;
    var Uq = this;
    var file = Item.file;
    var dest = Item.destination;
    // Check file and destination
    if (!file || !dest || !(Folder = imce.getFolder(dest))) {
      return;
    }
    // Prepare form data
    data = $(Uq.inputEl.form).serializeArray().concat([{name: 'active_path', value: dest}], Item.formData || []);
    formData = new FormData();
    for (i = 0; field = data[i]; i++) {
      if (field.name) {
        formData.append(field.name, field.value);
      }
    }
    formData.append(Uq.conf.name, Item.file);
    // Extend default ajax options
    return $.extend(imce.ajaxDefaults(), {
      data: formData,
      processData: false,
      contentType: false,
      customBeforeSend: imce.xUqItemBeforeSend,
      customComplete: imce.xUqItemComplete,
      xhr: imce.xUqItemXhr,
      itemId: Item.id,
      activeFolder: Folder
    });
  };


  /**
   * Upload queue item constructor.
   */
  imce.UploadQueueItem = function (file, destination) {
    this.construct(file, destination);
  };

  /**
   * Upload queue item prototype.
   */
  var UqItem = imce.UploadQueueItem.prototype;

  /**
   * Constructs upload queue item.
   */
  UqItem.construct = function (file, destination) {
    this.file = file;
    this.destination = destination;
    this.id = imce.joinPaths(destination, file.name);
    this.createEl();
  };

  /**
   * Creates upload queue element.
   */
  UqItem.createEl = function () {
    var cancelEl;
    var name;
    var Item = this;
    var el = Item.el;
    var file = Item.file;
    if (!el) {
      name = Drupal.checkPlain(file.name);
      el = Item.el = imce.createEl('<div class="imce-uqi"><div class="imce-uqi-cancel"></div><div class="imce-uqi-info"><span class="imce-uqi-name" title="' + name + '">' + name + '</span><span class="imce-uqi-size">' + imce.formatSize(file.size) + '</span></div><div class="imce-uqi-progress"><div class="imce-uqi-bar"></div></div><div class="imce-uqi-percent">' + Drupal.t('!percent%', {'!percent': 0}) + '</div></div>');
      el.Item = Item;
      // Set cancel element events
      cancelEl = el.firstChild;
      cancelEl.onclick = imce.eUqItemCancelClick;
      cancelEl.onmousedown = imce.eUqItemCancelMousedown;
    }
    return el;
  };

  /**
   * Removes the item from queue.
   */
  UqItem.remove = function (quick) {
    var ret;
    var Item = this;
    var Uq = Item.Uq;
    Item.stop();
    if (Uq) {
      Uq.removeItem(Item, quick);
    }
    Item.Uq = Item.xhr = Item.file = Item.formData = Item.el.Item = null;
    return ret;
  };

  /**
   * Start processing the item.
   */
  UqItem.start = function () {
    var opt;
    var Item = this;
    var Uq = Item.Uq;
    if (Uq && !Item.active && !Item.completed) {
      // Get ajax options
      if (opt = Uq.ajaxPrepare(Item)) {
        Item.active = true;
        $(Item.el).addClass('active');
        Item.xhr = $.ajax(opt);
        Uq.activeItem = Item;
        return Uq.activeItem;
      }
    }
  };

  /**
   * Stops processing the item.
   */
  UqItem.stop = function () {
    var Item = this;
    if (Item.active) {
      Item.active = false;
      $(Item.el).removeClass('active');
      if (Item.xhr) {
        Item.xhr.abort();
      }
      // Make sure the item is completed
      Item.complete();
    }
  };

  /**
   * Sets the item as completed.
   */
  UqItem.complete = function (status) {
    var Item = this;
    var Uq = Item.Uq;
    if (!Item.completed) {
      Item.completed = true;
      Item.status = status;
      $(Item.el).addClass(status ? 'success' : 'fail');
      if (status) {
        $('.imce-uqi-percent', Item.el).html(Drupal.t('!percent%', {'!percent': 100}));
      }
      // Check if this is the active item of the queue
      if (Uq && Uq.activeItem === Item) {
        Uq.activeItem = null;
        // Continue queue
        if (Uq.running) {
          Uq.next();
        }
      }
      // Make sure the item is stopped
      Item.stop();
    }
  };

  /**
   * Sets item progress.
   */
  UqItem.progress = function (percent) {
    $(this.el).find('.imce-uqi-percent').text(Drupal.t('!percent%', {'!percent': percent * 1})).end().find('.imce-uqi-bar').css('width', percent * 1 + '%');
  };


  /**
   * Change event of upload queue input
   */
  imce.eUqInputChange = function () {
    this.Uq.selectFiles(this.files);
    imce.uploadResetInput(this);
    if (imce.getConf('upload_auto_start', 1)) {
      $('.imce-upload-button', this.form).trigger('click');
    }
  };

  /**
   * Click event for cancel button of queue item.
   */
  imce.eUqItemCancelClick = function (event) {
    var Item = $(this).closest('.imce-uqi')[0].Item;
    if (Item) {
      Item.remove(true);
    }
    return false;
  };

  /**
   * Mousedown event for cancel button of queue item.
   */
  imce.eUqItemCancelMousedown = function (event) {
    return false;
  };

  /**
   * Fadeout callback for queue item.
   */
  imce.eUqItemFadeout = function () {
    $(this).remove();
  };

  /**
   * Ajax beforeSend handler of upload queue.
   */
  imce.xUqItemBeforeSend = function (xhr) {
    // Replaced by imce.xUqItemXhr
  };

  /**
   * Ajax xhr handler of upload queue.
   */
  imce.xUqItemXhr = function () {
    var id = this.itemId;
    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (e) {
      var Item = imce.activeUq.getItem(id);
      if (Item) {
        Item.progress(parseInt(e.loaded * 100 / e.total));
      }
    };
    return xhr;
  };

  /**
   * Ajax complete handler of upload queue.
   */
  imce.xUqItemComplete = function (xhr, status) {
    var opt = this;
    var Item = imce.activeUq.getItem(opt.itemId);
    status = !!(opt.response && opt.response.added);
    if (Item) {
      Item.complete(status);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Delete plugin for Imce.
   */

  /**
   * Init handler for Delete.
   */
  imce.bind('init', imce.deleteInit = function () {
    // Check if delete permission exists.
    if (imce.hasPermission('delete_files') || imce.hasPermission('delete_subfolders')) {
      // Add toolbar button.
      imce.addTbb('delete', {
        title: Drupal.t('Delete'),
        permission: 'delete_files|delete_subfolders',
        handler: imce.deleteSelection,
        shortcut: 'DEL',
        icon: 'delete'
      });
    }
  });

  /**
   * Deletes the selected items in the active folder.
   */
  imce.deleteSelection = function () {
    var items = imce.getSelection();
    if (imce.validateDelete(items)) {
      if (confirm(Drupal.formatPlural(items.length, 'Delete !filename?', 'Delete the selected @count items?', {'!filename': items[0].name}))) {
        imce.ajaxItems('delete', items);
      }
    }
  };

  /**
   * Validates item deletion.
   */
  imce.validateDelete = function (items) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validatePermissions(items, 'delete_files', 'delete_subfolders') && imce.validatePredefinedPath(items);
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Resize plugin for Imce.
   */

  /**
   * Init handler for Resize.
   */
  imce.bind('init', imce.resizeInit = function () {
    if (imce.hasPermission('resize_images')) {
      // Add toolbar button
      imce.addTbb('resize', {
        title: Drupal.t('Resize'),
        permission: 'resize_images',
        content: imce.createResizeForm(),
        shortcut: 'Ctrl+Alt+R',
        icon: 'image'
      });
    }
  });

  /**
   * Creates resize form.
   */
  imce.createResizeForm = function () {
    var form = imce.resizeForm;
    if (!form) {
      form = imce.resizeForm = imce.createEl('<form class="imce-resize-form">' +
        '<div class="imce-form-item imce-resize-dimensions">' +
          '<input type="number" name="width" class="imce-resize-width-input" min="1" step="1" />' +
          '<span class="imce-resize-separator">x</span>' +
          '<input type="number" name="height" class="imce-resize-height-input" min="1" step="1" />' +
        '</div>' +
        '<div class="imce-form-item imce-resize-copy">' +
          '<label><input type="checkbox" name="copy" class="imce-resize-copy-input" />' + Drupal.t('Create a copy') + '</label>' +
        '</div>' +
        '<div class="imce-form-actions">' +
          '<button type="submit" name="op" class="imce-resize-button">' + Drupal.t('Resize') + '</button>' +
        '</div>' +
      '</form>');
      form.onsubmit = imce.eResizeSubmit;
      // Set max values
      var els = form.elements;
      els.width.max = imce.getConf('maxwidth') || 10000;
      els.height.max = imce.getConf('maxheight') || 10000;
      // Set placeholders
      els.width.placeholder = Drupal.t('Width');
      els.height.placeholder = Drupal.t('Height');
      // Set focus event
      els.width.onfocus = els.height.onfocus = imce.eResizeInputFocus;
    }
    return form;
  };

  /**
   * Submit event for resize form.
   */
  imce.eResizeSubmit = function () {
    var data;
    var els = this.elements;
    var width = parseInt(els.width.value * 1);
    var height = parseInt(els.height.value * 1);
    var copy = els.copy.checked ? 1 : 0;
    var items = imce.getSelection();
    if (imce.validateResize(items, width, height, copy)) {
      data = {width: width, height: height, copy: copy};
      imce.ajaxItems('resize', items, {data: data});
      imce.getTbb('resize').closePopup();
    }
    return false;
  };

  /**
   * Validates item resizing.
   */
  imce.validateResize = function (items, width, height, copy) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validateImageTypes(items) && imce.validateDimensions(items, width, height) && imce.validatePermissions(items, 'resize_images');
  };

  /**
   * Focus event for resize width/height input.
   */
  imce.eResizeInputFocus = function () {
    var el = this;
    var val = el.value;
    // Apply aspect ratio of the selected image after min delay.
    setTimeout(function () {
      if (el === document.activeElement && val === el.value) {
        var ratio;
        var els = el.form.elements;
        var isWidth = els.width === el;
        var value = els[isWidth ? 'height' : 'width'].value * 1;
        var Item = imce.previewingItem;
        if (Item && Item.width && value) {
          ratio = Item.width / Item.height;
          el.value = Math.round(isWidth ? value * ratio : value / ratio);
        }
        el = null;
      }
    });
  };

})(jQuery, Drupal, imce);
;
