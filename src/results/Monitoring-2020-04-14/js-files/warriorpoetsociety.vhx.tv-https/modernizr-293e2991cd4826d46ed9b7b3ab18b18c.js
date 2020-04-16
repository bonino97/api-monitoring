/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(r,d,a){function o(e){b.cssText=e}function e(e,t){return o(M.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function c(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var n in e){var r=e[n];if(!c(r,"-")&&b[r]!==a)return"pfx"!=t||r}return!1}function s(e,t,n){for(var r in e){var o=t[e[r]];if(o!==a)return!1===n?e[r]:i(o,"function")?o.bind(n||t):o}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?u(o,t):s(o=(e+" "+T.join(r+" ")+r).split(" "),t,n)}function t(){m.input=function(e){for(var t=0,n=e.length;t<n;t++)N[e[t]]=!!(e[t]in w);return N.list&&(N.list=!(!d.createElement("datalist")||!r.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var t,n,r,o=0,i=e.length;o<i;o++)w.setAttribute("type",n=e[o]),(t="text"!==w.type)&&(w.value=E,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&w.style.WebkitAppearance!==a?(g.appendChild(w),t=(r=d.defaultView).getComputedStyle&&"textfield"!==r.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(n)||(t=/^(url|email)$/.test(n)?w.checkValidity&&!1===w.checkValidity():w.value!=E)),P[e[o]]=!!t;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var n,f,p="2.8.3",m={},h=!0,g=d.documentElement,v="modernizr",y=d.createElement(v),b=y.style,w=d.createElement("input"),E=":)",x={}.toString,M=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",C=S.split(" "),T=S.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},z={},P={},N={},A=[],F=A.slice,j=function(e,t,n,r){var o,i,a,c,u=d.createElement("div"),s=d.body,l=s||d.createElement("body");if(parseInt(n,10))for(;n--;)(a=d.createElement("div")).id=r?r[n]:v+(n+1),u.appendChild(a);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(s?u:l).innerHTML+=o,l.appendChild(u),s||(l.style.background="",l.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(l)),i=t(u,e),s?u.parentNode.removeChild(u):(l.parentNode.removeChild(l),g.style.overflow=c),!!i},$=function(e){var t,n=r.matchMedia||r.msMatchMedia;return n?n(e)&&n(e).matches||!1:(j("@media "+e+" { #"+v+" { position: absolute; } }",function(e){t="absolute"==(r.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),t)},D=function(){function e(e,t){t=t||d.createElement(r[e]||"div");var n=(e="on"+e)in t;return n||(t.setAttribute||(t=d.createElement("div")),t.setAttribute&&t.removeAttribute&&(t.setAttribute(e,""),n=i(t[e],"function"),i(t[e],"undefined")||(t[e]=a),t.removeAttribute(e))),t=null,n}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;for(var H in f=i(L,"undefined")||i(L.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function I(r){var o=this;if("function"!=typeof o)throw new TypeError;var i=F.call(arguments,1),a=function(){if(this instanceof a){var e=function(){};e.prototype=o.prototype;var t=new e,n=o.apply(t,i.concat(F.call(arguments)));return Object(n)===n?n:t}return o.apply(r,i.concat(F.call(arguments)))};return a}),z.flexbox=function(){return l("flexWrap")},z.flexboxlegacy=function(){return l("boxDirection")},z.canvas=function(){var e=d.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},z.canvastext=function(){return!(!m.canvas||!i(d.createElement("canvas").getContext("2d").fillText,"function"))},z.webgl=function(){return!!r.WebGLRenderingContext},z.touch=function(){var t;return"ontouchstart"in r||r.DocumentTouch&&d instanceof DocumentTouch?t=!0:j(["@media (",M.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){t=9===e.offsetTop}),t},z.geolocation=function(){return"geolocation"in navigator},z.postmessage=function(){return!!r.postMessage},z.websqldatabase=function(){return!!r.openDatabase},z.indexedDB=function(){return!!l("indexedDB",r)},z.hashchange=function(){return D("hashchange",r)&&(d.documentMode===a||7<d.documentMode)},z.history=function(){return!(!r.history||!history.pushState)},z.draganddrop=function(){var e=d.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},z.websockets=function(){return"WebSocket"in r||"MozWebSocket"in r},z.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),c(b.backgroundColor,"rgba")},z.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),c(b.backgroundColor,"rgba")||c(b.backgroundColor,"hsla")},z.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},z.backgroundsize=function(){return l("backgroundSize")},z.borderimage=function(){return l("borderImage")},z.borderradius=function(){return l("borderRadius")},z.boxshadow=function(){return l("boxShadow")},z.textshadow=function(){return""===d.createElement("div").style.textShadow},z.opacity=function(){return e("opacity:.55"),/^0.55$/.test(b.opacity)},z.cssanimations=function(){return l("animationName")},z.csscolumns=function(){return l("columnCount")},z.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+M.join(n+e)).slice(0,-e.length)),c(b.backgroundImage,"gradient")},z.cssreflections=function(){return l("boxReflect")},z.csstransforms=function(){return!!l("transform")},z.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in g.style&&j("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},z.csstransitions=function(){return l("transition")},z.fontface=function(){var i;return j('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=d.getElementById("smodernizr"),r=n.sheet||n.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";i=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0])}),i},z.generatedcontent=function(){var t;return j(["#",v,"{font:0/0 a}#",v,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=3<=e.offsetHeight}),t},z.video=function(){var e=d.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return t},z.audio=function(){var e=d.createElement("audio"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t},z.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},z.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},z.webworkers=function(){return!!r.Worker},z.applicationcache=function(){return!!r.applicationCache},z.svg=function(){return!!d.createElementNS&&!!d.createElementNS(k.svg,"svg").createSVGRect},z.inlinesvg=function(){var e=d.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},z.smil=function(){return!!d.createElementNS&&/SVGAnimate/.test(x.call(d.createElementNS(k.svg,"animate")))},z.svgclippaths=function(){return!!d.createElementNS&&/SVGClipPath/.test(x.call(d.createElementNS(k.svg,"clipPath")))},z)f(z,H)&&(n=H.toLowerCase(),m[n]=z[H](),A.push((m[n]?"":"no-")+n));return m.input||t(),m.addTest=function(e,t){if("object"==typeof e)for(var n in e)f(e,n)&&m.addTest(n,e[n]);else{if(e=e.toLowerCase(),m[e]!==a)return m;t="function"==typeof t?t():t,void 0!==h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},o(""),y=w=null,function(e,a){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function c(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function r(e,t,n){return t||(t=a),l?t.createElement(e):(n||(n=u(t)),!(r=n.cache[e]?n.cache[e].cloneNode():m.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||p.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function t(e,t){if(e||(e=a),l)return e.createDocumentFragment();for(var n=(t=t||u(e)).frag.cloneNode(),r=0,o=c(),i=o.length;r<i;r++)n.createElement(o[r]);return n}function o(t,n){n.cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return y.shivMethods?r(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/[\w\-]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,n.frag)}function i(e){e||(e=a);var t=u(e);return!y.shivCSS||s||t.hasCSS||(t.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||o(e,t),e}var s,l,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,l=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){l=s=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:!1!==f.shivCSS,supportsUnknownElements:l,shivMethods:!1!==f.shivMethods,type:"default",shivDocument:i,createElement:r,createDocumentFragment:t};e.html5=y,i(a)}(this,d),m._version=p,m._prefixes=M,m._domPrefixes=T,m._cssomPrefixes=C,m.mq=$,m.hasEvent=D,m.testProp=function(e){return u([e])},m.testAllProps=l,m.testStyles=j,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+A.join(" "):""),m}(this,this.document),Modernizr.addTest("ipad",function(){return!!navigator.userAgent.match(/iPad/i)}),Modernizr.addTest("iphone",function(){return!!navigator.userAgent.match(/iPhone/i)}),Modernizr.addTest("ipod",function(){return!!navigator.userAgent.match(/iPod/i)}),Modernizr.addTest("ios",function(){return Modernizr.ipad||Modernizr.ipod||Modernizr.iphone}),Modernizr.addTest("ios",function(){return Modernizr.ipad||Modernizr.ipod||Modernizr.iphone}),Modernizr.addTest("android",function(){return!!navigator.userAgent.match(/Android/i)}),Modernizr.addTest("mobile",function(){return Modernizr.ipad||Modernizr.ipod||Modernizr.iphone||Modernizr.android}),Modernizr.addTest("firefox",function(){return!!navigator.userAgent.match(/Firefox/i)}),Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader));