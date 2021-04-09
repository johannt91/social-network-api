const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controler');

// GET route for users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET one, PUT, and DELETE
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;