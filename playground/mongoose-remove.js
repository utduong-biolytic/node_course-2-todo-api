const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

//Todo.findOneAndRemove({_id: '5914d251a1a92e9e831a4c45'})

// Todo.findByIdAndRemove('5914d251a1a92e9e831a4c45').then((todo) => {
//     console.log(todo);
// });