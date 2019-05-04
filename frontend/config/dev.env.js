'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://192.168.99.100:5000"' // Disconnected Network
  // ROOT_API: '"http://0.0.0.0:5000"' // Local Network
})
