const router = require('express').Router();
const entryRoutes = require('./entryRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/entries', entryRoutes);

module.exports = router;
