const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    //whats going to in here?
    name: {
        type: String, 
        required: [true, "Input item Name"]
    }
})

module.exports =  Item  = mongoose.model('Item', ItemSchema);
module.exports.ItemSchema = ItemSchema;