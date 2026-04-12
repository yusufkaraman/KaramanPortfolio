const CACHE_NAME = 'finance-tracker-v4.1.2';
const urlsToCache = [
    './',
    './index.html',
    './icon-512.png',
    './manifest.json'
];

// Install event - cache files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from network first, fallback to cache
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and external URLs
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Don't intercept API calls or external resources
    if (url.hostname !== location.hostname) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // If it's a valid response, cache it and return
                if (response && response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                // If network fails (offline), try the cache
                return caches.match(event.request);
            })
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            if (clientList.length > 0) {
                let client = clientList[0];
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) {
                        client = clientList[i];
                    }
                }
                return client.focus();
            }
            return clients.openWindow('./');
        })
    );
});
