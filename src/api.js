const express = require("express");
const serverless = require('serverless-http');
const BASE_PATH = '/.netlify/functions/api';

//Modules
const User = require('./routes/user.route');

const app = express();

//Router
app.use(express.json());

app.use(`${BASE_PATH}`, User);
module.exports.handler = serverless(app);