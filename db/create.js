var url  = process.env.CLOUDANT_URL || 'http://localhost:5984'
  , nano = require('nano')(url);


nano.db.create('drawings', function(err, body) {
  if (err) return err;
  console.log('created drawings database');
});
