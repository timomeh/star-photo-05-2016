var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

var options = {
  sass: {
    outputStyle: 'expanded',
    sourceComments: true,
  },
  autoprefixer: {
    browsers: ['> 1%', 'last 3 version', 'ie 8', 'ie 9', 'Firefox ESR', 'opera 12.1', 'Android 3', 'Android 4'],
  },
  cleancss: {
    compatibility: 'ie8'
  },
};

gulp.task('sass:dev', function () {
  return gulp.src('assets/scss/**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass(options.sass).on('error', $.sass.logError))
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('assets'))
    .pipe(browserSync.stream());
});

gulp.task('sass:prod', function () {
  return gulp.src('assets/scss/**/*.scss')
    .pipe($.sass(options.sass).on('error', $.sass.logError))
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.cleanCss(options.cleancss))
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', ['sass:dev'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('assets/scss/**/*.scss', ['sass:dev']);
});
