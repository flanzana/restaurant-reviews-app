var staticCacheName = 'restaurant-rev-v1';

var allCacheList = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/css/mediaqueries.css',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/js/dbhelper.js',
	'/js/sw-register.js',
	'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css',
	'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(staticCacheName).then(cache => {
			return cache.addAll(allCacheList);
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.filter(cacheName => {
					return cacheName.startsWith('restaurant-rev-v') &&
                 cacheName != staticCacheName;
				}).map(cacheName => {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

self.addEventListener('fetch', event => {
	let requestUrl = new URL(event.request.url);

	if (requestUrl.origin === location.origin) {
		if (requestUrl.pathname === '/') {
			event.respondWith(caches.match('/'));
			return;
		} else if (requestUrl.pathname.startsWith('/restaurant.html?id=')) {
			event.respondWith(caches.match('/restaurant.html'));
			return;
		}
	}

	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
	);
});