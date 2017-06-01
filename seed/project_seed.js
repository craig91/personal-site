const Sequelize = require('../models').Sequelize;
const Project = require('../models').Project;

Project.sync({force: true})
.then(() => Project.bulkCreate([
  {
    image: '',
    DemoUrl: '',
    gitUrl: '',
    description: ''
  },
  {
    image: '',
    DemoUrl: '',
    gitUrl: '',
    description: ''
  },
  {
    image: '',
    DemoUrl: '',
    gitUrl: '',
    description: ''
  },
  {
    image: '',
    DemoUrl: '',
    gitUrl: '',
    description: ''
  }
]))
.catch((err) => console.log(err));
