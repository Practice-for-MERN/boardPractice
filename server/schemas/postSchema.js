const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    id: {
        type:Number,
        required:true,
    title: {
        type:String,
        required:true,
    },
    fileURL: {
        type:String,
        required:true
    } 
}});

module.exports = mongoose.model("Post", postSchema);