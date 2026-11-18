const CACHE_NAME = "shivakali-64-yogini-v19";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/shivakali-hero.jpg",
  "./assets/mandir.jpg",
  "./assets/kali.jpg",
  "./assets/shiv.jpg",
  "./assets/mahavidya.jpg",
  "./assets/yogini.jpg",
  "./assets/puja.jpg",
  "./assets/sadhana.jpg",
  "./assets/stotra.jpg",
  "./assets/donation.jpg",
  "./assets/events.jpg",
  "./assets/panchang.jpg",
  "./assets/gallery.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
