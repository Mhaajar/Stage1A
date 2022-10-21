const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

// import  WebSocket from 'ws';
// const wss = new WebSocket.Server(
//     {
//         port:8080,
//     }
// );

require('dotenv').config();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// ------------------------ CNX TO DB -----------------------------

mongoose.connect(

    process.env.MONGO_URI,
    (err) =>{
        if (err) {
            console.log(err);
        }
        console.log('DB connected successfully');
    }

);

// ------------------------ User Routes -----------------------------

const user = require("./routes/utilisateurs")
app.use("/api/utilisateurs/",user)



//-------------------------Demande Routes --------------------------

const demande= require("./routes/demandes")
app.use("/api/demandes/",demande)



//---------------------Patient Routes-------------------------------

const patient = require("./routes/patientRoute")
app.use("/api/patients/",patient)



//---------------------Data Routes -------------------

// const data =require("./routes/dataRoute")
// app.use("/api/data",data)
// ------------------------ Port ------------------------

app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})