// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');

var user = {name: 'Chris', age: 25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // client.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ab1a1d64b7697b250028401')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // client.collection('users').findOneAndUpdate({
  //   _id: new ObjectID('5ab429c87675d7ff3327380d')
  // }, {
  //   $inc: {
  //     age: 1
  // },
  //   $set: {
  //     email: "hi@christopherwa.de"
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })


  client.collection('users').update({
    _id: new ObjectID('5ab429c87675d7ff3327380d')
  },{
    $rename: {
      nmane: 'name'
    }
  })


// client.close();
});