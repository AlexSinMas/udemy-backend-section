const container = require('./source/startup/container');
const server = container.resolve("app");
const {MONGO_URI} = container.resolve("config");

const mongoose = require('mongoose');

mongoose
    .connect(MONGO_URI, {useNewUrlParser:true/*,useCreateIndex:true,useFindAndModify:false*/})
        .then(()=>server.start())
        .catch(console.log);