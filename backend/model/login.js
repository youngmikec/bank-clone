const express = require('express');
const mongoose = require('mongoose');

// Login schema
const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

// export schema
module.exports = mongoose.model('login', loginSchema);