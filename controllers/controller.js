const Account = require('../models/Account');
const Character = require('../models/Character');

const AccountControls = {
    findById: function(req, res) {
        Account
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },
    createAccount: function(req, res) {
        Account
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },
    updateAccount: function(req, res) {
        Account
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },
    removeAccount: function(req,res) {
        Account
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },
    createCharacter: function(req, res) {
        Character
            .create(req.body)
            .then(({ _id }) => Account.findOneAndUpdate({}, { $push: { characters: _id } }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    // findCharacter: function(req, res) {
    //     Character
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err));
    // },
    //updateCharacter: function(req, res) {
    // Character
    //         .findOneAndUpdate({_id: req.params.id}, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(500).json(err));
    // },
    //removeCharacter:
}

module.exports = AccountControls;

// use to save characters to users
/*app.post("/submit", ({ body }, res) => {
    db.Note.create(body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  }); */

// use to ~ get character sheets
/* app.get("/populateduser", (req, res) => {
  db.User.find({})
    .populate("notes")
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
}); */