"use strict";var precacheConfig=[["/AndyPhoto/index.html","ae4ada73b10402d71737cc8e03deba6b"],["/AndyPhoto/static/css/main.0b6eb11e.css","6976c0cd905e87785139e63eefab4206"],["/AndyPhoto/static/js/main.4c89de7e.js","11b6ad4352c26cdd786b160e0331000f"],["/AndyPhoto/static/media/DK1.08034258.jpg","08034258c3f4bbdcfa49eac539a4dec4"],["/AndyPhoto/static/media/aston1.b84c465e.jpg","b84c465efa6abeb8049b0753e7ec1b6e"],["/AndyPhoto/static/media/aston2.bb2cfee7.jpg","bb2cfee7c9863c1156be3fa0e20afa77"],["/AndyPhoto/static/media/birdface.31308c5a.jpg","31308c5a95d7f468ebd5c15050efb711"],["/AndyPhoto/static/media/birdtalon.c20f0053.jpg","c20f0053b8a8369c7afabfe7b8679e16"],["/AndyPhoto/static/media/brightbird1.4a0ac0f0.jpg","4a0ac0f0e6579217863ea952132c2303"],["/AndyPhoto/static/media/brightbird2.bd413c34.jpg","bd413c34fe11c4fdec9431252d5829de"],["/AndyPhoto/static/media/canyonbw.b6cd1252.jpg","b6cd12523430dbcff7e310b461513ae9"],["/AndyPhoto/static/media/canyoncolor.718d7f10.jpg","718d7f10aa0eb5040da4483818ea2e03"],["/AndyPhoto/static/media/dk3.a70ff371.jpg","a70ff371fde6e676e675499896cbf723"],["/AndyPhoto/static/media/goat1.562b8958.jpg","562b8958b63a6a931a22d7757648528d"],["/AndyPhoto/static/media/goat2.15be8005.jpg","15be80053f2e3cedf512bcb7b5c827a1"],["/AndyPhoto/static/media/mountaincloud.dfa52108.jpg","dfa52108a0c26fd5764a7565c126b5d0"],["/AndyPhoto/static/media/mountaincolor.793b8e47.jpg","793b8e47759bc277c447f124baeba71c"],["/AndyPhoto/static/media/porcha.e589b3c5.jpg","e589b3c57f7ff2eeda590ae4fa13c363"],["/AndyPhoto/static/media/porcha2.eaaae869.jpg","eaaae8698af048eedc7643c1d392bfb9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/AndyPhoto/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});