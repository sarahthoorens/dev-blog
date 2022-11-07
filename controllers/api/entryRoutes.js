const router = require('express').Router();
const { User } = require('../../models');
const Entry = require('../../models/Entry');

// route to create/add a blog entry using async/await
router.post('/', async (req, res) => {
  try { 
    const entryData = await Entry.create({
    title: req.body.title,
    content: req.body.content,
    entry_date: req.body.entry_date,
    user_id: req.session.user_id,
    include: [ {
      model: Comment,
      attributes: ['id', 'comment_content', 'entry_id', 'user_id', 'comment_date'],
    }], 
    include: [{
      model: User,
      attributes: ['username']
    }]
  });
  // if the entry is successfully created, the new response will be returned as json
  res.status(200).json(entryData)
} catch (err) {
  res.status(400).json(err);
}
});

router.delete('/:id', async (req, res) => {
   try {
     const entryData = await Project.destroy({
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
 