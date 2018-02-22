var gulp = require("gulp");
var csslint = require("gulp-csslint");

gulp.task("css", function() {
    gulp
        .src("example.css")
        .pipe(csslint())
        .pipe(csslint.formatter())
        .on('end', function() {
            console.log('\n--------\nAnálisis Finalizado\n--------\n');
        });
});


gulp.task('default', function() {
    gulp.watch('./example.css', ['css']);
});