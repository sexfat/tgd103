const { src, dest, series, parallel, watch } = require("gulp");

function defaultTask(cb) {
  console.log("gulp 4 成功");
  cb();
}

function TaskA(cb) {
  console.log("A");
  cb();
}

function TaskB(cb) {
  console.log("B");
  cb();
}

function TaskC(cb) {
  console.log("C");
  cb();
}

function TaskD(cb) {
  console.log("D");
  cb();
}

function TaskE(cb) {
  console.log("E");
  cb();
}

// a -> b
exports.async = series(TaskA, TaskB);

// c , d  -> finish
exports.sync = parallel(TaskC, TaskD);

exports.all = series(TaskA, TaskB, parallel(TaskC, TaskD), TaskE);

// src -> dest

function move() {
  return src("src/index.html").pipe(dest("dist"));
}

exports.m = move;

const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

//  css minify
function cssminify() {
  return src("src/css/style.css").pipe(cleanCSS()).pipe(dest("dist/css"));
}

exports.cssm = cssminify;

// js minify
function jsmini() {
  return src("src/js/*.js").pipe(uglify()).pipe(dest("dist/js"));
}

exports.js = jsmini;

// sass complier
const sass = require("gulp-sass")(require("sass"));

// 沒壓縮css
function sassStyle() {
  return src("src/sass/*.scss")
    .pipe(sass.sync().on("error", sass.logError)) // sass ->css
    .pipe(dest("dist/css"));
}

// 有壓縮
function sassStyleMini() {
  return src("src/sass/*.scss")
    .pipe(sass.sync().on("error", sass.logError)) // sass ->css
    .pipe(cleanCSS()) // minify css
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest("dist/css"));
}

exports.style = sassStyle;
exports.styleMini = sassStyleMini;

// html template
const fileinclude = require("gulp-file-include");

function html() {
  return src("src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dist/"));
}

exports.template = html


// 打包圖片
function img(){
   return src('src/images/*.*').pipe(dest('dist/images'))
}




exports.do = defaultTask;


// 監看所有變動
function watchfile(){
  watch(['src/*.html' , 'src/layout/*.html'] ,html)
  watch(['src/sass/*.style' , 'src/sass/**/*.scss'] ,sassStyle)
  watch('src/js/*.js' , jsmini)
  watch(['src/images/*.*', 'src/images/**/*.*'] , img)
}

const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['src/*.html' , 'src/layout/*.html'] ,html).on('change' , reload)
    watch(['src/sass/*.style' , 'src/sass/**/*.scss'] ,sassStyle).on('change' , reload)
    watch('src/js/*.js' , jsmini).on('change' , reload)
    watch(['src/images/*.*', 'src/images/**/*.*'] , img).on('change' , reload)
    done();
}

//開發用
exports.default = browser;


// 打包上線用
exports.package = parallel(html ,sassStyleMini , jsmini , img)
