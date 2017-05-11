var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User}

//examples

// var newUser = new User({
//     email: "jon@example.com"
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (e) => {
//     console.log('unable to save user', e);
// });