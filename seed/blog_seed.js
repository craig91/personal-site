const Sequelize = require('../models').Sequelize;
const Blog = require('../models').Blog;

Blog.sync({force: true})
.then(() => Blog.bulkCreate([
  {
    hero:'https://itsfoss.com/wp-content/uploads/2016/06/Xubutnu_wallpaper_5-e1466112243534.png',
    title:'Xubuntu 17.04 2017 review',
    heading:'My review of Xubuntu 17.04',
    shortDescript:'Know before you download, Another Linux review',
    post:'Xubuntu',
    blogId: 1
  },
  {
    hero:'https://i.ytimg.com/vi/XlqoPpLMdwY/maxresdefault.jpg',
    title:'Next endeavor! Learning Angular 2',
    heading:'Learning Angular 2 from the beginning',
    shortDescript:'Every week I will be telling you guys about learning Angular 2 on my own!',
    post:'Angular 2',
    blogId: 2
  },
  {
    hero:'https://cdn.wp.nginx.com/wp-content/uploads/2016/01/Slide-12.png',
    title:'NGINX setup for production level scaling',
    heading:'Build your own NGINX web server to scale smoothly',
    shortDescript:'Showing you how to configure your NGINX build for scalability',
    post:'NGINX',
    blogId: 3
  },
]))
.catch((err) => console.log(err));
