const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
   try {
     const dbCommentData = await Comment.findAll().catch((err) => { 
       res.json(err);
     });
     res.status(200).json(dbCommentData);
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });

router.post('/', withAuth, async (req, res) => {
  // check the session
  if (req.session) 
  try {
   const commentData = await Comment.create({
   comment_content: req.body.comment_content,
   entry_id: req.body.entry_id,
   user_id: req.session.user_id,
  })
  console.log(commentData);
  // if the comment is successfully created, the new response will be returned as json
  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});

router.delete('/:id', withAuth, async (req, res) => {
   try {
      const dbCommentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comments found with this id!' });
        return;
      }
      res.status(200).json(dbCommentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;