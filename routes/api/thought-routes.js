const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// POST a thought
router
.route('/:userId')
.post(addThought);

// GET all thoughts
router
.route('/')
.get(getAllThoughts);


// GET, PUT, and DELETE thought by id
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// POST reaction
router
.route('/:thoughtId/reactions')
.post(addReaction);

// DELETE a reaction
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;