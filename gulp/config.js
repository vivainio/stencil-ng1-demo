'use strict';

module.exports = {
    'scripts': {
        'src': [
            'app/main.ts',
        ], 
        'dest': 'js/',
      vendor: [
      './node_modules/almond/almond.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js'
      ]
    },
    'templates': {
      'html': './app/**/*.html',
      'file': 'templates.*',
      'dest': './app/',
      'options': {
        module: 'app.templates',
        standalone: true      }
    },
    'dev': {
        'root'  : './dev/'
    },
    'dist': {
        'root'  : './dist/',
    }
};
