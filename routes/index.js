const router = require('express').Router();

router.use('/blogs', require('./blogs_Route.js'));
// router.use('/projects-list', require('./projects_Route.js'));

module.exports = router;
