
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Patient = require('../models/patient');



//  Get patient
const getPatients = asyncHandler( async (req, res) => {
    const Patients = await Patient.find();
    res.json(Patients);
});


//Set patient
const setPatient= async (req, res) => {
    const { NomFamille ,Prenom,birth,adress,phone,sexe,age,cin} = req.body;

    if (! NomFamille || !Prenom|| !birth|| !adress || !phone ) {
        res.status(400)
        throw new Error('All fields are required');
    }
    try{
        const patient = await Patient.create({
            NomFamille:NomFamille,
            Prenom:Prenom,
            birth:birth,
            adress:adress,
            phone:phone,
            sexe: sexe,
            age:age,
            cin:cin

        }); 
            
        res.json(patient);
    }catch(err){
        console.log(err);
    }
};



//Get patient by Id
const getpatientByID = asyncHandler( async(req, res) => {
    try{
        const patient = await Patient.findById(req.params._id)
        res.json(patient);
    }catch(err){
        console.log(err)
    }
})

//Update demande

const updatePatient = asyncHandler( async(req, res) => {
    const patient= await Patient.findById(req.params.id);

    if (!patient) {
        res.status(404)
        throw new Error('Patient not found');
    }

    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(updatedPatient);
});


//Delete Patient
const deletePatient = asyncHandler(async (req, res) => {
    const id = req.params._id;

    Patient.findByIdAndDelete(id)
    .then(data => {

        if (!data) {
            res.status(404).send({
                message: "Patient not found!"
            });
            } else {
            res.send({
                message: "Patient deleted successfully!"
            });
        }
    })
    .catch(err => console.warn(err))
});



module.exports = {
    getPatients,
    setPatient,
    getpatientByID,
    updatePatient,
    deletePatient  
};