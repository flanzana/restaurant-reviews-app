var staticCacheName = 'cacherest-v1';

var allCacheList = [
	'/',
	'/restaurant-reviews-app/index.html',
	'/restaurant-reviews-app/restaurant.html',
	'/restaurant-reviews-app/css/styles.css',
	'/restaurant-reviews-app/css/mediaqueries.css',
	'/restaurant-reviews-app/data/restaurants.json',
	'/restaurant-reviews-app/img/1.jpg',
	'/restaurant-reviews-app/img/2.jpg',
	'/restaurant-reviews-app/img/3.jpg',
	'/restaurant-reviews-app/img/4.jpg',
	'/restaurant-reviews-app/img/5.jpg',
	'/restaurant-reviews-app/img/6.jpg',
	'/restaurant-reviews-app/img/7.jpg',
	'/restaurant-reviews-app/img/8.jpg',
	'/restaurant-reviews-app/img/9.jpg',
	'/restaurant-reviews-app/img/10.jpg',
	'main.js',
	'restaurant_info.js',
	'dbhelper.js',
	'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.css',
	'https://api.mapbox.com/mapbox-gl-js/v0.46.0/mapbox-gl.js',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];


self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll(allCacheList);
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('cacherest-') &&
						cacheName != staticCacheName;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});