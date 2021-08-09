const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Input Title name"]
    },

    content: {
        type: String,
        require: [true, "Input content"]
    }
})

module.exports = Note = mongoose.model('Notes', NoteSchema)
