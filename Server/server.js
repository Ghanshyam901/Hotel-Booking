import  express  from 'express';
// const express = require('express');
// import router from './routes/auth'
import {readdirSync } from 'fs';
require('dotenv').config();



const app = express()

// route middleware
readdirSync('./routes').map((r)=>app.use('/api',require(`./routes/${r}`)))
// app.use('/api',router);

const port = process.env.PORT || 9000;

app.listen(port,()=>console.log(`server is running on port ${port}`));