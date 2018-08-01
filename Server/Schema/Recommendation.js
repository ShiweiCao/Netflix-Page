const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const RecommendSchema   = new Schema({
    title: String,
    id: Number,
    img: String,
},{collection:'recommendations', versionKey: false});

module.exports = mongoose.model('Recommendation', RecommendSchema);
