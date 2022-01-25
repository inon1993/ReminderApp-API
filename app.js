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

app.get('/', function(req, res) {
    Reminder.find(function(err, foundReminders) {
        if(!err) {
            res.send(foundReminders);
        } else {
            console.log(err);
        }
    });
});

app.post('/', function(req, res) {
    const newReminder = new Reminder({
        title: req.body.title,
        body: req.body.body
    });
    newReminder.save(function(err) {
        if(!err){
            res.send('Successfully added a new reminder');
        } else {
            res.send(err);
        }
    });
});

app.listen(8000, function() {
    console.log('Server started on port 8000');
});