const { task, series } = require('gulp')

const scss2css = require('./tasks/scss2css')
const scss2css_prod = require('./tasks/production/scss2css')

const pug2html = require('./tasks/pug2html')
const pug2html_prod = require('./tasks/production/pug2html')

const images = require('./tasks/images')
const images_prod = require('./tasks/production/images')

const scripts = require('./tasks/scripts')
const fonts = require('./tasks/fonts')
const static = require('./tasks/static')

const serve = require('./tasks/serve')
const serve_prod = require('./tasks/production/serve')

const clean = require('./tasks/clean')

let dev = series(pug2html, scss2css, scripts, fonts, static, images)
let prod = series(pug2html_prod, scss2css_prod, scripts, fonts, static, images_prod)

task('styles:dev', series(scss2css))
task('styles:prod', series(scss2css_prod))

task('pages:dev', series(pug2html))
task('pages:prod', series(pug2html_prod))

task('imagemin', series(images_prod))
task('scripts', series(scripts))
task('fonts', series(fonts))
task('static', series(static))

task('compile:dev', dev)
task('compile:prod', prod)

task('clean', series(clean))

task('serve:dev', series(serve))
task('serve:prod', series(serve_prod))

task('start', series(dev, serve))