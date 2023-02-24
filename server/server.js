const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();
const api=require('./API/api')
app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("hello this is server");
})

const PORT=process.env.PORT || 3000
app.listen(PORT,function(req,res){
    console.log("server is running on port no :" + PORT);
})

app.use('/api',api);