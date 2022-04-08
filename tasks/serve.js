const { watch, series } = require('gulp');

const images = require('./images');
const static = require('./static');
const scss2css = require('./scss2css');
const scripts = require('./scripts');
const pug2html = require('./pug2html');

const server = require('browser-sync').create();

function readyReload(bs) {
  server.reload();
  bs();
}

module.exports = function serve(bs) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true,
  });

  watch('app/assets/img/**/*.{gif,png,jpg,svg,webp}', series(images, readyReload));
  watch('app/assets/static/**/*', series(static, readyReload));
  watch('app/assets/styles/**/*.scss', series(scss2css, readyReload));
  watch('app/scripts/**/*.js', series(scripts, readyReload));
  watch('app/views/**/*.pug', series(pug2html, readyReload));

  return bs();
};
