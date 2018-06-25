# Restaurant Reviews App

## Introduction
For the **Restaurant Reviews** project, I took a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I added a service worker to begin the process of creating a seamless offline experience for my users.


## Installation
- Open [Restaurant Reviews](https://flanzana.github.io/restaurant-reviews-app/) and enjoy the website.
- If you prefer to use localhost, then follow the instructions:
 - Clone or download the project.
 - In file `js/dbhelper.js` uncomment row 13 and 14 and comment row 17.
 - In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 4444` (or some other port, if port 4444 is already in use.) For Python 3.x, you can use `python -m http.server 4444`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
 - With your server running, visit the site: `http://localhost:4444`.


## How I built the app
I have been provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it didn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality. I implemented the required features in three areas: responsive design, accessibility and offline use.

## Sources
- Code from Udacity classroom
- [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/)
- Map from OpenStreetMap