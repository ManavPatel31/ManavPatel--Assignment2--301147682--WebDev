//creating a model based on the database

let mongoose= require('mongoose');

let inventoryModel=mongoose.Schema(
    {
        item:String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h:Number,
            w:Number,
            uom: String
        }
    },
    {
        collection:"inventory"
    }
);

module.exports=mongoose.model('inventory',inventoryModel);