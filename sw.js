const CACHE_NAME='bible-v1';
const URLS=['index.html','https://unpkg.com/react@18/umd/react.production.min.js','https://unpkg.com/react-dom@18/umd/react-dom.production.min.js','https://cdn.tailwindcss.com'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(URLS)));self.skipWaiting()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cl=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cl));return res})).catch(()=>caches.match('index.html')))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))))});
