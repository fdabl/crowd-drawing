var url  = process.env.CLOUDANT_URL || 'http://localhost:5984'
  , nano = require('nano')(url)
  , db   = nano.use('drawings');


var getAll = function(doc) {
  if (doc._id) { emit(doc._id, doc); }
};

var queries = {
  'views': {
    'getAll': {
      'map': getAll
    }
  }
};

db.insert(queries, '_design/drawings', function(err, res) {
  if (!err) { console.log('inserted!'); }
});
