const router = require('express').Router();
const { Entry, User, Comment} = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const entryData = await Entry.findAll({
      attributes: ['id', 'title', 'created_at', 'entry_content'],
      include: 
      [ { model: Comment, include: { User } },
        { User } 
      ]
    });
    const entries = entryData.map((entry) => entry.get({ plain: true }));

    res.render('homepage', {
      entries,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add', withAuth, (req, res) => {
  try { const dbAdd = Entry.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['id', 'title', 'created_at', 'entry_content'],
    include: [{ model: Comment, include: { User }}, 
      { User }
    ]
  })
    const entries = dbAdd.map(entry => entry.get({ plain: true }));
      res.render('addEntry', { 
        entries, 
        loggedIn: true 
      })
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

router.get('/entry/:id', withAuth, async (req, res) => {
  try {
    const entryData = await Entry.fEntry.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['id', 'title', 'created_at', 'entry_content'],
      include: [{ model: Comment, include: { User }}, 
        { User }
      ]
    })
    if (entryData) {
      const entry = entryData.get({ plain: true });

      res.render('editEntry', {
        entry

      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('/');
  }
});

module.exports = router;
