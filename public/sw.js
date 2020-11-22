const CACHE_NAME = "rg-img-v1";

const CACHED_RESOURCES = ["/", "/icon/favicon.ico", "/manifest.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHED_RESOURCES))
  );
});

self.addEventListener("fetch", (e) =>
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
);
