
const mongoose=require("mongoose")


//PATIENT SCHEMA

const patientSchema =new mongoose.Schema({
    NomFamille:{
        type:String,
        required :true
    },
    Prenom:{
        type:String,
        required :true
    },
    birth:{
        type:String,
        required:true
    },
    age:{
        type:Number
        
    },
    adress:{
        type:String,
        required:true
    },
    sexe:{
        type:String
    },
    cin:{
        type:String,
        
    },
    phone:{
        type:String,
        required:true
    },
    demande: {
        type: mongoose.Schema.Types.ObjectId, ref: 'demandeSchema'
    }
});

module.exports = mongoose.model('patientSchema', patientSchema);