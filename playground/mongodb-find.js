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

  // client.collection('Todos').find({
  //   _id: new ObjectID('5aac449fd841cf0993f94285')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))

  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });


  // client.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err)
// });


  client.collection('Users').find({name: 'Chris'}).count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });

  // client.close();
});