exports.config = {
  //hot: true,

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react'],
      plugins: [
        ['transform-runtime', {
          polyfill: false,
          regenerator: true
        }]
      ]
    },
    css: {
      modules: true
    },
    copyfilemon: {
      css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css.map'
      ],
      fonts: ['node_modules/bootstrap/dist/fonts']
    }
  }
};
