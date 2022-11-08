const router = require('express').Router();
const Comment = require('../models/Comment');
const User = require('../models/User')
const Entry = require('../models/Entry');
const withAuth = require('../utils/auth');

// GET all blog entries for homepage
router.get('/', async (req, res) => {
  try {
    const dbEntryData = await Entry.findAll({
      include: [
        {model: User},
        {model: Comment},
      ],
    })
    const entries = dbEntryData.map((entry) =>
    entry.get({ plain: true })
  );
  res.render('homepage', {
    entries
  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog entry
router.get('/entries/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbEntryData = await Entry.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [username],
          },
          {model: User}
        ],
      });
        if(!dbEntryData) {
          res.status(404).json({message: 'No entry with this id!'});
          return;
      }
      const entry = dbEntryData.get({ plain: true });
      res.render('entry', entry);
      // { 
      //   loggedIn: req.session.loggedIn }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }}
);
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


module.exports = router