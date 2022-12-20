const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

function defaultTask(cb){
  console.log('gulp 4 成功');
  cb();
}

exports.do = defaultTask

