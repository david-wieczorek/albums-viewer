"use strict";

const merge = require('webpack-merge');
const validate = require('webpack-validator');

const PATHS = require('./webpack-paths');
const loaders = require('./webpack-loaders');

const common = {
   entry: { // The entry file is index.js in /client/src
      app: PATHS.src
   },
   output: { // The output defines where the bundle output gets created
      path: PATHS.dist,
      filename: 'bundle.js'
   },
   module: {
      loaders: [
         loaders.babel, // Transpiler
         loaders.sass, // Load scss
         loaders.font // Load fonts
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx'] // the extensions to resolve
   }
};

let config;
// The switch defines the different configuration as development requires webpack-dev-server
switch(process.env.NODE_ENV) {
   case 'build':
   config = merge(
      common,
      { devtool: 'source-map' } // SourceMaps on separate file
   );
   break;
   case 'development':
   config = merge(
      common,
      { devtool: 'eval-source-map' }, // Default value
      loaders.devServer({
         host: process.env.host,
         port: 9000
      })
   );
}

// We export the config
module.exports = validate(config);
