const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const customerRoutes = require('../backend/routes/customers');

require('dotenv').config();

// server port number for development
const PORT = 4500;


// Instantiate app
const app = express();

//Connect to mongodb database
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/bank-customers', { useNewUrlParser: true });

// Check if db is properly connected.   
const db = mongoose.connection;

// On error
db.on('error', (err) => console.error('backend error', err));

// On success
db.once('open', () => console.log('Database connected'));

app.use(express.json());

app.use('/customer', customerRoutes)


app.get('/', (req, res) => {
    res.send('Welcome server is running on port 4500');
})



// listen to server port number 
app.listen(PORT, () => console.log('server started'));