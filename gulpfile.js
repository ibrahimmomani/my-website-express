var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    moment      = require('moment'),
    notify      = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css');

    require('gulp-help')(gulp, {
        description: 'Help listing.'
    });

gulp.task('uglify-js', 'Concat and Uglify JavaScript into a single app.min.js.', function() {
    gulp.src(['public/js/vendor/jquery.min.js', 'public/js/vendor/video.js' , 'public/js/flat-ui.min.js'])
        .pipe(concat('app'))
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(uglify())
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(rename({
            extname: ".min.js"
         }))
        .pipe(gulp.dest('public/js'))
        .pipe(notify('Uglified JavaScript (' + moment().format('MMM Do h:mm:ss A') + ')'));
});
/*Minify css */
gulp.task('minify-css', function() {
    gulp.src(['public/css/vendor/bootstrap.min.css', 'public/css/flat-ui.min.css', 'public/css/ibrahim.css'])
        .pipe(concat('app'))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(rename({
            extname: ".min.css"
         }))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('default', ['uglify-js', 'minify-css']);