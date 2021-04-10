const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'username is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

const User = model('User', UserSchema);

// get total count of thoughts and reactions
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
});

module.exports = User;