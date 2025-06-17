const mongoose = require ('mongoose')

const formEntrySchema = new mongoose.Schema({},{strict: false, timestamps: true });

module.exports = mongoose.model('FormEntry',formEntrySchema,'tat');