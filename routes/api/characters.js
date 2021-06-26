const router = require("express").Router();
const AccountControls = require('../../controllers/controller');

// add character
router.route("/userID/:id/new")
    .post(AccountControls.createCharacter)
    
// get character
router.route("/:id")
    .get(AccountControls.findCharacter)

//update character
router.route("/update/:id")
    .put(AccountControls.updateCharacter)
module.exports = router