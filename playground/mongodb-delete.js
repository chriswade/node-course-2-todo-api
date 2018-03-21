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

  // deleteMany
  // client.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // client.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // client.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // client.close();

  client.collection('Users').findOneAndDelete({
    _id: new ObjectID("5aaed99d4b7697b2500241ae")
}).then((result) => {
    console.log(JSON.stringify(results, undefined, 2));
  }); 
});