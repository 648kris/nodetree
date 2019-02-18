const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  selected: {type: String, default:'default'}
});

mongoose.model('user', userSchema);
