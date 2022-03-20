const APP_PREFIX = 'FinancialNightmare-';
const VERSION = 'version_01';
const FILES_TO_CACHE = [
  "./index.html",
  "./public/css/styles.css",
  "./public/js/index.js"
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})