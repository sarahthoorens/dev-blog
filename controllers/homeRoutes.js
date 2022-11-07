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
router.get('/entries/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  // } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbEntryData = await Entry.findByPk(req.params.id);
        if(!dbEntryData) {
          res.status(404).json({message: 'No entry with this id!'});
          return;
      }
      const entry = dbEntryData.get({ plain: true });
      res.render('entry', entry);
      // , { 
      //   loggedIn: req.session.loggedIn }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);


// route to create/add a blog entry using async/await
router.post('/', async (req, res) => {
  try { 
    const entryData = await Entry.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    entry_date: req.body.entry_date,
    user_id: req.session.user_id,
  });
  // if the entry is successfully created, the new response will be returned as json
  res.status(200).json(entryData)
} catch (err) {
  res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
   try {
     const entryData = await Entry.destroy({
       where: {
         id: req.params.id,
         user_id: req.session.user_id,
       },
     });
 
     if (!entryData) {
       res.status(404).json({ message: 'No blog entry found with this id!' });
       return;
     }
 
     res.status(200).json(entryData);
   } catch (err) {
     res.status(500).json(err);
   }
 });
 
 module.exports = router;
 
module.exports = router