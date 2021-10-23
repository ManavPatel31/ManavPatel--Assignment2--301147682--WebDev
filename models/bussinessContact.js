//creating a model based on the database

let mongoose= require('mongoose');

let bussinessContactModel=mongoose.Schema(
    {
        name:String,
        number: Number,
        email:String,
        
    },
    {
        collection:"bussiness"
    }
);

module.exports=mongoose.model('Bussiness',bussinessContactModel);