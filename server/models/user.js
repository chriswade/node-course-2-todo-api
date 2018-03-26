var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

newUser.save().then((doc) => {
  console.log('Saved User', doc);
}, (e) => {
  console.log('Unable to save User');
});

module.exports = {User};