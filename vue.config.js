/* eslint-disable no-use-before-define */
/* eslint-disable import/no-dynamic-require */
// Declare root dirname globally
const path = require('path')

// eslint-disable-next-line no-underscore-dangle
global.__rootDirname = path.join(__dirname, 'dist')

const fs = require('fs')
const merge = require('webpack-merge')
const defaultConfiguration = require('./vue-config/config.default')

const environmentConfigurationPath = newFunction()
const environmentConfiguration = fs.existsSync(environmentConfigurationPath)
  ? require(environmentConfigurationPath)
  : {}

const config = merge(defaultConfiguration, environmentConfiguration)

module.exports = config
function newFunction() {
  return `./vue-config/config.${process.env.NODE_ENV}.js`
}
