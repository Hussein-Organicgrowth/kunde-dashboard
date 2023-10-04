const mongoose = require('mongoose');

const KeywordSchema = require('./KeywordModel');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  domainrating: {
    type: Number,
    required: true
  },
  refdomains: {
    type: Number,
    required: true
  },
  backlinks: {
    type: Number,
    required: true
  },
  keywords: [KeywordSchema],
  
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;