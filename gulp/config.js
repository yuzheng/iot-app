var path = require('path');
var webpack = require('webpack');


var dest = './build'; // 輸出的目錄
var src = './src';  // 來源的目錄
var relativeSrcPath = path.relative('.', src);  // 追記

module.exports = {
  dest: dest,

  // js設定
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false  //true
  },

  copy: {
    src: [   // www 檔案位置(之後新增www 可於此設定)
      src + '/www/index.html'
    ],
    dest: dest
  },

  // webpack設定
  webpack: {
    entry: [
      src + '/js/app.js'
    ],
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ]
  },

  css: {
    src: [  
      //src + '/sass/**/!(_)*'
      src + '/sass/app.scss'
    ],
    bootstrap: [
      src + '/sass/bootstrap.scss'
    ],
    dest: dest + '/css/',
    output: 'app.css',  // 輸出的css名稱
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },


  //bootstrap
  bootstrap_css: {
    src: [  
      src + '/sass/bootstrap.scss'
    ],
    dest: dest + '/css/',
    output: 'app.css',  // 輸出的css名稱
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },

  bootstrap_scripts: {
    src: [  
      src + '/bootstrap/assets/javascripts/**/*.js'
    ],
    dest: dest + '/js/',
    minify: false
  },

  watch: {
    js: relativeSrcPath + '/js/**',
    css: relativeSrcPath + '/sass/**',
    www: relativeSrcPath + '/www/index.html'
  }
}