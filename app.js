const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.listen(8000, function() {
    console.log('Server started on port 8000');
});