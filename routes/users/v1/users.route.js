let express = require('express');
const {
    getUsers,
    addAUser,
    updateAUser,
    deleteAUser,
    getUserDetails,
    getRandomUser
} = require('../../../controller/users/users.controller');
const router = express.Router();


// router.route("/").get()

router.route("/").get(getUsers)

router.route("/").post(addAUser)

router.route("/:id").patch(updateAUser)

router.route("/:id").delete(deleteAUser);

router.route("/random").get(getRandomUser);

module.exports = router;