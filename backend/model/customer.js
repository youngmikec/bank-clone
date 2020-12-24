const express = require('express');

const mongoose = require('mongoose');
const { stringify } = require('querystring');


// Set Customers Schema.
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    createdDate: { type: String, required: true, default: Date.now() },
    token: { type: String, required: true, default: '12345678910' }
});


// Export database Schema 
module.exports = mongoose.model('customer', customerSchema);