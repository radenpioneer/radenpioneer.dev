import { clientsClaim } from 'workbox-core'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { precacheAndRoute } from 'workbox-precaching'
import {
  pageCache,
  imageCache,
  staticResourceCache,
  warmStrategyCache,
} from 'workbox-recipes'

declare let self: ServiceWorkerGlobalScope

// precaching & updating options
precacheAndRoute(self.__WB_MANIFEST)
self.skipWaiting()
clientsClaim()

warmStrategyCache({
  urls: ['/index.html', '/offline/index.html'],
  strategy: new CacheFirst(),
})

registerRoute(
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'font-cache',
    plugins: [
      // @ts-ignore
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // @ts-ignore
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 10,
      }),
    ],
  })
)

staticResourceCache()
pageCache()
imageCache()
