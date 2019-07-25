var gulp = require('gulp');
var server = require('browser-sync').create();//执行函数返回对象
var sass = require('gulp-sass');

gulp.task('server',function(){
    server.init({
        server:"./",
        port:3002
    });
    gulp.watch(['./*.html','./css/*.css','./js/*.js']).on('change',server.reload)
    // gulp.watch('./*.html').on('change',server.reload)
});

gulp.task('sass',function (){
    gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./CSS'))
})
gulp.task('listen',function (){
    gulp.watch('./sass/*.scss',['sass'])
})