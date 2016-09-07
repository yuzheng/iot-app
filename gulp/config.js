var path = require('path');

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
    src: [   // 今後ただコピーするファイルが増えそうなので配列にしておく
      src + '/www/index.html'
    ],
    dest: dest
  },

  // webpack設定
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  },

  css: {
    src: [  // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良い
      src + '/sass/**/!(_)*'  // ファイル名の先頭がアンスコはビルド対象外にする
    ],
    dest: dest + '/css/',
    output: 'app.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },

  watch: {
    js: relativeSrcPath + '/js/**',
    css: relativeSrcPath + '/sass/**',
    www: relativeSrcPath + '/www/index.html'
  }
}