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
app.use(express.json())

// var allowedOrigins = ['http://localhost:3000',
//                       'http://thepostboardapp.com'];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use(cors())


// Routes
//app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'))

// Start Express Server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))