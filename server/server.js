var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc)
    }).catch((e) => {
        res.status(400).send();
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }).catch((e) => {
        res.status(400).send();
    });
});

//GET /todos/123456
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // validate id
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }    
   
    Todo.findById(id).then((todo) => {
        if(!todo)
        {
            return res.status(404).send();
        }   
        res.status(200).send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) =>{
    // get the id
    var id = req.params.id;
    //validate id- if not valid send 404
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo) =>
    {
        if(!todo){
            return res.status(404).send();
        }

        res.status(200).send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app}