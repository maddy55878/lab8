var mongoose = require('mongoose');

// parent schema
var foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// model name, schema name, collection name (optional)
// collection name will be lower case and plural 
// collection name will be Students by default 
mongoose.model('Food', foodSchema, 'food');