const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/routes');

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',router)


app.listen(3000, (req, res) => {
    console.log('server is up');
})