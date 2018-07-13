/* eslint-disable */
/*jshint esversion: 6 */

/* adding service worker */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then((reg) => {
		// registration worked
		if(reg.installing) {
			console.log('Service worker  is installing.');
		} else if(reg.waiting) {
			console.log('Service worker is installed.');
		} else if(reg.active) {
			console.log('Service worker is active.');
		}

		console.log('Registration succeeded. Scope is ' + reg.scope);
	
	}).catch((error) => {
		// registration failed
		console.log('Registration failed with ' + error);
	});
}