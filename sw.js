const CACHE_NAME = 'ant-cargo-v1';
const ASSETS = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// 安装时：把代码存入手机本地硬盘
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 拦截请求：优先从手机硬盘读取，不走网络
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
