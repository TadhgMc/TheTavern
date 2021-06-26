const express = require("express");
const app = express();
const AccountControls = require('../../controllers/controller');

// create new user
app.post('/newuser', AccountControls.createAccount)

// get user info (for profile page)
app.route("/:id")
    .get(AccountControls.findById);

// add character
// router.route("/newcharacter")
//     .post(/* create new character controller */)
    
// update character
// router.route("/character/:id")
//     .put(/* update a character, controller */ )

module.exports = app;