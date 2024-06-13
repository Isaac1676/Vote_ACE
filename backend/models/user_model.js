const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    appartenance: {
        type: String,
        required: true
    },
    voteToken: {
        type: Number,
        default: 1
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
