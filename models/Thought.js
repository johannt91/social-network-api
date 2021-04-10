const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        // custom id to prevent conflict with thought _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String
        },
        writtenBy: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: 'thought is required',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
            type: String,
            required: 'username is required'
        },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

const Thought = model('Thought', ThoughtSchema);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

module.exports = Thought;