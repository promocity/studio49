'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
  build: { // Òóò ìû óêàæåì êóäà ñêëàäûâàòü ãîòîâûå ïîñëå ñáîðêè ôàéëû
  html: 'build/',
  js: 'build/js/',
  css: 'build/css/',
  img: 'build/img/',
  fonts: 'build/fonts'
  },
  src: { // Ïóòè îòêóäà áðàòü èñõîäíèêè
    html: 'src/*.html',
    js: 'src/js/main.js',
    style: 'src/style/main.less',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'    
  },
  watch: {  // Òóò ìû óêàæåì, çà èçìåíåíèåì êàêèõ ôàéëîâ ìû õîòèì íàáëþäàòü
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.less',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'  
};

var config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9005,
  logPrefix: "testLogPrefix"
};

gulp.task('html:build', function () {
  gulp.src(path.src.html) // ‚ûáåðåì ôàéëû ïî íóæíîìó ïóòè
    .pipe(rigger()) // ðîãîíèì ÷åðåç rigger
    .pipe(gulp.dest(path.build.html)) // ‚ûïëþíåì èõ â ïàïêó build
    .pipe(reload({ stream: true })); // ˆ ïåðåçàãðóçèì íàø ñåðâåð äëß îáíîâëåíèé
});

gulp.task('js:build', function() {
  gulp.src(path.src.js) // àéäåì íàø main ôàéë
    .pipe(rigger()) // ðîãîíèì ÷åðåç rigger
    .pipe(sourcemaps.init()) // ˆíèöèàëèçèðóåì sourcemap
    .pipe(uglify()) // ‘îæìåì íàø js
    .pipe(sourcemaps.write()) // ðîïèøåì êàðòû
    .pipe(gulp.dest(path.build.js)) // ‚ûïëþíåì ãîòîâûé ôàéë â build
    .pipe(reload ({ stream: true })); // ˆ ïåðåçàãðóçèì ñåðâåð
});

gulp.task('style:build', function() {
  gulp.src(path.src.style) // ‚ûáåðåì íàø main.scss
    .pipe(sourcemaps.init()) // ’î æå ñàìîå ÷òî è ñ js
    .pipe(less()) // ‘êîìïèëèðóåì
    .pipe(prefixer({
      browsers: ['last 999 versions'],
      cascade: false
    })) // „îáàâèì âåíäîðíûå ïðåôèêñû
     .pipe(cssmin()) // ‘îæìåì
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css)) // ˆ â build
    .pipe(reload({ stream: true }));
});

gulp.task('image:build', function() {
  gulp.src(path.src.img) // ‚ûáåðåì íàøè êàðòèíêè
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img)) // ˆ áðîñèì â build
    .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'fonts:build',
  'image:build'  
]);

gulp.task('watch', function() {
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });  
});

gulp.task('webserver', function() {
  browserSync(config);
});

gulp.task('clean', function(cb) {
  rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);