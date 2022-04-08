const { src, dest } = require('gulp');

module.exports = function fonts() {
  return src('./app/assets/fonts/*').pipe(dest('./dist/assets/fonts'));
};