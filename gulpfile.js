var gulp = require('gulp');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var less = require('gulp-less');
var watch = require('gulp-watch');
var coffee = require ('gulp-coffee');
var minifyCSS = require('gulp-minify-css');

// Output dir (static files in docpad)
var filesDir = './src/files';

// Compile coffeescript
gulp.task('coffee', function() {
    gulp
        .src([
            './front/coffee/**/*.coffee',
        ])
        .pipe(
            coffee({bare: true})
                .on('error', console.log)
        )
        .pipe(gulp.dest('./front/js'));
});

// Concat JS
gulp.task('js', ['coffee'], function() {
    gulp
        .src([
            './front/bower_components/jquery/dist/jquery.min.js',
            './front/bower_components/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('naneau.js'))
        .pipe(gulp.dest(filesDir + '/js'));
});

// Move fonts
gulp.task('fonts', function(){
    gulp.src([
            './front/bower_components/font-awesome/fonts/**',
            './front/bower_components/font-mfizz/fonts/**'
        ])
        .pipe(flatten())
        .pipe(gulp.dest(filesDir + '/fonts'));
});

// Direct compile of less (much faster than docpad)
gulp.task('less', function() {
    gulp
        .src(['./front/less/naneau.less'])
        .pipe(
            less()
                .on('error', console.log)
        )
        .pipe(minifyCSS())
        .pipe(gulp.dest(filesDir + '/css'))
        .pipe(gulp.dest('./out/css'));
});

// Watch the less for changes
gulp.task('watch', function() {
    gulp.watch('./front/less/**/*.less', ['less']);
    gulp.watch('./front/coffee/**/*.coffee', ['js'])
});

gulp.task('default', ['pack', 'less']);
gulp.task('pack', ['js', 'fonts']);
