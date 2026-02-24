const CACHE_NAME = 'mj-v9-cache'; // 升级版本号
const ASSETS = [
    './index.html',
    './manifest.json',
    './sw.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting(); // 强制跳过等待，立即激活
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );

});
