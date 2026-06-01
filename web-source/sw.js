const CACHE_NAME = "shivakali-64-yogini-v17";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/shivakali-hero.png",
  "./assets/mandir.png",
  "./assets/kali.png",
  "./assets/shiv.png",
  "./assets/mahavidya.png",
  "./assets/yogini.png",
  "./assets/puja.png",
  "./assets/sadhana.png",
  "./assets/stotra.png",
  "./assets/donation.png",
  "./assets/events.png",
  "./assets/gallery.png",
  "./assets/books.png"
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
