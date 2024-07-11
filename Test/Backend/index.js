var express= require("express");
var cors=require('cors');
var bodyparser=require('body-parser')
const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Product")

const proController= require("./Controllers/ProController")

const app=express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
 

app.post("/insert",proController.proInsert);

app.get("/prodisplay",proController.prodisplay);

app.get("/update",proController.UpdateShow);

app.post("/delete", proController.recordDel);

app.post("/geteditdata",proController.proEditData)

app.post("/editsave",proController.editSave);

app.post("/search",proController.proSearch);


app.listen(8000,()=>{
    console.log("Server running on Port 8000");
})