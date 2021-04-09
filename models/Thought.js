const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: 'thought is required',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
            type: String,
            required: 'username is required'
        }
    // reactions: [reactionsSchema]
},
// {
//     toJSON: {
//         virtuals: true
//     },
//     id: false
// }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;