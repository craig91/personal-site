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


router.route('/')
.get(allBlogs)


module.exports = router;
