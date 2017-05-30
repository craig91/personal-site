const router = require('express').Router();
const Blog = require('../models').Blog;
const models = require('../models/index')


function allBlogs(req, res) {
  Blog.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log("error returning blogs from the database", error);
    res.sendStatus(500);
  })
}

function getOneBlog(req, res) {
  Blog.findById(req.params.id)
  .then(function(oneBlog) {
    res.send(oneBlog)
  })
  .catch((err) => console.log('one blog', error))
}

router.route('/')
.get(allBlogs)

router.route('/:id')
.get(getOneBlog)


module.exports = router;
