/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Trigger a service worker update on route change
exports.onRouteUpdate = () => {
  navigator.serviceWorker.register('/sw.js').then(reg => {
    reg.update()
  })
}
