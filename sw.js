// v11 - clear all old caches
const CACHE_NAME = 'fairway-v11';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network only - no caching, always fresh
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
