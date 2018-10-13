const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('default', ['librarycss', 'css', 'libraryjs', 'js',]);

gulp.task('css', () => {
    gulp.src('src/app/sass/**/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('src/static'));
});

librarycss = [
    "node_modules/font-awesome/css/font-awesome.css"
];

gulp.task('librarycss', () => {
    gulp.src(librarycss)
        .pipe(concat('library.css'))
        .pipe(gulp.dest('src/static'));
});

gulp.task('js', () => {
    gulp.src('src/app/djangoreact/build/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/static'));
});

libraryjs = [
    "node_modules/jquery/dist/jquery.js",
    "node_modules/popper.js/dist/umd/popper.js",
    "node_modules/materialize-css/dist/js/materialize.js",
    "node_modules/lodash/dist/lodash.js",
];

gulp.task('libraryjs', () => {
    gulp.src(libraryjs)
        .pipe(concat('library.js'))
        .pipe(gulp.dest('src/static'));
});

gulp.task('watch', ['css', 'js'], () => {
    gulp.watch('src/app/sass/**/**/*.scss', ['css']);
    gulp.watch('app/react/**/*.js', ['js']);
});
