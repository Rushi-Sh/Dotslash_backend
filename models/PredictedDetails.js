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
    complain_id:{
        type: String,
        required: true,
    },
    predicted_image_url:{
        type: String,
        required: true,
    },
    model_output:{
        type: [mongoose.Schema.Types.Mixed], 
        default: [],
    },
    status:{
        type: mongoose.Schema.Types.Mixed, 
        default: null,
    },
    TAT:{
        type: mongoose.Schema.Types.Mixed, 
        default: null,
    },
    pothole_detected:{
        type: Number,
        default: 0,
    },
    avg_confidence_level:{
        type: Number, 
        default: 0,
    },
    output_label:{
        type: [mongoose.Schema.Types.Mixed], 
        default: [],
    }
}, {
    collection: "UserComplainPredictionData"
});

const UserPredictedComplain = mongoose.model("UserComplainPredictionData", PredictedPostSchema);

module.exports = UserPredictedComplain;