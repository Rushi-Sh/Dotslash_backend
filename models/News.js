const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    newsType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    empId: {
        type: String,
        required: true,
        default:null
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    complainType: {
        type: String,
        required: true
    },
   
}, {
    collection: "News"
});

const News = mongoose.model("News", NewsSchema);

module.exports = News