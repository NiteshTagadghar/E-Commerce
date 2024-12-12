const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userId: {
    type:String,
    required:true
  }
},
{ collection: 'users' }
);

module.exports = mongoose.model('users', UserSchema);
