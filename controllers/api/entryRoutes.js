const router = require('express').Router();
const { User, Entry } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create/add a blog entry using async/await
router.post('/', withAuth,  async (req, res) => {
  try { 
    const entryData = await Entry.create({
    title: req.body.title,
    entry_content: req.body.content,
    user_id: req.session.user_id,
  });
  // if the entry is successfully created, the new response will be returned as json
  res.status(200).json(entryData)
} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', withAuth, async (req, res) => {
  try { const dbEntryData = await Entry.update({
      title: req.body.title,
      entry_content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    })
      if (!dbEntryData) {
      res.status(404).json({ message: 'No entry found with this id' });
      return;
      };
      res.json(dbEntryData);
    } catch (err) {
      res.status(500).json(err);
    };
});


router.delete('/:id', withAuth, async (req, res) => {
   try {
     const dbEntryData = await Entry.destroy({
       where: {
         id: req.params.id,
         user_id: req.session.user_id,
       },
     });
     if (!dbEntryData) {
       res.status(404).json({ message: 'No blog entry found with this id!' });
       return;
     }
     res.status(200).json(dbEntryData);
   } catch (err) {
     res.status(500).json(err);
   }
 });
 
 module.exports = router;
 