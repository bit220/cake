var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var postcss = require('gulp-postcss');
var rigger = require('gulp-rigger');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var rimraf = require('rimraf');
var prefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
 return gulp.src('src/css/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(prefixer({ browsers: ['last 2 versions'], cascade: false }))
	.pipe(cssmin())
	.pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('dist/js'))
  	.pipe(browserSync.reload({
    	stream: true
  	}))
});

gulp.task('browserSync', function() {
 browserSync({
   server: {
     baseDir: "./"
   },
 })
});

gulp.task('default', ['browserSync', 'sass', 'scripts'], function() {
 gulp.watch('src/css/**/*.scss', ['sass']);
 gulp.watch('./*.html', browserSync.reload);
 gulp.watch('src/js/**/*.js', ['scripts']);
});






