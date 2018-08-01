const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const MylistSchema   = new Schema({
    title: String,
    id: Number,
    img: String,
},{collection:'mylists', versionKey: false});

module.exports = mongoose.model('Mylist', MylistSchema);
