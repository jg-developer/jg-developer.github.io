const gulp = require('gulp'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify-es').default,
rename = require('gulp-rename'),
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
gulp.task('uglify', () => 
    gulp.src('./assets/js/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'))
);
gulp.task('imagemin', () =>
    gulp.src('./assets/images/**')
        .pipe(imagemin({progressive: true, optimizationLevel: 7}))
        .pipe(gulp.dest('./assets/images'))
);
gulp.task('default', ()=>{
    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch('./assets/js/app.js', ['uglify']);
    //gulp.watch('./assets/images/**', ['imagemin']);
});