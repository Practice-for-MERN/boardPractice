const mongoose = require('mongoose');
const forumDB = mongoose.connect('mongodb://localhost:27017/reForum')
    .then(() => {
        console.log("Connection to DB established");     
    }) 
    .catch((err)=> {
        console.log("DB connection error");
        console.log(err);
    })

module.exports = forumDB; 