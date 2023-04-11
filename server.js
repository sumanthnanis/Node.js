const express =require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
const Note=require('./model/Node.js');
const app =express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
mongoose.connect('mongodb+srv://sumanth123:sumanth1234@nodetut.kr6jysw.mongodb.net/?retryWrites=true&w=majority').then(function()
{
    app.get('/',function(req,res) {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.json(response);
    });
    const noteRouter=require('./routes/Note.js');
    app.use('/notes',noteRouter);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Server started at PORT: " + PORT);
});