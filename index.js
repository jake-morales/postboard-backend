require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');



// Connect to database
console.log()
mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Middleware
const app = express();
app.use(cors());
app.use(express.json())

// Routes
//app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'))

// Start Express Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))