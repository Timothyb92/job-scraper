const router = require('express').Router();
const jobRoutes = require('./jobs');
const noteRoutes = require('./notes');

router.use(jobRoutes);
router.use(noteRoutes);

module.exports = router;