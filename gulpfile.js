const gulp  = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('default', () => {
    return gulp.src(['bower_components/pixi.js/bin/pixi.js','js/src/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('js/build'));
});

gulp.task('release', () => {
    return gulp.src(['bower_components/pixi.js/bin/pixi.js','js/src/**/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('js/build'));
});