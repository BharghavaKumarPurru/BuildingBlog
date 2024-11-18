require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const connectDB=require('./server/config/db');

const app=express();
const port = process.env.PORT || 2000;

//connect to db
connectDB();

app.use(express.static('public'));

app.use(expressLayouts)
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


app.use('/',require('./server/routes/main'));


app.listen(port,()=>{
    console.log('server is up on port '+port);
});