/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* typeScale */
function typeScale(){var a=window,b=document,c=b.documentElement,d=b.getElementsByTagName("body")[0],e=a.innerWidth||c.clientWidth||d.clientWidth;d.style.fontSize=e/375+15+"px",d.style.lineHeight=e/8e3+1.4}window.addEventListener("resize",typeScale);

/*! jaygrid.js v1.5 | MIT License | git.io/mlMPmA | Paul Browne | 2014 */
!function(a){var b,c,d,e,f,g,h;a.jaygrid=function(i){function k(){var a=window,b="inner";return"innerWidth"in window||(b="client",a=document.documentElement||document.body),{width:a[b+"Width"],height:a[b+"Height"]}}function l(a,f,g){return b=new RegExp(f+"-"+g+"-\\d+-\\d+","g"),c=a.attr("class").match(b)[0].split("-"),d=parseInt(c.slice(2,3)),e=parseInt(c.slice(3,4)),[d,e]}function m(a,b){return onresize=function(){clearTimeout(b),b=setTimeout(a,80)},a}var j=a.extend({margin:4,mobile_tablet:656,tablet_desktop:1024},i);m(function(){function i(b){var c=[];return a.each(b,function(){if(a(this).is("[class*='d-col-']")&&!a(this).is("[class*='d-left-']")&&!a(this).is("[class*='d-right-']")){a(this).is("[class*='d-offset-']")||(l(a(this),"d","col"),c.push(d/e)),a(this).is("[class*='d-offset-']")&&(l(a(this),"d","col"),c.push(d/e),l(a(this),"d","offset"),c.push(d/e));for(var b=0,f=0;b<c.length;f+=c[b++]);1==c.length&&a(this).addClass("d-first"),f>.99&&1.01>f&&(c.splice(0,c.length),a(this).addClass("d-last"))}}),c}function n(b){var c=[];return a.each(b,function(){if(a(this).is("[class*='m-col-']")&&!a(this).is("[class*='m-left-']")&&!a(this).is("[class*='m-right-']")){a(this).is("[class*='m-offset-']")||(l(a(this),"m","col"),c.push(d/e)),a(this).is("[class*='m-offset-']")&&(l(a(this),"m","col"),c.push(d/e),l(a(this),"m","offset"),c.push(d/e));for(var b=0,f=0;b<c.length;f+=c[b++]);1==c.length&&a(this).addClass("m-first"),f>.99&&1.01>f&&(c.splice(0,c.length),a(this).addClass("m-last"))}}),c}function p(b){var c=[];return a.each(b,function(){if(a(this).is("[class*='t-col-']")&&!a(this).is("[class*='t-left-']")&&!a(this).is("[class*='t-right-']")){a(this).is("[class*='t-offset-']")||(l(a(this),"t","col"),c.push(d/e)),a(this).is("[class*='t-offset-']")&&(l(a(this),"t","col"),c.push(d/e),l(a(this),"t","offset"),c.push(d/e));for(var b=0,f=0;b<c.length;f+=c[b++]);1==c.length&&a(this).addClass("t-first"),f>.99&&1.01>f&&(c.splice(0,c.length),a(this).addClass("t-last"))}}),c}if(a("[class*='-first']").each(function(){a(this).parent().hasClass("clearfix")&&a(this).unwrap()}),a("[class*='-col-'],[class*='-center-']").each(function(){a(this).css({display:"block",position:"relative","float":"none",width:"100%","max-width":"100%","margin-left":0,"margin-right":0,"min-height":1})}),k().width>=j.tablet_desktop){for(var b=a("body"),c=[];b.length;)c=a.merge(c,i(b)),b=b.children();a("[class*='d-col-']").each(function(){f=l(a(this),"d","col"),g=(j.margin*(f[0]-f[1])+100*f[0])/f[1],a(this).css({width:g+"%","max-width":g+"%","margin-left":j.margin+"%","float":"left"}),a(this).data("w",g)}),a("[class*='d-center-']").each(function(){f=l(a(this),"d","center"),g=(j.margin*(f[0]-f[1])+100*f[0])/f[1],a(this).css({width:g+"%","max-width":g+"%","margin-left":"auto","margin-right":"auto","float":"none"}),a(this).data("w",g)}),a("[class*='d-offset-']").each(function(){h=l(a(this),"d","offset"),g=a(this).hasClass("d-first")?h[0]*(j.margin+100)/h[1]:(j.margin*(h[0]+h[1])+100*h[0])/h[1],a(this).css({"margin-left":g+"%"})}),a("[class*='d-left-']").each(function(){h=l(a(this),"d","left"),g=100*(h[0]*(j.margin+100)/h[1]/a(this).parent().data("w")),a(this).css({"margin-left":-g+"%","margin-right":j.margin+"%"})}),a("[class*='d-right-']").each(function(){h=l(a(this),"d","right"),g=100*(h[0]*(j.margin+100)/h[1]/a(this).parent().data("w")),a(this).css({"margin-right":-g+"%","margin-left":j.margin+"%","float":"right"})}),a(".d-first").each(function(){a(this).css({"margin-left":0}),a(this).nextUntil(".d-last").addBack().next().addBack().wrapAll("<div class='clearfix'/>")}),a(".d-hide").each(function(){a(this).css({display:"none"})})}if(k().width<j.mobile_tablet){for(var b=a("body"),m=[];b.length;)m=a.merge(m,n(b)),b=b.children();a("[class*='m-col-']").each(function(){f=l(a(this),"m","col"),g=(j.margin*(f[0]-f[1])+100*f[0])/f[1],a(this).css({width:g+"%","max-width":g+"%","margin-left":j.margin+"%","float":"left"}),a(this).data("w",g)}),a("[class*='m-center-']").each(function(){f=l(a(this),"m","center"),g=(j.margin*(f[0]-f[1])+100*f[0])/f[1],a(this).css({width:g+"%","max-width":g+"%","margin-left":"auto","margin-right":"auto","float":"none"}),a(this).data("w",g)}),a("[class*='m-offset-']").each(function(){h=l(a(this),"m","offset"),g=a(this).hasClass("m-first")?h[0]*(j.margin+100)/h[1]:(j.margin*(h[0]+h[1])+100*h[0])/h[1],a(this).css({"margin-left":g+"%"})}),a("[class*='m-left-']").each(function(){h=l(a(this),"m","left"),g=100*(h[0]*(j.margin+100)/h[1]/a(this).parent().data("w")),a(this).css({"margin-left":-g+"%","margin-right":j.margin+"%"})}),a("[class*='m-right-']").each(function(){h=l(a(this),"m","right"),g=100*(h[0]*(j.margin+100)/h[1]/a(this).parent().data("w")),a(this).css({"margin-right":-g+"%","margin-left":j.margin+"%","float":"right"})}),a(".m-first").each(function(){a(this).css({"margin-left":0}),a(this).nextUntil(".m-last").addBack().next().addBack().wrapAll("<div class='clearfix'/>")}),a(".m-hide").each(function(){a(this).css({display:"none"})})}if(k().width<j.tablet_desktop&&k().width>=j.mobile_tablet){for(var b=a("body"),o=[];b.length;)o=a.merge(o,p(b)),b=b.children();a("[class*='t-col-']").each(function(){f=l(a(this),"t","col"),g=(j.margin*(f[0]-f[1])+100*f[0])/f[1],a(this).css({width:g+"%","max-width":g+"%","margin-left":j.margin+"%","float":"left"}),a(this).data("w",g)}),a("[class*='t-center-']").each(function(){f=l(a(this),"t","center"),g=(j.margin*(f[0]-f[1])+100*f[0])/f[1],a(this).css({width:g+"%","max-width":g+"%","margin-left":"auto","margin-right":"auto","float":"none"}),a(this).data("w",g)}),a("[class*='t-offset-']").each(function(){h=l(a(this),"t","offset"),g=a(this).hasClass("t-first")?h[0]*(j.margin+100)/h[1]:(j.margin*(h[0]+h[1])+100*h[0])/h[1],a(this).css({"margin-left":g+"%"})}),a("[class*='t-left-']").each(function(){h=l(a(this),"t","left"),g=100*(h[0]*(j.margin+100)/h[1]/a(this).parent().data("w")),a(this).css({"margin-left":-g+"%","margin-right":j.margin+"%"})}),a("[class*='t-right-']").each(function(){h=l(a(this),"t","right"),g=100*(h[0]*(j.margin+100)/h[1]/a(this).parent().data("w")),a(this).css({"margin-right":-g+"%","margin-left":j.margin+"%","float":"right"})}),a(".t-first").each(function(){a(this).css({"margin-left":0}),a(this).nextUntil(".t-last").addBack().next().addBack().wrapAll("<div class='clearfix'/>")}),a(".t-hide").each(function(){a(this).css({display:"none"})})}})()}}(jQuery);

