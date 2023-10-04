const mongoose = require('mongoose');
const KeywordSchema = new mongoose.Schema({
    keyword: {
      type: String,
      required: true
    },
    rank: {
      type: Number,
      required: true
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    started_tracking: {
      type: Date,
      default: Date.now
    },
    search_volume: {
      type: Number,
      required: true
    }
  });

module.exports = KeywordSchema;