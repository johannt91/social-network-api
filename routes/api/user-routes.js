const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

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

// ADD friend
router
.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;