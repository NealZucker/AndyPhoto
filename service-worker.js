"use strict";var precacheConfig=[["/AndyPhoto/index.html","7820ee64711e6d1f7d057867e9fb73b8"],["/AndyPhoto/static/css/main.5559b09c.css","2911d2ff56cbc32632e759028ca98bb3"],["/AndyPhoto/static/js/main.d170b174.js","f8b1131e90be587da827fbac372d55b1"],["/AndyPhoto/static/media/DK1.40e10c81.jpg","40e10c81c4c30848abd835c0aaa59d70"],["/AndyPhoto/static/media/DK2.acb347ec.jpg","acb347ec84926f261247f5ff238adad3"],["/AndyPhoto/static/media/aston1.41df11f5.jpg","41df11f55fc9b1118550bf1d3b5a7dcd"],["/AndyPhoto/static/media/aston2.dd13734d.jpg","dd13734df4a0d40bd4ca83226e17da1b"],["/AndyPhoto/static/media/birdface.cd0b9a67.jpg","cd0b9a67e8ac174beec1f234a8638d2f"],["/AndyPhoto/static/media/birdtalon.ee940179.jpg","ee940179f1aa5d846ed4173bc51380a5"],["/AndyPhoto/static/media/brightbird1.9c61be4a.jpg","9c61be4a22c42113159cd79af3f15bfd"],["/AndyPhoto/static/media/brightbird2.12010706.jpg","12010706ed8f183efe698aaa41acc55a"],["/AndyPhoto/static/media/canyonbw.ab2676bd.jpg","ab2676bd9f55d76a2540f89d6a4c653f"],["/AndyPhoto/static/media/canyoncolor.2914c363.jpg","2914c3631e22013b16a5077e344668df"],["/AndyPhoto/static/media/goat1.47257c4d.jpg","47257c4db6aed789e0b42a7e1f69f2cb"],["/AndyPhoto/static/media/goat2.d29724e4.jpg","d29724e4f6b02f9014a5f49448e977a1"],["/AndyPhoto/static/media/mountaincloud.860a4c7a.jpg","860a4c7a3778f5c68c45d245edcc098b"],["/AndyPhoto/static/media/mountaincolor.0fc140bf.jpg","0fc140bffef9fff58beb05960ae97c5f"],["/AndyPhoto/static/media/porcha.f210b446.jpg","f210b4466d861330752cb795d600608b"],["/AndyPhoto/static/media/porcha2.0f1a317b.jpg","0f1a317bb7dd6b5e1ee0b20d0a6cd501"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/AndyPhoto/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});