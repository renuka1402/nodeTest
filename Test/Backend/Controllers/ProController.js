const proModel= require("../Models/proModel");



const proInsert=async(req,res)=>{
    let prono=req.body.prono;
    let pname=req.body.proname;
    let price=req.body.price;
    let quantity=req.body.quantity;
    
    const myPro= new proModel({
        proname:pname,
        prono:prono,
        price:price,
        quantity:quantity
    })

    myPro.save();
    res.send("data Saved")
}


const prodisplay=async(req,res)=>{
    proModel.find().then((data)=>{
        res.send(data);
    });
}


const UpdateShow=async(req,res)=>{

    proModel.find().then((data)=>{
        res.json(data);
    });

}


const recordDel=async(req,res)=>{
    let id= req.body.id;
    proModel.findByIdAndDelete(id).then((data)=>{
        res.send("record Deleted");
    })
}

const proEditData=async(req,res)=>{
    let id=req.body.id;
    proModel.findById(id).then((data)=>{
        res.json(data);
    })
}

const editSave=async(req,res)=>{
    let myid=req.body._id;
    let prono=req.body.prono;
    let pname=req.body.proname;
    let price=req.body.price;
    let quantity=req.body.quantity;

    proModel.findByIdAndUpdate(myid,{proname:pname,prono:prono,price:price,quantity:quantity}).then((data)=>{
        res.send("Updated");
    })
}

const proSearch=async(req,res)=>{
    let prono=req.body.pno;

    proModel.find({prono:prono}).then((data)=>{
        res.json(data);
    })
}

module.exports={
    proInsert,
    prodisplay,
    UpdateShow,
    recordDel,
    proEditData,
    editSave,
    proSearch,
}