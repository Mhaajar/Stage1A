const patients = require("../controllers/patientConroller")
const express = require('express')
const router = express.Router()

router.get("/",patients.getPatients);
router.post("/addPatient", patients.setPatient);
router.delete("/delete/:_id",patients.deletePatient);
router.get("/getPatient/:_id", patients.getpatientByID);
router.patch("/updatePatient/:id",patients.updatePatient);


module.exports = router
