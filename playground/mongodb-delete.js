//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //    console.log(result); 
    // });
    
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // })

    //delete challenge
    // db.collection('Users').deleteMany({name: 'Jon'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Users').deleteOne({_id: new ObjectID('59139d50a3444e435cd5a42b')}).then((result) => {
    //     console.log(result);
    // });
    
    //db.close();
});