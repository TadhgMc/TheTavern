const router = require('express').Router();
const Account = require('../../models/Account');
/* import alert from 'alert'; */

router.post('/in', async (req, res) => {
    try {
      const dbUserData = await Account.findOne({email: req.body.email});
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
  
      req.session.save(() => {
        req.session.loggedIn = true;
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

module.exports = router;