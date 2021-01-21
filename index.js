var express = require('express');
var app = express(); // serves files from the root directory
app.use(express.static('./dist'));app.listen(8080, function () {    
  console.log('Listening at http://localhost:8080');  
});
