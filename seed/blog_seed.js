const Sequelize = require('../models').Sequelize;
const Blog = require('../models').Blog;

Blog.sync({force: true})
.then(() => Blog.bulkCreate([
  {
    hero:'https://malcoded.com/wp-content/uploads/2016/11/angularLogo-large.png',
    title:'Next endeavor! Learning Angular 2 pt.2',
    shortDescript:'Every week I will be telling you guys about learning Angular 2 on my own!',
    post:'something'
  },
  {
    hero:'https://malcoded.com/wp-content/uploads/2016/11/angularLogo-large.png',
    title:'Next endeavor! Learning Angular 2 pt.3',
    shortDescript:'Every week I will be telling you guys about learning Angular 2 on my own!',
    post:'something'
  },
  {
    hero:'https://malcoded.com/wp-content/uploads/2016/11/angularLogo-large.png',
    title:'Next endeavor! Learning Angular 2 pt.4',
    shortDescript:'Every week I will be telling you guys about learning Angular 2 on my own!',
    post:'something'
  },
]))
.catch((err) => console.log(err));
