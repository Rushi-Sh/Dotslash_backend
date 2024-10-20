const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    rate: {
        type: String,
        required: true
    },
    positives: {
        type: String,
        required: true
    },
    negatives: {
        type: String,
        required: true
    },   
}, {
    collection: "Suggestions"
});

const Suggestion = mongoose.model("Suggestions", SuggestionSchema);

module.exports = Suggestion