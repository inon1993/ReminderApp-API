const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/ReminderAppDB');

const remindersSchema = {
    title: String,
    body: String
};

const Reminder = mongoose.model("Reminder", remindersSchema);



app.listen(8000, function() {
    console.log('Server started on port 8000');
});