"use strict";

const CACHE_NAME = 'homecarpetservice.com-1588115531828';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/8396e10278a51439/styles.css","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/8ddad17cb758a5b3/styles.css","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/e799df7db8d175d2/styles.css","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/a07bb493b5ae47c4/styles.css","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/b65e40bb42b43adb/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CIntersectionObserver%2CIntl.~locale.en-PK","//img1.wsimg.com/blobby/go/gpub/2a4f73fcd74c5421/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.57.29.js","//img1.wsimg.com/blobby/go/gpub/f7ea43564bae1107/script.js","//img1.wsimg.com/blobby/go/gpub/687bdb982ec0631e/script.js","//img1.wsimg.com/blobby/go/gpub/48f50bb7729dd52/script.js","//img1.wsimg.com/blobby/go/gpub/fb5b28d4a084ab4e/script.js","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/994cc21c089d157f/script.js","//img1.wsimg.com/blobby/go/gpub/2b566a756501bcb7/script.js","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/7577397050aaadb/script.js","//img1.wsimg.com/blobby/go/gpub/ef39d1d2e187d19/script.js","//img1.wsimg.com/blobby/go/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/gpub/4c589deb7303f8ce/script.js","//fonts.googleapis.com/css?family=Muli:400&display=swap","//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect"]');
const networkOnlyUrlsRegex = JSON.parse('["homecarpetservice.com/m/api/.*","homecarpetservice.com(?:/.*)?/ola/services/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/feed/post/","https://blog.apps.secureserver.net/v1/website/88d4a527-3c1e-49b3-b6aa-a5a7bd3e24f0/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["homecarpetservice.com(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function (event) {
  // eslint-disable-next-line no-console
  console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources());
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    if (!networkResponse.ok) {
      return networkResponse;
    }

    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        networkResponse.ok && cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);