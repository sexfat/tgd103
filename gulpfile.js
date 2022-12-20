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


function TaskA(cb){
    console.log('A');
    cb();
  }


function TaskB(cb){
    console.log('B');
    cb();
}

function TaskC(cb){
    console.log('C');
    cb();
}

function TaskD(cb){
    console.log('D');
    cb();
}

function TaskE(cb){
    console.log('E');
    cb();
}

// a -> b 
exports.async = series(TaskA , TaskB);

// c , d  -> finish
exports.sync = parallel(TaskC , TaskD);

exports.all = series(TaskA, TaskB , parallel(TaskC , TaskD) , TaskE)








exports.do = defaultTask

