const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

postSchema.index({ content: 'text' });

module.exports = mongoose.model('Post', postSchema);