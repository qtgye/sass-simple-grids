const gulp = require('gulp');
const elixir = require('laravel-elixir');
const browserSync = require('browser-sync');

elixir.config.assetsPath = 'demo/assets';
elixir.config.publicPath = 'demo';


/**
 * Use elixir for development
 */
elixir(function (mix) {

  startBrowserSync();
  mix.sass('main.scss');

});


/**
 * Use native gulp for 'demo' task
 */
gulp.task('demo', ['sass'], startBrowserSync);


// HELPER FUNCTIONS
// ------------------------------------------------

function startBrowserSync() {

  if ( browserSync.initialized ) return;

  browserSync.initialized = true;

  browserSync.init({
    server: {
      baseDir: elixir.config.publicPath,
    },
    files: [
      'demo/**/*.html',
      'demo/**/*.css'
    ],
    port: 3131,
  });

}



