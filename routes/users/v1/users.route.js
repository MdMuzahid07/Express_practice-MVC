let express = require('express');
const {
    getUsers,
    addAUser,
    updateAUser,
    deleteAUser,
    bulkUpdate,
    getRandomUser
} = require('../../../controller/users/users.controller');
const router = express.Router();


// router.route("/").get()

router.route("/").get(getUsers)

router.route("/").post(addAUser)


// Don't need send id from body to update user data
router.route("/:id").patch(updateAUser)


// for bulk update need to send id
router.route("/bulk-update").patch(bulkUpdate)

router.route("/:id").delete(deleteAUser);

router.route("/random").get(getRandomUser);

module.exports = router;