const router = require("express").Router();
const AccountControls = require('../../controllers/controller');

// create new user
router.route('/new')
    .post(AccountControls.createAccount);

// get user info (for profile page)
router.route("/:id")
    .get(AccountControls.findById);

module.exports = router