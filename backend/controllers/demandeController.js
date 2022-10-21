const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const Demande = require('../models/demande');
const ValidateDemande = require("../validation/ValidationDemande");


//Get demande
const getDemandes = asyncHandler( async (req, res) => {
    const Demandes = await Demande.find().populate("Patient");
    res.json(Demandes);
});

//set Demande

const setDemande= async (req, res) => {
    const {typeAnalyse,  DateCreation, Patient} = req.body;

    if (!typeAnalyse || !DateCreation || !Patient) {
        res.status(400)
        throw new Error('All fields are required');
    }
    try{
        const demande = await Demande.create({
            typeAnalyse, 
            DateCreation,
            Patient
        }); 
            
        res.json(demande);
    }catch(err){
        console.log(err);
    }
};

const getdemandeByID = asyncHandler( async(req, res) => {
    try{
        const demande = await Demande.findById(req.params._id).populate("Patient");
        res.json(demande);
    }catch(err){
        console.log(err)
    }
})

const getDemandesByStatus = asyncHandler( async(req, res) => {
    const Demandes = await Demande.find({status:"pending"}).populate("Patient");
    res.json(Demandes);
})

//Update demande

const updateDemande = asyncHandler( async(req, res) => {
    const demande= await Demande.findById(req.params.id);

    if (!demande) {
        res.status(404)
        throw new Error('Demande not found');
    }

    const updatedDemande = await Demande.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(updatedDemande);
});

const sendDemand =  asyncHandler( async(req, res) => {
    const demande= await Demande.findById(req.params.id);

    if (!demande) {
        res.status(404)
        throw new Error('Demande not found');
    }

    const updatedDemande = await Demande.findByIdAndUpdate(req.params.id, {status:'sent'}, {new : true});
    res.json(updatedDemande);
});



// const updateDemande = async (req, res) => {
//     const { errors, isValid } = ValidateDemande(req.body);
//     try {
//       if (!isValid) {
//         res.status(404).json(errors);
//       } else {
//         const data = await Users.findOneAndUpdate(
//           { _id: req.params.id },
//           req.body,
//           { new: true }
//         );
//         res.status(201).json(data);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };


// router.patch("/updateuser/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const updateduser = await users.findByIdAndUpdate(id,req.body,{
//             new:true
//         });

//         console.log(updateduser);
//         res.status(201).json(updateduser);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })



//Delete demande
const deleteDemande = asyncHandler(async (req, res) => {
    const id = req.params._id;

    Demande.findByIdAndDelete(id)
    .then(data => {

        if (!data) {
            res.status(404).send({
                message: "Demande not found!"
            });
            } else {
            res.send({
                message: "Demande deleted successfully!"
            });
        }
    })
    .catch(err => console.warn(err))
});

// const generateToken = (user) => {
//     const payload = {
//         userId: user.id
//     };

//     const options = {
//         expiresIn: '72h'
//     };

//     return jwt.sign(payload, process.env.JWT_SECRET, options);
// };
module.exports = {
    getDemandes,
    setDemande,
    updateDemande,
    getdemandeByID,
    deleteDemande,
    getDemandesByStatus,
    sendDemand
};