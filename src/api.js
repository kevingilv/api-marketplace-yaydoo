const express = require("express");
const serverless = require('serverless-http');
const BASE_PATH = '/.netlify/functions/api';
const cors = require('cors');
require('dotenv').config();

//Modules
const User = require('./routes/user.route');
const Product = require('./routes/product.route');

const app = express();

//Router
app.use(express.json());

//Configure headers and cors
app.use(cors());

//Config Routes to Modules
app.use(`${BASE_PATH}`, User);
app.use(`${BASE_PATH}`, Product);

module.exports.handler = serverless(app);