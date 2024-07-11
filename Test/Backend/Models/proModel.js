const mongoose= require("mongoose");

const proSchema= mongoose.Schema({

    proname:String,
    prono:String,
    price:Number,
    quantity:Number


});

module.exports=mongoose.model("product",proSchema);