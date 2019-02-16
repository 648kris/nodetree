const mongoose = require('mongoose');
const { Schema } = mongoose;

const branchSchema = new Schema({
  user: String,
  leaves: String,
  name: String,
  timestamp: Number,
});

mongoose.model('branch', branchSchema);
