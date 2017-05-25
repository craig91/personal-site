const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const router = require('./routes/index.js');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use('/api', router)
app.get('./*', (req, res) =>
   res.sendFile(path.join(__dirname, './public/index.html'))
)

app.listen(3000,() => {
    console.log('Server Started!')
});
