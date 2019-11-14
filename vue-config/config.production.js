const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer') // eslint-disable-line
  .BundleAnalyzerPlugin
const PrerenderSPAPlugin = require('prerender-spa-plugin') // eslint-disable-line

const prerenderedRoutesList = ['/login', '/home', '/', 'dist']

module.exports = {
  configureWebpack: {
    plugins: [
      /* Refer to https://www.npmjs.com/package/webpack-bundle-analyzer for more details */
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true
      }),
      new PrerenderSPAPlugin({  // eslint-disable-line
        // eslint-disable-next-line no-undef
        staticDir: path.join(__rootDirname),
        routes: prerenderedRoutesList
      })
    ]
  }
}
