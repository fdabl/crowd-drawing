var port       = process.env.PORT || 4000
  , db         = require('./db')
  , express    = require('express')
  , code       = require('./code.json')
  , bodyParser = require('body-parser');


var app = express();
app.use(express.static('app'));
app.use(bodyParser());

app.get('/exp', db.getDrawings);
app.post('/exp', db.saveDrawing);
app.get('/code', function(req, res) {
  res.send(code);
});

app.listen(port);
