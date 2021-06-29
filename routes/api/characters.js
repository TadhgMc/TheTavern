const router = require("express").Router();
const AccountControls = require('../../controllers/controller');

// add character
router.route("/userid/:id/new")
    .post(AccountControls.createCharacter)
    
// get, delete, update character
router.route("/:id")
    .get(AccountControls.findCharacter)
    .delete(AccountControls.removeCharacter)
    .put(AccountControls.updateCharacter)

module.exports = router