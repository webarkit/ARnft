!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("aframe"),require("three")):"function"==typeof define&&define.amd?define(["aframe","three"],t):"object"==typeof exports?exports["ARnft.aframe"]=t(require("aframe"),require("three")):e["ARnft.aframe"]=t(e.AFRAME,e.THREE)}("undefined"!=typeof self?self:this,(function(e,t){return(()=>{var r={926:e=>{function t(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function s(e){t(i,o,a,s,c,"next",e)}function c(e){t(i,o,a,s,c,"throw",e)}s(void 0)}))}}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},913:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},8:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},757:(e,t,r)=>{e.exports=r(666)},669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),a=r(372),i=r(327),s=r(97),c=r(109),u=r(985),l=r(61);e.exports=function(e){return new Promise((function(t,r){var d=e.data,f=e.headers;n.isFormData(d)&&delete f["Content-Type"],(n.isBlob(d)||n.isFile(d))&&d.type&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=unescape(encodeURIComponent(e.auth.password))||"";f.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,r,a),p=null}},p.onabort=function(){p&&(r(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),d||(d=null),p.send(d)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),a=r(321),i=r(185);function s(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=s(r(655));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=r(263),c.CancelToken=r(972),c.isCancel=r(502),c.all=function(e){return Promise.all(e)},c.spread=r(713),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),a=r(782),i=r(572),s=r(185);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),a=r(502),i=r(655);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(a,u),n.forEach(i,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(s,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=o.concat(a).concat(i).concat(s),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(d,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),o=r(16),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=r(448)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},740:(e,t,r)=>{"use strict";var n=r(697),o=r(807),a=r(466),i=r.n(a),s=r(575),c=r.n(s),u=r(913),l=r.n(u),d=function(){function e(){c()(this,e)}return l()(e,null,[{key:"createContainer",value:function(){var e=document.createElement("div");e.id="app";var t=document.createElement("canvas");t.id="canvas";var r=document.createElement("video");r.id="video",r.setAttribute("autoplay",""),r.setAttribute("muted",""),r.setAttribute("playsinline",""),e.appendChild(r),e.appendChild(t);var n=document.getElementById("loading");return document.body.insertBefore(e,n),{container:e,canvas:t,video:r}}},{key:"createStats",value:function(e){if(e){var t=document.createElement("div");t.id="stats",t.className="ui stats";var r=document.createElement("div");r.id="stats1",r.className="stats-item";var n=document.createElement("p");n.className="stats-item-title",n.innerText="Main",r.appendChild(n),t.appendChild(r);var o=document.createElement("div");o.id="stats2",o.className="stats-item";var a=document.createElement("p");a.className="stats-item-title",a.innerText="Worker",o.appendChild(a),t.appendChild(o);var i=document.getElementById("loading");document.body.insertBefore(t,i)}}},{key:"createLoading",value:function(e){var t=document.createElement("div");t.id="loading";var r=document.createElement("img");r.src=e.loading.logo.src,r.alt=e.loading.logo.alt;var n=document.createElement("span");n.setAttribute("class","loading-text"),n.innerText=e.loading.loadingMessage,t.appendChild(r),t.appendChild(n),document.body.insertBefore(t,document.body.firstChild)}}]),e}(),f=r(757),p=r.n(f),h=r(8),m=r.n(h),v=r(926),g=r.n(v),y=r(669),w=r.n(y),b=r(477),x=r.n(b);function E(){return x()('(()=>{self.onmessage=t=>{const e=t.data;switch(e.type){case"load":return void r(e);case"process":a=e.imagedata,o()}};let a=null,t=null,e=null;const r=a=>{const r=self.origin;let o,s,d;console.debug("Base path:",r);const n=/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/gim.test(a.artoolkitUrl);1==n?o=a.addPath?r+"/"+a.addPath+"/"+a.artoolkitUrl:a.artoolkitUrl:0==n&&(a.addPath?(console.debug("addPath exist: ",a.addPath),o=r+"/"+a.addPath+"/"+a.artoolkitUrl):o=r+"/"+a.artoolkitUrl),console.debug("Importing WASM lib from: ",o),importScripts(o),self.addEventListener("artoolkitNFT-loaded",(function(){const o=/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/gim.test(a.camera_para);1==o?s=a.addPath?r+"/"+a.addPath+"/"+a.camera_para:a.camera_para:0==o&&(s=a.addPath?r+"/"+a.addPath+"/"+a.camera_para:r+"/"+a.camera_para),console.debug("Loading camera at:",s);const n=new ARCameraParamNFT(s,(()=>{t=new ARControllerNFT(a.pw,a.ph,n);const o=t.getCameraMatrix();t.addEventListener("getNFTMarker",(a=>{e={type:"found",matrixGL_RH:JSON.stringify(a.data.matrixGL_RH),proj:JSON.stringify(o)}}));const s=/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/gim.test(a.marker);1==s?d=a.addPath?r+"/"+a.addPath+"/"+a.marker:a.marker:0==s&&(d=a.addPath?r+"/"+a.addPath+"/"+a.marker:r+"/"+a.marker),console.debug("Loading NFT marker at: ",d),t.loadNFTMarker(d,(a=>{postMessage({type:"nftData",nft:JSON.stringify(a)}),t.trackNFTMarkerId(a.id),console.log("loadNFTMarker -> ",a.id),console.log(a),postMessage({type:"endLoading",end:!0})})),postMessage({type:"loaded",proj:JSON.stringify(o)})}),(a=>{console.error(a)}))}))},o=()=>{e=null,t&&t.process&&t.process(a),e?postMessage(e):postMessage({type:"not found"}),a=null}})();',"Worker",void 0,void 0)}var k=r(638),S=r.n(k),j={delta:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],interpolated:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},L=function(){function e(){c()(this,e)}var t,r;return l()(e,null,[{key:"getUserMedia",value:(r=g()(p().mark((function e(t){var r,n,o,a,i,s,c,u;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.getElementById("video"),n=t.videoSettings.facingMode||"environment",o=t.onError||function(e){console.error("ARnft internal getUserMedia",e)},a=null,i={},s={},c=function(e){if(window.URL.createObjectURL)try{r.srcObject=e}catch(e){}r.srcObject=e,r.autoplay=!0,r.playsInline=!0},t.videoSettings.width&&(s.width=t.videoSettings.width,"object"===m()(t.videoSettings.width)?(t.videoSettings.width.max&&(i.maxWidth=t.videoSettings.width.max),t.videoSettings.width.min&&(i.minWidth=t.videoSettings.width.min)):i.maxWidth=t.videoSettings.width),t.videoSettings.height&&(s.height=t.videoSettings.height,"object"===m()(t.videoSettings.height)?(t.videoSettings.height.max&&(i.maxHeight=t.videoSettings.height.max),t.videoSettings.height.min&&(i.minHeight=t.videoSettings.height.min)):i.maxHeight=t.videoSettings.height),s.facingMode=n,s.deviceId=t.videoSettings.deviceId,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,u={audio:!1,video:i},!navigator.mediaDevices&&!window.MediaStreamTrack.getSources){e.next=31;break}if(!navigator.mediaDevices){e.next=28;break}return console.log("inside mediaDevices"),e.prev=16,e.next=19,navigator.mediaDevices.getUserMedia({audio:!1,video:s});case 19:a=e.sent,c(a),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.error(e.t0);case 26:e.next=29;break;case 28:window.MediaStreamTrack.getSources((function(e){var t=s.facingMode;n&&n.exact&&(t=n.exact);for(var r=0;r<e.length;r++)if("video"===e[r].kind&&e[r].facing===t){u.video.mandatory.sourceId=e[r].id;break}n&&n.exact&&!u.video.mandatory.sourceId?o("Failed to get camera facing the wanted direction"):navigator.getUserMedia?a=navigator.getUserMedia(u,c,o):o("navigator.getUserMedia is not supported on your browser")}));case 29:e.next=32;break;case 31:navigator.getUserMedia?navigator.getUserMedia(u,c,o):o("navigator.getUserMedia is not supported on your browser");case 32:return e.abrupt("return",new Promise((function(e){r.onloadedmetadata=function(){e(r)}})));case 33:case"end":return e.stop()}}),e,null,[[16,23]])}))),function(e){return r.apply(this,arguments)})},{key:"_startWorker",value:function(e,t,r,n,o,a,i,s,c,u){var l,d,f,p,h,m,v,g,y,w,b,x,k,j,L=this,M=document.createElement("canvas"),U=M.getContext("2d"),P=function(e){if(e){j=JSON.parse(e.matrixGL_RH);var t=new(S())("getMatrixGL_RH",{detail:{matrixGL_RH:j}});document.dispatchEvent(t)}else if(j){j=null;var r=new(S())("nftTrackingLost");document.dispatchEvent(r)}},C=function(){U.fillStyle="black",U.fillRect(0,0,y,w),U.drawImage(r,0,0,l,d,b,x,v,g);var e=U.getImageData(0,0,y,w);k.postMessage({type:"process",imagedata:e},[e.data.buffer])};!function(){l=n,d=o,h=320/Math.max(l,d/3*4),m=L.isMobile()?window.outerWidth/n:1,f=l*m,p=d*m,v=l*h,g=d*h,y=Math.max(v,g/3*4),w=Math.max(g,v/4*3),b=(y-v)/2,x=(w-g)/2,M.style.clientWidth=y+"px",M.style.clientHeight=w+"px",M.width=y,M.height=w;var e=new(S())("getWindowSize",{detail:{sw:f,sh:p}});document.dispatchEvent(e),(k=new E).postMessage({type:"load",pw:y,ph:w,camera_para:u.cameraPara,marker:t,artoolkitUrl:u.artoolkitUrl,addPath:u.addPath}),k.onmessage=function(e){var t=e.data;switch(t.type){case"loaded":var r=JSON.parse(t.proj),n=y/v,o=w/g;r[0]*=n,r[4]*=n,r[8]*=n,r[12]*=n,r[1]*=o,r[5]*=o,r[9]*=o,r[13]*=o;var a=new(S())("getProjectionMatrix",{detail:{proj:r}});document.dispatchEvent(a);break;case"endLoading":if(!0===t.end){var i=document.getElementById("loading");i&&(i.querySelector(".loading-text").innerText="Start the tracking!",setTimeout((function(){i.parentElement.removeChild(i)}),2e3))}break;case"nftData":var c=JSON.parse(t.nft),u=new(S())("getNFTData",{detail:{dpi:c.dpi,width:c.width,height:c.height}});document.dispatchEvent(u);break;case"found":P(t);break;case"not found":P(null)}s(),C()}}(),function e(){i(),window.requestAnimationFrame(e)}(),C()}},{key:"interpolate",value:function(e){for(var t=0;t<16;t++)j.delta[t]=e[t]-j.interpolated[t],j.interpolated[t]=j.interpolated[t]+j.delta[t]/24;return j.interpolated}},{key:"isMobile",value:function(){return/Android|mobile|iPad|iPhone/i.test(navigator.userAgent)}},{key:"setMatrix",value:function(e,t){var r=[];for(var n in t)r[n]=t[n];"function"==typeof e.elements.set?e.elements.set(r):e.elements=[].slice.call(r)}},{key:"jsonParser",value:(t=g()(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w().get(t,{responseType:"json"}).then((function(e){return e.data})).catch((function(e){console.error(e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),M=function(){function e(){c()(this,e),this.markerUrl="examples/DataNFT/pinball"}return l()(e,[{key:"getMarkerUrl",value:function(){return this.markerUrl}},{key:"setMarkerUrl",value:function(e){this.markerUrl=e}}]),e}();n.registerSystem("arnft",{schema:{artoolkitUrl:{type:"string",default:"libs/jsartoolkitNFT/build/artoolkitNFT_wasm.js"},cameraPara:{type:"string",default:"examples/Data/camera_para.dat"}},init:function(){var e=this;console.log(this.data);var t,r=this._sourceAframe=new M;console.log(r),t=this._sourceAframe.markerUrl;var n={artoolkitUrl:this.data.artoolkitUrl,cameraPara:this.data.cameraPara,videoSettings:{facingMode:"environment"},loading:{logo:{src:"Data/arNFT-logo.gif",alt:"arNFT.js logo"},loadingMessage:"Loading, please wait..."}};this.el.sceneEl.addEventListener("renderstart",(function(){console.log(e);var r=e.el.sceneEl.object3D,a=(e.el.sceneEl.camera,e.el.sceneEl.renderer,!0),s=new o.MeshLambertMaterial({color:16711680}),c=new o.CubeGeometry(1,1,1),u=new o.Mesh(c,s);r.add(u),r.matrixAutoUpdate=!1,d.createLoading(n),d.createStats(a);var l,f,p=d.createContainer(),h=p.container,m=p.canvas;(l=new(i())).showPanel(0),document.getElementById("stats1").appendChild(l.dom),(f=new(i())).showPanel(0),document.getElementById("stats2").appendChild(f.dom);var v={statsMain:l,statsWorker:f,stats:a};L.getUserMedia(n).then((function(e){L._startWorker(h,t,e,e.videoWidth,e.videoHeight,m,(function(){v.stats&&v.statsMain.update()}),(function(){v.stats&&v.statsWorker.update()}),r,n)}))}))}}),n.registerComponent("arnft-anchor",{schema:{descriptorsUrl:{type:"string",default:"pinball"}},init:function(){console.log(this.data);var e=this.el.sceneEl.systems.arnft;console.log(e),(this._sourceAframe=new M).setMarkerUrl(this.data.descriptorsUrl),console.log(this._sourceAframe),console.log(e),this.el.object3D.visible=!0,console.log(this),new THREE.Group}}),n.registerPrimitive("ar-nft",n.utils.extendDeep({},n.primitives.getMeshMixin(),{defaultComponents:{"arnft-anchor":{}},mappings:{url:"arnft-anchor.descriptorsUrl"}}))},638:(e,t,r)=>{var n=r.g.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var r=document.createEvent("CustomEvent");return t?r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):r.initCustomEvent(e,!1,!1,void 0),r}:function(e,t){var r=document.createEventObject();return r.type=e,t?(r.bubbles=Boolean(t.bubbles),r.cancelable=Boolean(t.cancelable),r.detail=t.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r}},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new U(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=j(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function v(){}function g(){}function y(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,a)&&(w=x);var E=y.prototype=v.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return g.prototype=E.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[i]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(E),c(E,s,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},466:function(e){var t;e.exports=((t=function(){function e(e){return o.appendChild(e.dom),e}function r(e){for(var t=0;t<o.children.length;t++)o.children[t].style.display=t===e?"block":"none";n=e}var n=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",(function(e){e.preventDefault(),r(++n%o.children.length)}),!1);var a=(performance||Date).now(),i=a,s=0,c=e(new t.Panel("FPS","#0ff","#002")),u=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:e,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(u.update(e-a,200),e>i+1e3&&(c.update(1e3*s/(e-i),100),i=e,s=0,l)){var t=performance.memory;l.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:o,setMode:r}}).Panel=function(e,t,r){var n=1/0,o=0,a=Math.round,i=a(window.devicePixelRatio||1),s=80*i,c=48*i,u=3*i,l=2*i,d=3*i,f=15*i,p=74*i,h=30*i,m=document.createElement("canvas");m.width=s,m.height=c,m.style.cssText="width:80px;height:48px";var v=m.getContext("2d");return v.font="bold "+9*i+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=r,v.fillRect(0,0,s,c),v.fillStyle=t,v.fillText(e,u,l),v.fillRect(d,f,p,h),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(d,f,p,h),{dom:m,update:function(c,g){n=Math.min(n,c),o=Math.max(o,c),v.fillStyle=r,v.globalAlpha=1,v.fillRect(0,0,s,f),v.fillStyle=t,v.fillText(a(c)+" "+e+" ("+a(n)+"-"+a(o)+")",u,l),v.drawImage(m,d+i,f,p-i,h,d,f,p-i,h),v.fillRect(d+p-i,f,i,h),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(d+p-i,f,i,a((1-c/g)*h))}}},t)},477:e=>{"use strict";e.exports=function(e,t,r,n){try{try{var o;try{o=new window.Blob([e])}catch(t){(o=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(e),o=o.getBlob()}var a=window.URL||window.webkitURL,i=a.createObjectURL(o),s=new window[t](i,r);return a.revokeObjectURL(i),s}catch(n){return new window[t]("data:application/javascript,".concat(encodeURIComponent(e)),r)}}catch(e){if(!n)throw Error("Inline worker is not supported");return new window[t](n,r)}}},697:t=>{"use strict";t.exports=e},807:e=>{"use strict";e.exports=t}},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e].call(t.exports,t,t.exports,o),t.exports}return o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(740)})().default}));