const mongoose = require('mongoose');
const ItemSchema = require('./Item')

const ListSchema = new mongoose.Schema({
    //whats going to in here?
    name: {
        type: String, 
        required: [true, "Input List Name"],
    },
    items: [ItemSchema.ItemSchema()]
})

module.exports =  List = mongoose.model('List', ListSchema);