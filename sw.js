self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Nécessaire pour le critère d'installation Chrome Android
});