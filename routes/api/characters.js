const router = require("express").Router();
const AccountControls = require('../../controllers/controller');

// add character
router.route("/userID/:id/new")
    .post(AccountControls.createCharacter)
    
// update character
router.route("/character/:id")
    .put(/* update a character, controller */ )

module.exports = router