/* StupidTable plugin*/
!function(a){a.fn.stupidtable=function(b){return this.each(function(){var c=a(this);b=b||{},b=a.extend({},a.fn.stupidtable.default_sort_fns,b),c.data("sortFns",b),c.on("click.stupidtable","thead th",function(){a(this).stupidsort()})})},a.fn.stupidsort=function(b){var c=a(this),d=0,e=a.fn.stupidtable.dir,f=c.closest("table"),g=c.data("sort")||null;if(null!==g){c.parents("tr").find("th").slice(0,a(this).index()).each(function(){var b=a(this).attr("colspan")||1;d+=parseInt(b,10)});var h;return 1==arguments.length?h=b:(h=b||c.data("sort-default")||e.ASC,c.data("sort-dir")&&(h=c.data("sort-dir")===e.ASC?e.DESC:e.ASC)),f.trigger("beforetablesort",{column:d,direction:h}),f.css("display"),setTimeout(function(){var b=[],i=f.data("sortFns")[g],j=f.children("tbody").children("tr");j.each(function(c,e){var f=a(e).children().eq(d),g=f.data("sort-value");"undefined"==typeof g&&(g=f.text(),f.data("sort-value",g)),b.push([g,e])}),b.sort(function(a,b){return i(a[0],b[0])}),h!=e.ASC&&b.reverse(),j=a.map(b,function(a){return a[1]}),f.children("tbody").append(j),f.find("th").data("sort-dir",null).removeClass("sorting-desc sorting-asc"),c.data("sort-dir",h).addClass("sorting-"+h),f.trigger("aftertablesort",{column:d,direction:h}),f.css("display")},10),c}},a.fn.updateSortVal=function(b){var c=a(this);return c.is("[data-sort-value]")&&c.attr("data-sort-value",b),c.data("sort-value",b),c},a.fn.stupidtable.dir={ASC:"asc",DESC:"desc"},a.fn.stupidtable.default_sort_fns={"int":function(a,b){return parseInt(a,10)-parseInt(b,10)},"float":function(a,b){return parseFloat(a)-parseFloat(b)},string:function(a,b){return a.localeCompare(b)},"string-ins":function(a,b){return a=a.toLocaleLowerCase(),b=b.toLocaleLowerCase(),a.localeCompare(b)}}}(jQuery);

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
!function(e){function t(e,t,r){var n=e[0],o=/er/.test(r)?_indeterminate:/bl/.test(r)?p:u,s=r==_update?{checked:n[u],disabled:n[p],indeterminate:"true"==e.attr(_indeterminate)||"false"==e.attr(_determinate)}:n[o];if(/^(ch|di|in)/.test(r)&&!s)i(e,o);else if(/^(un|en|de)/.test(r)&&s)a(e,o);else if(r==_update)for(var d in s)s[d]?i(e,d,!0):a(e,d,!0);else t&&"toggle"!=r||(t||e[_callback]("ifClicked"),s?n[_type]!==l&&a(e,o):i(e,o))}function i(t,i,r){var f=t[0],h=t.parent(),b=i==u,m=i==_indeterminate,v=i==p,k=m?_determinate:b?_:"enabled",y=n(t,k+o(f[_type])),g=n(t,i+o(f[_type]));if(!0!==f[i]){if(!r&&i==u&&f[_type]==l&&f.name){var C=t.closest("form"),w='input[name="'+f.name+'"]',w=C.length?C.find(w):e(w);w.each(function(){this!==f&&e(this).data(d)&&a(e(this),i)})}m?(f[i]=!0,f[u]&&a(t,u,"force")):(r||(f[i]=!0),b&&f[_indeterminate]&&a(t,_indeterminate,!1)),s(t,b,i,r)}f[p]&&n(t,_cursor,!0)&&h.find("."+c).css(_cursor,"default"),h[_add](g||n(t,i)||""),h.attr("role")&&!m&&h.attr("aria-"+(v?p:u),"true"),h[_remove](y||n(t,k)||"")}function a(e,t,i){var a=e[0],r=e.parent(),d=t==u,l=t==_indeterminate,f=t==p,h=l?_determinate:d?_:"enabled",b=n(e,h+o(a[_type])),m=n(e,t+o(a[_type]));!1!==a[t]&&((l||!i||"force"==i)&&(a[t]=!1),s(e,d,h,i)),!a[p]&&n(e,_cursor,!0)&&r.find("."+c).css(_cursor,"pointer"),r[_remove](m||n(e,t)||""),r.attr("role")&&!l&&r.attr("aria-"+(f?p:u),"false"),r[_add](b||n(e,h)||"")}function r(t,i){t.data(d)&&(t.parent().html(t.attr("style",t.data(d).s||"")),i&&t[_callback](i),t.off(".i").unwrap(),e(_label+'[for="'+t[0].id+'"]').add(t.closest(_label)).off(".i"))}function n(e,t,i){return e.data(d)?e.data(d).o[t+(i?"":"Class")]:void 0}function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t,i,a){a||(t&&e[_callback]("ifToggled"),e[_callback]("ifChanged")[_callback]("if"+o(i)))}var d="iCheck",c=d+"-helper",l="radio",u="checked",_="un"+u,p="disabled";_determinate="determinate",_indeterminate="in"+_determinate,_update="update",_type="type",_click="click",_touch="touchbegin.i touchend.i",_add="addClass",_remove="removeClass",_callback="trigger",_label="label",_cursor="cursor",_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent),e.fn[d]=function(n,o){var s='input[type="checkbox"], input[type="'+l+'"]',_=e(),f=function(t){t.each(function(){var t=e(this);_=_.add(t.is(s)?t:t.find(s))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(n))return n=n.toLowerCase(),f(this),_.each(function(){var i=e(this);"destroy"==n?r(i,"ifDestroyed"):t(i,!0,n),e.isFunction(o)&&o()});if("object"!=typeof n&&n)return this;var h=e.extend({checkedClass:u,disabledClass:p,indeterminateClass:_indeterminate,labelHover:!0},n),b=h.handle,m=h.hoverClass||"hover",v=h.focusClass||"focus",k=h.activeClass||"active",y=!!h.labelHover,g=h.labelHoverClass||"hover",C=0|(""+h.increaseArea).replace("%","");return("checkbox"==b||b==l)&&(s='input[type="'+b+'"]'),-50>C&&(C=-50),f(this),_.each(function(){var n=e(this);r(n);var o=this,s=o.id,_=-C+"%",f=100+2*C+"%",f={position:"absolute",top:_,left:_,display:"block",width:f,height:f,margin:0,padding:0,background:"#fff",border:0,opacity:0},_=_mobile?{position:"absolute",visibility:"hidden"}:C?f:{position:"absolute",opacity:0},b="checkbox"==o[_type]?h.checkboxClass||"icheckbox":h.radioClass||"i"+l,w=e(_label+'[for="'+s+'"]').add(n.closest(_label)),x=!!h.aria,A=d+"-"+Math.random().toString(36).substr(2,6),H='<div class="'+b+'" '+(x?'role="'+o[_type]+'" ':"");x&&w.each(function(){H+='aria-labelledby="',this.id?H+=this.id:(this.id=A,H+=A),H+='"'}),H=n.wrap(H+"/>")[_callback]("ifCreated").parent().append(h.insert),f=e('<ins class="'+c+'"/>').css(f).appendTo(H),n.data(d,{o:h,s:n.attr("style")}).css(_),h.inheritClass&&H[_add](o.className||""),h.inheritID&&s&&H.attr("id",d+"-"+s),"static"==H.css("position")&&H.css("position","relative"),t(n,!0,_update),w.length&&w.on(_click+".i mouseover.i mouseout.i "+_touch,function(i){var a=i[_type],r=e(this);if(!o[p]){if(a==_click){if(e(i.target).is("a"))return;t(n,!1,!0)}else y&&(/ut|nd/.test(a)?(H[_remove](m),r[_remove](g)):(H[_add](m),r[_add](g)));if(!_mobile)return!1;i.stopPropagation()}}),n.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[_type];return e=e.keyCode,t==_click?!1:"keydown"==t&&32==e?(o[_type]==l&&o[u]||(o[u]?a(n,u):i(n,u)),!1):void("keyup"==t&&o[_type]==l?!o[u]&&i(n,u):/us|ur/.test(t)&&H["blur"==t?_remove:_add](v))}),f.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(e){var i=e[_type],a=/wn|up/.test(i)?k:m;if(!o[p]){if(i==_click?t(n,!1,!0):(/wn|er|in/.test(i)?H[_add](a):H[_remove](a+" "+k),w.length&&y&&a==m&&w[/ut|nd/.test(i)?_remove:_add](g)),!_mobile)return!1;e.stopPropagation()}})})}}(window.jQuery||window.Zepto);




/* init. scripts */

$(function() {
  $.jaygrid();
  typeScale();
  $("table").stupidtable();
});
