
const mongoose = require("mongoose");


///DEMANDE SCHEMA
const demandeSchema = new mongoose.Schema({

    typeAnalyse: {
        type: String,
        required: true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    },
    DateCreation: {
        type: String,
        required: true,
    },
    Patient:{
        type: mongoose.Schema.Types.ObjectId, ref: 'patientSchema'
    }


   
});

module.exports = mongoose.model('demandeSchema', demandeSchema);