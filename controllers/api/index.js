const router = require('express').Router();
const entryRoutes = require('./entryRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/entry', entryRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
