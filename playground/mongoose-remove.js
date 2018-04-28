const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findByOneAndRemove
// Todo.

Todo.findOneAndRemove({id: '5ae1b849c98e12e1b5b928fc'}).then((todo) => {

});

Todo.findByIdAndRemove('5ae1b849c98e12e1b5b928fc').then((todo) => {
  console.log(todo);
});