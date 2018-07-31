const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
imagemin = require('gulp-imagemin');

gulp.task('sass', ()=>
    gulp.src('./assets/scss/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./assets/css'))
);
gulp.task('imagemin', () =>
    gulp.src('./assets/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./assets/images'))
);
gulp.task('default', ()=>{
    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch('./assets/images/**', ['imagemin']);
});