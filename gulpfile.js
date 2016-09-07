// 此作法可以避免 gulpfile.js 過於肥大
// 故將 task 拆分至./gulp/tasks
// 但需要設定 ./gulp/config.js
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });