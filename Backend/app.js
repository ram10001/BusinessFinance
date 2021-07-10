var PORT = process.env.PORT || 3003;

var express                 =require("express"),
    app                     =express(),
    bodyParser               =require("body-parser"),
    cors                    = require('cors'),
    mongoose                =require("mongoose"),
    Worker                  =require("./models/workers");


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

mongoose.connect("mongodb://localhost:/busifine",{useNewUrlParser:true , useUnifiedTopology: true ,useFindAndModify: false },function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Connected to Database");
    }
});

// app.use(methodOverride("_method"));
app.set("view engine","ejs");



// ============================================API==============================================
// ============================================API==============================================


app.get("/showWorker",(req,res)=>{
    // res.json(data);
    Worker.find({},(err,worker)=>{
        if(err){
            console.log(err);
        }else{
            res.json(worker);
        }
    })
})

app.post("/addWorker", async (req,res)=>{
    console.log("This is Post");
    Worker.create(req.body,(err,newWorker)=>{
        if(err){
            console.log(err)
        }else{
            res.json(newWorker);
        }
    })
})

app.delete("/deleteWorker/:id",async (req,res)=>{
    console.log(req.params.id);
    Worker.findByIdAndRemove(req.params.id,(err,removeWorker)=>{
        if(err){
            console.log(err);
        }else{
            res.status(200).json({
                msg: removeWorker
            })
        }
    })
});

app.get("/viewWorker/:id",(req,res)=>{
    console.log("VIEWWWWWWW");
    console.log(req.params.id);
    Worker.findById(req.params.id,(err,worker)=>{
        if(err){
            console.log(err);
        }else{
            res.json(worker);
        }
    })
})


app.put("/editWorker/:id", async (req,res)=>{
    console.log("EDITTT IT");
    console.log(req.body);
    console.log(req.params.id);

    Worker.findByIdAndUpdate(req.params.id,req.body,(err,edited)=>{
        if(err){
            console.log(err);
        }else{
            console.log("PUT REQUEST SUCCESSFULL");
            res.json(edited);
        }
    })
});



// ============================================LISTEN==============================================
// ============================================LISTEN==============================================

app.listen(PORT,function(){
    console.log("Server has started.....");
});
