/* */ 
var sass = require('node-sass');
var fs = require('fs');
sass.render({file: './src/main.scss'}, function(error, result) {
  if (!error) {
    fs.writeFile('./dist/RangerSlider.css', result.css, function(err) {
      if (!err) {
        console.log('css file written to disk');
      }
    });
  } else {
    console.log(error);
  }
});
