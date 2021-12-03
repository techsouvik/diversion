const express= require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const ejs=require('ejs');

const App = express();
App.use(bodyparser.json());
App.engine("html",require("ejs").);


