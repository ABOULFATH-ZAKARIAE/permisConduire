const express = require('express');

const app = express();

const mongoose = require('mongoose');

var bodyPrser = require('body-parser');

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(bodyPrser.urlencoded({extended:true}))

app.use(bodyPrser.json())


require('dotenv').config()





//Mongoose
mongoose.connect('mongodb+srv://aboulfath:aboulfath@cluster0.bqb3e.mongodb.net/Permis-Conduire?retryWrites=true&w=majority',{
    useNewUrlParser : true
}).then(()=>{
    console.log("seccuss");
}).catch(err =>{
    console.log('could not connect to the database . Exiting now..');
});




app.get('/', (req,res)=>{
    res.send('Welcome to Permis de conduit')
})
//_______________Import______________
require('./Router/Conducteur.router')(app);
require('./Router/Admins.router')(app);

app.listen(process.env.PORT, () => {
    console.log("connected to server " + process.env.PORT);
  });






