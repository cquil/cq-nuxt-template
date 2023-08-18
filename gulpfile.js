const gulp = require('gulp');
const watch = require('gulp-watch');
const fs = require('fs');
const path = require('path');

gulp.task('watch:styles', function() {
  watch('assets/css/objects/*.scss', function(file) {
    if (file.event === 'add') {
      const fileName = path.basename(file.path, '.scss');
      const importStatement = `@import "objects/${fileName}";\n`;
      fs.appendFile('assets/css/style.scss', importStatement, err => {
        if (err) throw err;
        console.log(`Added import for ${fileName}`);
      });
    }
  });
});
