const {Schema, model} = require ('mongoose');

const courseSchema = new Schema({
    title: String,
    content: {
        type : String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, { 
    timestamps: true
})

module.exports = model('Course', courseSchema);