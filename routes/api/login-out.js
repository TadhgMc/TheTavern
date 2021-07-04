const router = require('express').Router();
const Account = require('../../models/Account');
/* import alert from 'alert'; */
let currentUserId;

router.post('/in', async (req, res) => {
    try {
      const dbUserData = await Account.findOne({email: req.body.email}, function (err, data) {
        currentUserId = data;
        console.log(currentUserId);
      })
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(async () => {
        req.session.loggedIn = true;
        currentUserId = await Account.findOne({email: req.body.email}, function (err, data) {
          console.log(data);
        })
        console.log("you are now logged in")
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.post('/out', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

// returns client side if logged in
router.get('/isLoggedIn', (req, res) => {
  if (req.session.loggedIn === true) {
    res.send(true)
  } else {
    res.send(false)
  }
});

//get current logged in user id
router.get('/currentUserId', async (req, res) => {
  if (req.session.loggedIn) {
    res.json(currentUserId)
  }
})

module.exports = router;