const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// Add a thought
router
.route('/:userId')
.post(addThought);

// Get all thoughts
router
.route('/')
.get(getAllThoughts);


// GET, PUT, and DELETE thought by id
router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

module.exports = router;