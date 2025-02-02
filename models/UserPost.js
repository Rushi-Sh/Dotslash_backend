const mongoose = require('mongoose');

const UserPostSchema = new mongoose.Schema({
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
    tat: {
        type: String,
        default: "Not Assigned"
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved", "Rejected"],
        default: "Pending"
    }
}, {
    collection: "UserComplainData"
});

const UserComplain = mongoose.model("UserComplainData", UserPostSchema);

module.exports = UserComplain