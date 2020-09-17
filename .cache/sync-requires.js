const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/acorona/tgd/web/main-site/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/acorona/tgd/web/main-site/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/acorona/tgd/web/main-site/src/pages/index.js")))
}

