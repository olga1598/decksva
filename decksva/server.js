const express = require('express');
// const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// connect to DB, call it
// connectDB();
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

// Init middleware
app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send("App is running"));

const PORT = process.env.PORT || 5000

app.listenerCount(PORT, () => console.log(`Server started on port ${PORT}`));