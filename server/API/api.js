const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')          
const User=require('../models/user')
const db="mongodb://0.0.0.0:27017/eventsdb"

mongoose.connect(db,err => {
   if(err) throw console.log(err);
   else console.log("successful...")
});

router.post('/register',(req,res)=>{
    let userData=req.body;
    let user=new User(userData);
    user.save((error,responseDate)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(responseDate);
        }
    })
})

router.post('/login',(req,res)=>{
    let userData=req.body;
    User.findOne({email: userData.email},(error,user)=>{
        if(error){
            console.log("error occured!")
        }
        else {
            if(!user){
                res.status(401).send("Invalid email...")
            }else{
                if(user.password !== userData.password){
                    res.status(401).send("Invalid password")
                }else{
                    res.status(200).send(user);
                }
            }
        }
    })
})

router.get('/events',(req,res)=>{
    let events=[
        {
          "id":"1",
          "name": "auto",
          "desc":"Auto Export"
        },
        {
            "id":"2",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"3",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"4",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"5",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"6",
            "name": "auto",
            "desc":"Auto Export"
          }
    ]
    res.json(events)
})

router.get('/special-events',(req,res)=>{
    let events=[
        {
          "id":"1",
          "name": "auto",
          "desc":"Auto Export"
        },
        {
            "id":"2",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"3",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"4",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"5",
            "name": "auto",
            "desc":"Auto Export"
          },
          {
            "id":"6",
            "name": "auto",
            "desc":"Auto Export"
          }
    ]
    res.json(events)
})

router.get('/',function(req,res){
     res.send("this is api");
})

module.exports=router;
//sudo service mongod start