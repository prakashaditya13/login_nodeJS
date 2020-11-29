var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencoderParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.use('/assets', express.static('style'));
//multer module use for multipart/form-data.


app.get('/login', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {

});

app.post('/login', urlencoderParser, (req, res) => {
    const data = {
        "Email": req.body.username,
        "password": req.body.password
    };
    res.status(200).json(data);
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000);