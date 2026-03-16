const CACHE_NAME = "fairway-pwa-v1";
const ASSETS = ["/newfairwaytrading/", "/newfairwaytrading/index.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", e => { self.clients.claim(); });
self.addEventListener("fetch", e => { e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });