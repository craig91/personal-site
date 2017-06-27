const Sequelize = require('../models').Sequelize;
const Blog = require('../models').Blog;

Blog.sync({force: true})
.then(() => Blog.bulkCreate([
  {
    hero:'https://i.ytimg.com/vi/XlqoPpLMdwY/maxresdefault.jpg',
    title:'Next *endeavor*! Learning Angular 2 pt.1',
    shortDescript:'Every week I will be telling you guys about learning **Angular 2** on my own!',
    post:'PART 1',
    blogId: 1
  },
  {
    hero:'https://i.ytimg.com/vi/XlqoPpLMdwY/maxresdefault.jpg',
    title:'Next endeavor! Learning Angular 2 pt.2',
    shortDescript:'Every week I will be telling you guys about learning Angular 2 on my own!',
    post:'PART 2',
    blogId: 2
  },
  {
    hero:'https://i.ytimg.com/vi/XlqoPpLMdwY/maxresdefault.jpg',
    title:'Next endeavor! Learning Angular 2 pt.3',
    shortDescript:'Every week I will be telling you guys about learning Angular 2 on my own!',
    post:'PART 3',
    blogId: 3
  },
]))
.catch((err) => console.log(err));
