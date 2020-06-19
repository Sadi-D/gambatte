const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  avatarColor: {
    type: Number,
    required: true
  },
  bio: {
    type: String
  },
  createdAt: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  followers: {
    type: [String]
  },
  following: {
    type: [String]
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConfirm: {
    type: String,
    required: true
  },
  showEmail: {
    type: Boolean,
    required: true
  },
  sports: {
    type: [String],
    required: false
  },
  level: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('User', UserSchema);
