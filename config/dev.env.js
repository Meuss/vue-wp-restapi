'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WP_REST_API: '"http://localhost:8888/wp-json/wp/v2/"',
});
