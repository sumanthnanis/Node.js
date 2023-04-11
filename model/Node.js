const mongoose = require('mongoose');
const noteSchema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        
    },
    dateAdded:{
        type:String,
        // default:date.now,
    }
});
module.exports=mongoose.model('Note',noteSchema);
