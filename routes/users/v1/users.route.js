const express = require('express');
const {
    getUsers,
    addAUser,
    updateAUser,
    deleteAUser,
    getUserDetails
} = require('../../../controller/users/users.controller');
const router = express.Router();


// router.route("/").get()

router.route("/")
    /**
     * to get all users
     */
    .get(getUsers)
    /***
     * to add a user
     */
    .post(addAUser)
    /****
     * to update a user
     */
    .patch(updateAUser)
    /*****
     * to delete a user
     */
    .delete(deleteAUser);

// to get a user details
router.route("/:id").get(getUserDetails);

module.exports = router;