const mongoose = require('mongoose');

const PredictedPostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    complainType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    issueLocation: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true,
    },
}, {
    collection: "UserComplainPredictionData"
});

const UserPredictedComplain = mongoose.model("UserComplainPredictionData", PredictedPostSchema);

module.exports = UserPredictedComplain