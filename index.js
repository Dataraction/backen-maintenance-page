var express = require('express');
var app = express(); // serves files from the root directory
app.use(express.static('./dist'));


app.use(function(req, res, next){
	res.redirect('/');
  // res.status(404);

  // // respond with html page
  // if (req.accepts('html')) {
  //   res.render('404', { url: req.url });
  //   return;
  // }

  // // respond with json
  // if (req.accepts('json')) {
  //   res.send({ error: 'Not found' });
  //   return;
  // }

  // // default to plain-text. send()
  // res.type('txt').send('Not found');
});

app.listen(8080, function () {    
  console.log('Listening at http://localhost:8080');
});