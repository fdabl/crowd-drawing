var url  = process.env.CLOUDANT_URL || 'http://localhost:5984'
  , nano = require('nano')(url)
  , db   = nano.use('drawings');


exports.saveDrawing = function(req, res, next) {
  var drawing = { drawing: JSON.parse(req.body.drawing) };

  db.insert(drawing, function(err, doc) {
    if (err) return next(err);
    res.send(doc);
  });
};

exports.getDrawings = function(req, res, next) {
  db.list({ include_docs: true }, function(err, body) {

    var drawings = body.rows.map(function(obj) {
      return obj.doc.drawing;
    });
    res.send(drawings);
  });
};
