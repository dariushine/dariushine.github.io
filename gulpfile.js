const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
exports.default = () => (
    gulp.src('src/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);