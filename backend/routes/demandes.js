const demandes = require("../controllers/demandeController")
const express = require('express')
const router = express.Router()

router.get("/",demandes.getDemandes);
router.get("/pending",demandes.getDemandesByStatus);
router.post("/addDemande",demandes.setDemande);
router.delete("/delete/:_id",demandes.deleteDemande);
router.get("/getDemande/:_id", demandes.getdemandeByID);
router.patch("/updateDemande/:id",demandes.updateDemande);
router.post('/send/:id',demandes.sendDemand)


module.exports = router