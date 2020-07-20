const router = require('express').Router();
const bookRoutes = require('./books');
const { route } = require('./books');

//books
router.use('/books', bookRoutes);

module.exports = router;
