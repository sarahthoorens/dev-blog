const router = require('express').Router();
const Entry = require('../models/Entry');
const withAuth = require('../utils/auth');

// GET all blog entries for homepage
router.get('/', async (req, res) => {
  try {
    const dbEntryData = await Entry.findAll().catch((err) => { 
      res.json(err);
    });;
    const entries = dbEntryData.map((entry) =>
    entry.get({ plain: true })
  );
  res.render('allEntries', {
    entries,
    loggedIn: req.session.loggedIn,
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
      const dbEntryData = await Entry.findByPk(req.params.id);
        if(!dishData) {
          res.status(404).json({message: 'No entry with this id!'});
          return;
      }
      const entry = dbEntryData.get({ plain: true });
      res.render('entry', { 
        entry, 
        loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


module.exports = router