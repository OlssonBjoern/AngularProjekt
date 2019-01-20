const mongoose = require('mongoose');
// Post model
const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  imagePath: { type: String, required: true},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true}
});

module.exports = mongoose.model('Post', postSchema);
