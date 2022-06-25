const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()

app.use(express.static(__dirname + '/dist/birdwatcher'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname+'/dist/birdwatcher/index.html'));
});

//app.listen(process.env.PORT || 8080);


//Note to remember what you did last: made a .env file specifying the port, required .gotenv, and added .env to gitignore. Do not know if I even needed to do this but trying anything at this point



// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().PORT, app.settings.env);
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
