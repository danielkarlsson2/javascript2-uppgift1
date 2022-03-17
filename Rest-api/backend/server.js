const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI;
// const mongoURI = "mongodb+srv://DanielK:EC4321@danielscluster.5pfsc.mongodb.net/webbshop?retryWrites=true&w=majority"



app.listen(PORT, () => console.log('Server running: ' + serverURI));
mongoose.connect(mongoURI, () => console.log('Connected to DB'));